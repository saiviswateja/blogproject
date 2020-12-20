const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = Schema({
    articleName:{
        type:String,
        required:true
    },
    articleDescription:{
        type:String,
        required:true
    },
    articleWriter:{
        type:Schema.ObjectId,
        ref:"User"
    },
    likeCount:{
        type:Number,
        default:0
    }
});

module.exports = mongoose.model("Article",articleSchema,"articles");