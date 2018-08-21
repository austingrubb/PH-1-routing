import React, { Component } from 'react';
import Home from './Home/Home';
import About from './About/About';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        This is App.js
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </div>
    );
  }
}

export default App;
