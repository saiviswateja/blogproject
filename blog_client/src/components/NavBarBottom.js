import React from 'react';
import { Navbar } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

function NavBarBottom() {
    const history = useHistory();
    return (
        <div>
            <Navbar fixed="bottom">
                    <button type="button" class="btn btn-warning btn-circle btn-xl" id="button_navbar_1" onClick={()=>{
                        history.push('/signup')
                    }}>Sign up</button> 
                    <button type="button" class="btn btn-danger btn-circle btn-xl" id="button_navbar" onClick={()=>{
                        history.push('/login')
                    }}>Login</button> 
            </Navbar>
        </div>
    )
}

export default NavBarBottom;
