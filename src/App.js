import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link, } from 'react-router-dom';
import content from './md/';
import NavBar from './components/navbar';
import TransitionGroup from "react-transition-group/TransitionGroup";
import { CSSTransition } from 'react-transition-group';
import Writing from './pages/Writing';
import Tech from './pages/Tech';
import MarkdownGenerator from './pages/MarkdownGenerator';

const Index = MarkdownGenerator('index');

const firstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
};

class Page extends Component {
    constructor(props) {
        super(props);
    }

    goBack(){
        window.history.back();
    }

    render() {
        return (<div id="content" className="container-fluid full-height">
                <div className="row content-row">
                <div className="offset-md-2 col-md-6">
                <Switch>

                <Route exact path="/" component={() => <Index /> }/>

                <Route path="/writing" component={() => <Writing />} />

                <Route path="/tech" component={() => <Tech />} />
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
                </div>);
    }
}

class App extends Component {
  render() {
    return (
            <BrowserRouter >
            <div className="full-height">
            <NavBar />
            <Page />
            </div>
            </BrowserRouter>
    );
  }
}

export default App;
