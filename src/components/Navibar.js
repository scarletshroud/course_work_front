import React from 'react'; 
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Navibar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>Demo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="main-navbar">
                        <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/learn">Learn</Link></Nav.Link>
                        <Nav.Link><Link to="/map">Map</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    )
}


export default Navibar;