import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
            <BrowserRouter>
            <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/hello'>Hello</Link></li>
            </ul>
            <Switch>
                <Route exact path='/' component={() => <h1>Index</h1>} />
                <Route exact path='/hello' component={() => <h1>Hello</h1>} />
            </Switch>
            </div>
            </BrowserRouter>
    );
  }
}

export default App;
