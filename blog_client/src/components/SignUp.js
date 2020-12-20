import React from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function SignUp() {
    const history = useHistory();
    const signupPressed = ()=>{
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const mobileNumber = document.getElementById("mobile").value;
        const name = document.getElementById("name").value;
        const userDetails = {email,password,name,mobileNumber};
        if(email!=="" && password!==""  && mobileNumber!=="" && name!==""){
            axios.post("http://localhost:5000/user/signup",userDetails)
            .then(res=>{
                if(res.data.success){
                    history.push("/login");
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
        <center>
        <div>
            <div className="row logo_admin" style={{marginTop:"3%"}}>
                <div className="card" style={{width:"20rem"}}>
                    <div className="card-body">
                        <div className="row title">
                            <h3 className="card-title">Sign Up</h3>
                        </div>
                        <div className="row fieldname">
                            <small><b>Name</b></small>
                        </div>
                        <input className="form-control input_field" id="name"></input>
                        <div className="row fieldname">
                            <small><b>Phone Number</b></small>
                        </div>
                        <input className="form-control input_field" id="mobile"></input>
                        <div className="row fieldname">
                            <small><b>Email</b></small>
                        </div>
                        <input className="form-control input_field" id="email"></input>
                        <div className="row fieldname">
                            <small><b>Password</b></small>
                        </div>
                        <input className="form-control input_field" id="password"></input>
                        <div className="row" style={{marginTop:"3%"}}>
                        <button className="btn btn-success admin_login_button" onClick={signupPressed}>Sign Up</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </center>
    )
}

export default SignUp
