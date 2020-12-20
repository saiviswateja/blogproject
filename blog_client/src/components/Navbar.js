import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

function NavigationBar() {
    return(
            <Navbar bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="/">BlogIN</Navbar.Brand>
                    </Container>
            </Navbar>
    )
}

export default NavigationBar;
