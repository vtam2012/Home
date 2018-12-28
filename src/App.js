import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <Header />
          <About />
          <Switch>
            <Route path='/' exact component={Homepage} />
          </Switch>
          <Contact/>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
