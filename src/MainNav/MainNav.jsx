import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './MainNav.scss';

const MainNav = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/home"><i><b>NAZMUL</b></i></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="NavLinks ">
                            <Link to="/home">Home</Link>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? 'text-danger' : ''
                                }
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) =>
                                    isActive ? 'text-danger' : ''
                                }
                            >
                                Blog
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default MainNav;