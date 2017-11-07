/**
 * @author Joseph Caiani
 * @description Common component: Nav Bar.
 */

import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export class NavigationBar extends Component {
    render() {
        return (
            <Navbar >
                <Navbar.Header>
                    <Navbar.Brand>
                        Joseph Caiani - Sample Project
                    </Navbar.Brand>
                </Navbar.Header>
                    <Nav pullRight>
                        <NavItem eventKey={1}  href="#/">Home</NavItem>
                        <NavItem eventKey={2} href="#/contact">Contact List</NavItem>
                        <NavItem eventKey={3} href="#/about">About</NavItem>
                    </Nav>
            </Navbar>
        )
    }
}