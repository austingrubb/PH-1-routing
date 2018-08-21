import React, { Component } from 'react';
import Home from './Home/Home';
import About from './About/About';
import {Route, Link} from 'react-router-dom'

class App extends Component {
  
  render() {
    return (
      <div>
        <nav>
          <Link to= '/'>Home</Link>
          <Link to= '/about'>About</Link>
        </nav>
        <main>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
        </main>
      </div>
    );
  }
}

export default App;
