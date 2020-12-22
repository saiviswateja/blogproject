const Article = require("../models/Article");

exports.addArticle = (req,res)=>{
    const article = new Article(req.body);
    article.save((err,savedArticle)=>{
        if(err){
            return res.send({
                success:false,
                error:err
            })
        }
        return res.send({
            success:true,
            savedArticle
        });
    });
};

exports.getArticle = (req,res)=>{
    console.log(req.params);
    Article.findById({_id:req.params.id})
    .populate('articleWriter',"_id name")
    .exec((err,article)=>{
        console.log(article);
        if(err){
            return res.send({
                success:false,
                error:err
            });
        }
        return res.send({
            success:true,
            article
        })
    })
}

exports.getArticles = (req,res)=>{
    Article.find({})
    .populate('articleWriter',"_id name")
    .exec((err,articles)=>{
            if(err){
                return res.send({
                    success:false,
                    error:err
                });
            }
            return res.send({
                success:true,
                articles
            });
        })
}

exports.likeArticle = (req,res)=>{
    Article.findById({_id:req.body._id},(err,oldArticle)=>{
        if(err){
            return res.send({
                error:err,
                success:false
            });
        }
        oldArticle.likeCount = oldArticle.likeCount+1;
        Article.findByIdAndUpdate({_id:oldArticle._id},oldArticle,{new:true},(err,newArticle)=>{
            if(err){
                return res.send({
                    error:err,
                    success:false
                });
            }
            return res.send({
                success:true,
                newArticle
            })
        });
    })
}

exports.dislikeArticle = (req,res)=>{
    Article.findById({_id:req.body._id},(err,oldArticle)=>{
        if(err){
            return res.send({
                error:err,
                success:false
            });
        }
        if(oldArticle.likeCount!==0)
            oldArticle.likeCount = oldArticle.likeCount-1;
        else
            return res.send({success:true,oldArticle});
        Article.findByIdAndUpdate({_id:oldArticle._id},oldArticle,{new:true},(err,newArticle)=>{
            if(err){
                return res.send({
                    error:err,
                    success:false
                });
            }
            return res.send({
                success:true,
                newArticle
            })
        });
    })
}