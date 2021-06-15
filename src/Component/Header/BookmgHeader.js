import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookmgHeader = () => {
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
                <Navbar.Brand href="/home"> Online Library </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link style={linkStyle} to="/admin">Admin</Link>
                        <Link style={linkStyle} to="/addBooks">Add Books</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default BookmgHeader;