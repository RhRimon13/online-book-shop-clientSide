import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const linkStyle = {
        fontSize: 'larger',
        textDecoration: 'none',
        fontWeight: '600',
        color: 'brown',
        marginLeft: '20px',
        fontFamily: 'Times New Roman'
    }
    return (
        <div>
            <Navbar bg="light" expand="md">
                <Navbar.Brand className="brand-title" to="/home"> Online Library </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto navBar">
                        <Link style={linkStyle} to="/home">Home</Link>
                        <Link style={linkStyle} to="/order">Order</Link>
                        <Link style={linkStyle} to="/admin">Admin</Link>
                        <Link style={linkStyle} to="/login"><button className="btn btn-secondary">Log In</button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;