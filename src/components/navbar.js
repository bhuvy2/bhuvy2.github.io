import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar color="light" light expand="md" className="col-md-10 col-sm-12">
          <Link to='/' className='navbar-brand'>bhuvy</Link>
                <NavbarToggler onClick={this.toggle} className="mr-2" />
                <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/writing' className='nav-link'>Writing</Link>
              </NavItem>
              <NavItem>
                <Link to='/tech' className='nav-link'>Tech</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        );
    }
}

