import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Inicio from './components/Inicio';
import Cronometer from './components/cronometer';
import Tabata from './components/Tabata';
import ForTime from './components/fortime';
import Emom from './components/emom';
import Amrap from './components/Amrap';
import Header from './components/Header';

function App() {

  return (
    <Router>
        <Header />
        <Switch>
          <Route path="/Cronometer">
            <Cronometer />
          </Route>
          <Route path="/Tabata">
            <Tabata />
          </Route>
          <Route path="/ForTime">
            <ForTime />
          </Route>
          <Route path="/Emom">
            <Emom />
          </Route>
          <Route path="/Amrap">
            <Amrap />
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
        </Switch>
        <footer>
          
        </footer>
      </Router>
  
  );
}

export default App;
