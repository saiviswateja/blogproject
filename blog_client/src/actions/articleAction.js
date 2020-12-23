import axios from 'axios';
import {FETCH_BLOGS,FETCH_BLOG_BY_ID,LIKE_ARTICLE,DISLIKE_ARTICLE, CREATE_ARTICLE} from '../types';

export const fetchArticles = ()=>async (dispatch)=>{
    console.log("came to fetch the articles");
    fetch('http://localhost:5000/article')
    .then(res=>res.json())
    .then((res)=>{
        dispatch({
            type: FETCH_BLOGS,
            payload: res,
            });
    })
}

export const fetchArticleById = (_id)=>(dispatch)=>{
    fetch('http://localhost:5000/article/'+_id)
    .then(res=>res.json())
    .then((res)=>{
        console.log(res);
        dispatch({
            type: FETCH_BLOG_BY_ID,
            payload: res,
            });
    })
}

export const createArticle = (article)=>(dispatch)=>{
    axios.post("http://localhost:5000/article",article)
        .then(res=>{
            dispatch({
                type:CREATE_ARTICLE,
                payload:res
            })
        })
}

export const likeArticle = (_id)=>(dispatch)=>{
    console.log("came to like article");
    console.log(_id);
    axios.put("http://localhost:5000/article/like",{
        "_id":_id
    })
    .then((res)=>{
        console.log(res);
        dispatch({
            type: LIKE_ARTICLE,
            payload: res.data,
            });
    })
}

export const dislikeArticle = (_id)=>(dispatch)=>{
    console.log("came to dislike article");
    console.log(_id);
    axios.put("http://localhost:5000/article/dislike",{
        "_id":_id
    })
    .then((res)=>{
        console.log(res);
        dispatch({
            type: DISLIKE_ARTICLE,
            payload: res.data,
            });
    })
}