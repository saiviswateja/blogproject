const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors  = require('cors');
const userRouter = require('./routes/User');
const articleRouter = require('./routes/Article');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/user",userRouter);
app.use("/article",articleRouter);

mongoose.connect('mongodb://localhost:27017/blogproject',{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:true},(err,db)=>{
    if(err){
        console.log("Error connecting the db");
        return;
    }
    console.log("database connected");
});

const port = process.env.PORT || 5000 ;

app.listen(port,()=>{
    console.log(
        "Application started at the server side"
    );
});