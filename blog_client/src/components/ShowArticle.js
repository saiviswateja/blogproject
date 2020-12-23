import React from 'react';
import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {useHistory} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import {fetchArticleById,likeArticle,dislikeArticle} from '../actions/articleAction'
import {connect} from 'react-redux';

function ShowArticle(props) {
    const history = useHistory();
    let {id} = useParams();
    useEffect(() => {
        console.log("came here to call");
        props.fetchArticleById(id);
    }, []);
    useEffect(()=>{
        if(localStorage.getItem("user")===null){
            history.push("/login");
        }
    })
    const likeButtonPressed = (_id)=>{
        props.likeArticle(props.article._id);
    }
    const dislikeButtonPressed = ()=>{
        console.log("dislike pressed");
        if(props.article.likeCount===0){
            return
        }
        props.dislikeArticle(props.article._id);
    }

    return (
        <div>
            {console.log(props.article)}
            {
                props.article && <div>
                    {console.log(props.article)}
                <div className="row logo_admin" style={{marginTop:"4%"}}>
                    <div className="card" style={{width:"60rem"}}>
                        <div className="card-body">
                            <div className="row title">
                                <h3 className="card-title">{props.article.articleName}</h3>
                            </div>
                            <div className="row">
                                <p>{props.article.articleDescription}</p>
                            </div>
                        </div>
                        <center>
                            <button type="button" class="btn btn-primary btn-circle btn-xl" onClick={likeButtonPressed} style={{marginRight:"1%"}}><ThumbUpAltIcon fontSize="large"></ThumbUpAltIcon></button>
                            <button type="button" class="btn btn-warning btn-circle btn-xl" onClick={dislikeButtonPressed} style={{marginRight:"1%"}}><ThumbDownIcon fontSize="large"></ThumbDownIcon></button>
                             <b>{props.article.likeCount}</b> likes so far
                        </center>
                    </div>
                </div>    
                <Navbar fixed="bottom" bg="dark" variant="dark">
                    <button type="button" className="btn btn-warning btn-circle btn-xl logout_button"  onClick={()=>{
                        localStorage.clear();
                        history.push('/login')
                    }}>Log Out</button> 
            </Navbar></div>
            }
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        article:state.article
    }
}

export default connect(mapStateToProps,{
    fetchArticleById,
    likeArticle,
    dislikeArticle
})(ShowArticle)
