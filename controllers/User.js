const User = require("../models/User");
const jwt = require('jsonwebtoken');

exports.SignUp = (req,res)=>{
    const user = new User(req.body);
    User.find({email:req.body.email},(err,userWithEmail)=>{
        if(err){
            return res.json({
                error:"error while saving the user",
                success:false
            })
        }
        if(userWithEmail.length!==0){
            return res.json({
                success:false,
                error:"Already have an account with the same mail id"
            })
        }
        else{
            user.save((err,user)=>{
                if(err){
                    console.log(err)
                    return res.json({
                        error:"error hile saving the user",
                        success:false
                    })
                }
                return res.send({
                    success:true,
                    user
                });
            })
        }
    })
}

exports.SignIn = (req,res)=>{
    const {email,password} = req.body;
    User.findOne({email},(err,user)=>{
        if(err||!user){
            return res.json({
                error:"No user found with the mentioned mail id",
                success:false
            });
        }
        if(!user.authenticate(password)){
            return res.json({
                error:"Email or password didnt match",
                success:false
            });
        }
        const token = jwt.sign({_id:user._id},"secret");
        return res.json({
            error:"",
            success:true,
            user:user,
            token:token
        });
    })
}