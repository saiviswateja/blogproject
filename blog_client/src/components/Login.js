import React from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function Login() {
    const history = useHistory();
    const loginPressed = ()=>{
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const userDetails = {email,password};
        if(email!=="" && password!==""){
            axios.post("http://localhost:5000/user/signin",userDetails)
            .then(res=>{
                if(res.data.success){
                    localStorage.setItem("user",JSON.stringify(res.data.user));
                    history.push("/home");
                }
                else{
                    alert(`${res.data.error}`);
                }
            });
        }
        else{
            alert("Please provide all the details");
        }
    }
    return (
        <div>
            <div>
                <div className="row logo_admin" style={{marginTop:"4%"}}>
                    <div className="card" style={{width:"20rem"}}>
                        <div className="card-body">
                            <div className="row title">
                                <h3 className="card-title">User Login</h3>
                            </div>
                            <div className="row fieldname">
                                <small><b>Email or mobile phone number</b></small>
                            </div>
                            <input className="form-control input_field" id="email"></input>
                            <div className="row fieldname">
                                <small><b>Password</b></small>
                            </div>
                            <input className="form-control input_field" id="password"></input>
                            <div className="row" style={{marginTop:"3%"}}>
                            <button className="btn btn-warning admin_login_button" onClick={loginPressed}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
