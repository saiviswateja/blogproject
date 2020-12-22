import React,{useState,useEffect} from 'react';
import {Navbar, Container} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

function NavigationBar() {
    const history = useHistory();
    return(
            <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">BlogIN</Navbar.Brand>
                        <button className="btn btn-primary" style={{marginLeft:"2%"}} onClick={()=>{
                            history.push('/article');
                        }}>Publish ur Article</button>
                    </Container>
            </Navbar>
    )
}

export default NavigationBar;
