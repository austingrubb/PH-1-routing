import React, { Component } from 'react';
import Home from './Home/Home';
import About from './About/About';
import FAQ from './About/FAQ/FAQ'
import Company from './About/Company/Company'
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
          <Route path='/' exact render={Home}/>
          <Route path='/about' render={() => <About>
            <Route path='/about/faq' component={FAQ}/>
            <Route path='/about/company' component={Company}/>
          </About>}/>
          {/* <Route path='./' */}
        </main>
      </div>
    );
  }
}

export default App;
