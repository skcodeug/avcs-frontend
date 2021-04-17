import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';

function NavBar() {
    return (
        <div>
                    
                    
            <Nav fill >
        


                <Nav.Item>
                    <Nav.Link activeClassName="active" href="/home" activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}>Client</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="prospectus" href="/prospectus">Prospectus</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/quotations" eventKey="link-2">Quotations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/contracts" eventKey="link-3">Contracts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/operations" eventKey="link-4">Operations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/accounts" eventKey="link-11">Accounts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/hr" eventKey="link-5">HR</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-6">Settings</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/reports" eventKey="link-7">Reports</Nav.Link>
                </Nav.Item>
               
            </Nav>
        </div>
    )

}
export default NavBar;