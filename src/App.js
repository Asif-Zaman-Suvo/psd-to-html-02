import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import ApplyNow from "./Components/ApplyNow/ApplyNow";
import Department from "./Components/Department/Department";
import Header from "./Components/Header/Header";
import Information from "./Components/Information/Information";

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Header></Header>
          <Department></Department>
          <Information></Information>
          <ApplyNow></ApplyNow>

        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
