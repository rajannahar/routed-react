import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Example } from "./components/Example";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";

import {BrowserRouter as Router, Route, browserHistory, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
      <div className="App">
        <Nav />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Routed</h2>
          <p className="App-intro"></p>
        </div>
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/example" component={Example} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>

      </div>
      </Router>
    );
  }
}

export default App;
