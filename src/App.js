import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import NavBar from './components/navbar';
import MarkdownGenerator from './pages/MarkdownGenerator';
import CollectionGenerator from './pages/CollectionGenerator';
import content from './md';
import _ from 'lodash';
const exclude = ['index'];

const Index = MarkdownGenerator('index');
const Writing = CollectionGenerator(e => e.type === 'writing');
const Tech = CollectionGenerator(e => e.type === 'tech');
class Page extends Component {
    goBack(){
        window.history.back();
    }

    render() {
        const articleRoutes = _.difference(Object.keys(content), exclude);
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

                {
                    articleRoutes.map((key, idx) => {
                        const Cls = MarkdownGenerator(key);
                        return <Route
                        path={process.env.PUBLIC_URL + '/' + key}
                        key={key}
                        component={() => <Cls />} />
                    })
                }
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
