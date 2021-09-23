const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require("moment");

const saltRounds = 10;

const userSchema = mongoose.Schema({
	name: {
        type:String,
        maxlength:50
    },
    email: {
        type:String,
        trim:true,
        unique: 1 
    },
    password: {
        type: String,
        minlength: 5
    },
    role : {
        type:Number,
        default: 0 
    },
    image: String,
    token : {
        type: String,
    },
    tokenExp :{
        type: Number
    },
    nickName:{
        type:String
    }
});



// save 전에 func 을 진행하도록. next() 를 만나면 다시 save 로 돌아간다
userSchema.pre('save',function(next){
    let user = this;
    
    // 비밀번호를 바꿀 때만 암호화를 시행하도록
     if(user.isModified('password')){
       // 비밀번호 암호화
         bcrypt.genSalt(saltRounds, function(err, salt){
           if(err) return next(err);
         
             // 첫번째 argument : 실제 비밀번호
             // hash : 암호화된 비밀번호
             bcrypt.hash(user.password, salt, function(err,hash){
               if(err) return next(err);
                 user.password = hash
                 next();
           })
       })
   }else{
         next()             
   }
});

userSchema.methods.comparePassword = function(plainPassword,cb){
	// plainPassword와 암호화된 비밀번호가 일치하는 지 확인
  
    bcrypt.compare(plainPassword, this.password, function(err,isMatch){
  	if(err) return cb(err);
    cb(null, isMatch);
  })
}

userSchema.methods.generateToken = function(cb) {
    const user = this;

    const token =  jwt.sign(user._id.toHexString(),'secret')
    const oneHour = moment().add(1, 'hour').valueOf();

    user.tokenExp = oneHour;
    user.token = token;
    user.save(function (err, user){
        if(err) return cb(err)
        cb(null, user);
    })
}

userSchema.statics.findByToken = function (token, cb) {
    const user = this;

    jwt.verify(token,'secret',function(err, decode){
        // 유저 아이디를 이용하여 유저를 찾은 다음에
        // 클라이언트에서 가져온 token 과 db 의 token 이 일치하는 지 확인
        user.findOne({"_id":decode, "token":token}, function(err, user){
            if(err) return cb(err);
            cb(null, user);
        })
    })
}





const User = mongoose.model('User',userSchema)

// 다른 파일에서도 쓸 수 있도록
module.exports = {User}