import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
class AppComponent extends React.Component {
  render() {
    return (
      <BrowserRouter>
	<Switch>
        <Route path="/" component={()=><h1>index</h1>}/>
        <Route path="/hello" component={()=><h1>hello</h1>}/>
	</Switch>
      </BrowserRouter>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
