// src/Navbar.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Navbar.css';

const CustomNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={menuOpen ? "show" : ""}>
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <NavDropdown title="RegistrationPage" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/Registration">Registration Page</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Login" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/LoginPage">Login Page</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/RefinedSugar">Refined Sugar</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/BrownSugar">Brown Sugar</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/Jaggery">Jaggery (Gud)</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/Molasses">Molasses</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
