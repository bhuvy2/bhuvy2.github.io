import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link, } from 'react-router-dom';
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

class NavBar extends Component {
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
                <Link to='/' className='nav-link'>Index</Link>
              </NavItem>
              <NavItem>
                <Link to='/home' className='nav-link'>Home</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        );
    }
}

class Page extends Component {
    constructor(props) {
        super(props);
    }

    goBack(){
        window.history.back();
    }

    render() {
        let index = <><h1>Index</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></>

        let home = <><h1>Home</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></>
        return (<div id="content" className="container-fluid full-height">
                <div className="row content-row">
                <div className="offset-md-2 col-md-6">
                <Switch>
                <Route exact path='/' component={() =>
                                                 index} />
                <Route exact path='/hello' component={() => home} />
                </Switch>
                </div>
                </div>
                <div id="footer" className="row">
                <div className="col-md-1">
                <button
                className="back-button"
                onClick={this.goBack}>
                ←
                </button>
                </div>
                </div>
                </div>)
    }
}

class App extends Component {
  render() {
    return (
            <BrowserRouter >
            <div class="full-height">
            <NavBar />
            <Page />
            </div>
            </BrowserRouter>
    );
  }
}

export default App;
