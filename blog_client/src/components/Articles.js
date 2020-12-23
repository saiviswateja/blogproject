import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchArticles} from '../actions/articleAction';

function Articles(props) {
    const history = useHistory();
    useEffect(()=>{
        if(localStorage.getItem("user")===null){
            history.push("/login");
        }
    })
    useEffect(() => {
        props.fetchArticles();
    }, []);
    return (
        <div>
            {
                props.articles.map(article=>(
                    <div className="row logo_admin" style={{marginTop:"1%"}}>
                        <div className="card" style={{width:"60rem"}}>
                            <div className="card-body">
                                <div className="row title">
                                    <h3 className="col card-title">{article.articleName}</h3>
                                    <button type="button" class="btn btn-success btn-circle btn-xl" id="button_navbar_1" onClick={()=>{
                                        history.push(`/${article._id}`);
                                    }}>Read It</button> 
                                </div>
                                <div className="card-text">
                                    by {article.articleWriter.name}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <Navbar sticky="bottom" bg="dark" variant="dark">
                    <button type="button" className="btn btn-warning btn-circle btn-xl logout_button"  onClick={()=>{
                        localStorage.clear();
                        history.push('/login')
                    }}>Log Out</button> 
            </Navbar>
        </div>
    )
}

const mapStateToProps = (state)=>{
    console.log(state);
    return {
        articles:state.articles
    }
}

export default connect(mapStateToProps,{
    fetchArticles
})(Articles);
