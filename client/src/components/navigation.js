import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function Navigation() {
  return (
        <Navbar>
        
            
            <LinkContainer to="/">
                <Navbar.Brand href="#home">Home</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                 <LinkContainer to="/login">
                    <Nav.Link >Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/deposit">
                    <Nav.Link >Deposit</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/withdraw">
                    <Nav.Link>Withdraw</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/balance">
                    <Nav.Link>Balance</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/transactions">
                    <Nav.Link>Transactions</Nav.Link>
                </LinkContainer>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
                <LinkContainer to="/username">
                    <Nav.Link >Nia rivera</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/logout">
                    <Nav.Link >Logout</Nav.Link>
                </LinkContainer>
            </Navbar.Collapse>
            </Navbar.Collapse>
        </Navbar>
  );
}

export default Navigation