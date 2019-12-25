import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Weather from './components/Weather';
import Others from './components/Others';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route exact path="/weather"><Weather /></Route>
          <Route exact path="/others"><Others /></Route>
          <Route exact path="*"><NoMatch /></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
