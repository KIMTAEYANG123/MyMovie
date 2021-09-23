const express = require("express")
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser");
const { User } = require("./model/User");
const { Comments } = require("./model/Comments");
const { auth } = require("./middleware/auth");

const app = express()
const config = require("./config/key");
const port = process.env.PORT || 5000

// application/x-www-form-urlencoded type을 분석해서 가져오도록
app.use(bodyParser.urlencoded({extended : true}));
// application/json 파일을 가져올 수 있도록;
app.use(bodyParser.json())
app.use(cookieParser())
// mongo  연결되면 'MongoDB connected...' console 에 출력
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology:true, 
}).then(()=>console.log('MongoDB connected...'))
.catch(err=> console.log(err))


app.get('/api/auth', auth , (req,res) =>{
    // 여기까지 미들웨어를 통과해 왔다는 얘기는 Authentication == true
    res.status(200).json({
        _id : req.user._id,
        isAdimin : req.user.role == 0 ? false : true,
        isAuth : true,
        email : req.user.email,
        name : req.user.nickName,
        role : req.user.role,
    })
})

app.post('/api/registry',(req,res)=>{

    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});

app.post('/api/login',(req,res)=>{
	// 요청된 email 을 db에서 찾기
	User.findOne({email : req.body.email},(err,user)=>{
      
    	if(!user){
        	return res.json({
            	loginSuccess : false,
                message : "제공된 이메일에 해당하는 유저가 없습니다"
            })
        }
        
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch)
               return res.json({ loginSuccess : false, message : "비밀번호가 틀렸습니다"})
           
            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err)          
                    // token 을 쿠키에 저장한다
                    res.cookie("x_auth", user.token)
                    .status(200)
                    .json({loginSuccess : true, userId : user._id ,userName: user.nickName})
            })
           
         });
        
    });
});

app.get("/api/logout", auth, (req, res) => {
   
    User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});


app.post('/api/movie/addToComment', (req,res) => {
        
    // 객체로 받은 정보 저장
    const comments = new Comments(req.body)
    
    comments.save((err,doc)=>{
        if(err) return res.status(400).send(err);
        return res.status(200).json({success:true,result:doc})
    })
})

app.post('/api/movie/getComments', (req,res)=>{

    Comments.find({'movieId':req.body.movieId}).populate('userFrom')
    .exec((err,comments)=>{
        
        if(err) return res.status(400).send(err)
        return res.status(200).json({success:true, comments})
    })
    
})




app.listen(port, () => {
    console.log(`Server Listening on ${port}`)
  });