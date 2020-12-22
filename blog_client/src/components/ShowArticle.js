import React from 'react';
import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {useHistory} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';

function ShowArticle() {
    const history = useHistory();
    let {id} = useParams();
    const [likes,setLikes] = useState(0);
    const [article,setArticle] = useState({});
    useEffect(() => {
        axios.get("http://localhost:5000/article/"+id)
             .then(res=>{
                 setArticle(res.data.article)
                 setLikes(res.data.article.likeCount)
             })
    }, []);
    useEffect(()=>{
        
    },[likes])
    useEffect(()=>{
        if(localStorage.getItem("user")===null){
            history.push("/login");
        }
    })
    const likeButtonPressed = ()=>{
        axios.put("http://localhost:5000/article/like",{
            "_id":id
        })
        .then(res=>{
            setLikes(res.data.newArticle.likeCount);
        })
    }
    const dislikeButtonPressed = ()=>{
        if(likes===0){
            return
        }
        axios.put("http://localhost:5000/article/dislike",{
            "_id":id
        })
        .then(res=>{
            setLikes(res.data.newArticle.likeCount);
        })
    }

    return (
        <div>
            <div className="row logo_admin" style={{marginTop:"4%"}}>
                    <div className="card" style={{width:"60rem"}}>
                        <div className="card-body">
                            <div className="row title">
                                <h3 className="card-title">{article.articleName}</h3>
                            </div>
                            <div className="row">
                                <p>{article.articleDescription}</p>
                            </div>
                        </div>
                        <center>
                            <button type="button" class="btn btn-primary btn-circle btn-xl" onClick={likeButtonPressed} style={{marginRight:"1%"}}><ThumbUpAltIcon fontSize="large"></ThumbUpAltIcon></button>
                            <button type="button" class="btn btn-warning btn-circle btn-xl" onClick={dislikeButtonPressed} style={{marginRight:"1%"}}><ThumbDownIcon fontSize="large"></ThumbDownIcon></button>
                             <b>{likes}</b> likes so far
                        </center>
                    </div>
                </div>    
                <Navbar fixed="bottom" bg="dark" variant="dark">
                    <button type="button" className="btn btn-warning btn-circle btn-xl logout_button"  onClick={()=>{
                        localStorage.clear();
                        history.push('/login')
                    }}>Log Out</button> 
            </Navbar>
        </div>
    )
}

export default ShowArticle
