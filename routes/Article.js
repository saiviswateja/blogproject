const express = require('express');
const { addArticle,getArticles, likeArticle, dislikeArticle } = require('../controllers/Article');
const router = express.Router();

router.post("/",addArticle);

router.get("/",getArticles);

router.put("/like",likeArticle);

router.put('/dislike',dislikeArticle)

module.exports = router;