import React from 'react';
import './App.css';
// Libraries
import {
  BrowserRouter as Router,
  Switch, 
   NavLink, 
   Route} from "react-router-dom"
//Components
import Home from "./Home"
import About from "./About"
import Credit from "./Credit"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <div>
          <ul>
            <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
            <li><NavLink activeClassName="active" to="/credit">Credit</NavLink></li>
            <li><NavLink activeClassName="active" to="/Does not exist">Nope</NavLink></li>
          </ul>
        </div>
        
          <Switch>
            <Route exact path="/"component ={Home}/>          
            <Route path="/about"component={About}/>
            <Route path="/credit" component={Credit}/>
            <Route path="*" render={()=><div>404</div>}/>
          </Switch>

        </Router>

      </header>
    </div>
  );
}

export default App;
