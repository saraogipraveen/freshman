import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Weather from './components/Weather';
import Others from './components/Others';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/weather">Weather</Link>
          <Link to="/others">Others</Link>
        </nav>


        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/weather"><Weather /></Route>
          <Route path="/others"><Others /></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
