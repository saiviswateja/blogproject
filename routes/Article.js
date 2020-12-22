const express = require('express');
const { addArticle,getArticles, likeArticle, dislikeArticle, getArticle } = require('../controllers/Article');
const router = express.Router();

router.post("/",addArticle);

router.get("/",getArticles);

router.get("/:id",getArticle);

router.put("/like",likeArticle);

router.put('/dislike',dislikeArticle)

module.exports = router;