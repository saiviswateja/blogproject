import React,{useEffect} from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';
import {useHistory} from 'react-router-dom';
import NavBarBottom from './NavBarBottom';


function Home() {
    const history = useHistory();
    useEffect(()=>{
        if(localStorage.getItem("user")!==null){
            history.push("/home");
        }
    })
    return (
            <Container fluid>
                <NavBarBottom/>
            </Container>
        )
}

export default Home
