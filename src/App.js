import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import './App.scss';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/' exact component={Homepage} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
