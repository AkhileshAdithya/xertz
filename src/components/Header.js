import React, { Component } from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import { NavLink } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="white" variant="light">
                    <Navbar.Brand as={NavLink} to="/">XERTZ</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link as={NavLink} to="/top" >Top 10</Nav.Link>
                        <Nav.Link as={NavLink} to="/all">All Books</Nav.Link>
                        <Nav.Link href="https://akhileshadithya.github.io">Akhilesh</Nav.Link>
                    </Nav>
                </Navbar>                
            </div>
        )
    }
}
