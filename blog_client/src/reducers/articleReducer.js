import {CREATE_ARTICLE, DISLIKE_ARTICLE, FETCH_BLOGS, FETCH_BLOG_BY_ID, LIKE_ARTICLE} from '../types';

export const articleReducer = (state={},action)=>{
    switch (action.type) {
        case FETCH_BLOGS:
            return {
                ...state,
                articles:action.payload.articles
            }    
        case FETCH_BLOG_BY_ID:
            return {
                ...state,
                article:action.payload.article
            }
        case LIKE_ARTICLE:
            return {
                ...state,
                article:action.payload.newArticle
            }
        case DISLIKE_ARTICLE:
            return {
                ...state,
                article:action.payload.newArticle
            }
        case CREATE_ARTICLE:
            return {
                ...state
            }
        default:
            return state;
    }
}