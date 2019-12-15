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
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/weather"><Weather /></Route>
          <Route path="/others"><Others /></Route>
          <Route path="*"><NoMatch /></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
