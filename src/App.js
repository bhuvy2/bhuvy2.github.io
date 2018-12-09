import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import NavBar from './components/navbar';
import Writing from './pages/Writing';
import Tech from './pages/Tech';
import MarkdownGenerator from './pages/MarkdownGenerator';
const Index = MarkdownGenerator('index');

class Page extends Component {
    goBack(){
        window.history.back();
    }

    render() {
        return (<div id="content" className="container-fluid full-height">
                <div className="row content-row">
                <div className="offset-md-2 col-md-6">
                <Switch>
                <Route exact
                path={process.env.PUBLIC_URL + '/'}
                component={() => <Index />} />

                <Route
                path={process.env.PUBLIC_URL + '/writing'}
                component={() => <Writing />} />

                <Route
                path={process.env.PUBLIC_URL + '/tech'}
                component={() => <Tech />} />

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
            <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="full-height">
            <NavBar />
            <Page />
            </div>
            </BrowserRouter>
    );
  }
}

export default App;
