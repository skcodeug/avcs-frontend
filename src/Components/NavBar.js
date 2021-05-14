import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';

function NavBar() {
    return (
        <div>
                    
                    
            <Nav fill >
    
                <Nav.Item>
                    <Nav.Link activeClassName="active" href="/home" id="navlinks">Client</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="prospectus" href="/prospectus" id="navlinks">Prospectus</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/quotations" eventKey="link-2" id="navlinks">Quotations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/contracts" eventKey="link-3" id="navlinks">Contracts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/operations" eventKey="link-4" id="navlinks">Operations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/accounts" eventKey="link-11" id="navlinks">Accounts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/hr" eventKey="link-5"id="navlinks">HR</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-6" id="navlinks">Settings</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/reports" eventKey="link-7" id="navlinks">Reports</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/users" eventKey="link-8" id="navlinks">Users</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/groups" eventKey="link-9" id="navlinks">Groups</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/maritalstatus" eventKey="link-10" id="navlinks">Marital Status</Nav.Link>
                </Nav.Item>
                
               
            </Nav>
        </div>
    )

}
export default NavBar;