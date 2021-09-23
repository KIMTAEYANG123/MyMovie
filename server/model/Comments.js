
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommetnsSchema = mongoose.Schema({
    // ObjectId로 저 값에 맞는 객체를 외래키로 만들어 사용
    userFrom:{
        type : Schema.Types.ObjectId,
        ref:'User'
    },
    movieId:{
        type:String
    },
    commentContents:{
        type:String
    },
    likeNumber :{
        type:String
    },
    hateNumber :{
        type:String
    },
    
}, {timestamps: true})

const Comments = mongoose.model('Comments',CommetnsSchema);

module.exports = { Comments }