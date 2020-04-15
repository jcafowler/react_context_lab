import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar"
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <NavBar/>
      <Switch>

      </Switch>
    </div>
  );
}

export default App;
