import React,{useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
import {createArticle} from '../actions/articleAction';
import {connect} from 'react-redux';

function CreateArticle(props) {
    const history = useHistory();
    const [user,setUser] = useState({});
    useEffect(()=>{
        if(localStorage.getItem("user")===null){
            history.push("/login");
        }
        else{
            setUser(JSON.parse(localStorage.getItem("user")));
        }
    },[])
    const publishPressed = ()=>{
        const articleName = document.getElementById("title").value;
        const articleDescription = document.getElementById("desc").value;
        const articleWriter = user._id;
        console.log(articleWriter);
        if(articleName==="" || articleWriter===""){
            alert("Please provide all the details for publishing");
            return;
        }
        props.createArticle({
            articleName,
            articleDescription,
            articleWriter
        });
        history.push('/home');
    }
    return (
        <div>
            <div>
                <div className="row logo_admin" style={{marginTop:"4%"}}>
                    <div className="card" style={{width:"60rem"}}>
                        <div className="card-body">
                            <div className="row title">
                                <h3 className="card-title">Publish ur Article....</h3>
                            </div>
                            <div className="row fieldname">
                                <div className="col">
                                    <small><b>Title</b></small>
                                    <input className="form-control" id="title"></input>
                                </div>                           
                            </div>
                                <div className="col">
                                    <small><b>Description</b></small>
                                    <textarea className="form-control" id="desc" rows="15"></textarea>
                                </div>
                            <div className="row" style={{marginTop:"3%"}}>
                                    <button onClick={publishPressed} className="btn btn-success" style={{width:"20%"}}>Publish</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default connect(null,{
    createArticle
})(CreateArticle);
