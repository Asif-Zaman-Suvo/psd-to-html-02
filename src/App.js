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
import Destination from "./Components/Destination/Destination";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Information from "./Components/Information/Information";
import News from "./Components/News/News";
import SmallFooter from "./Components/SmallFooter/SmallFooter";

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Header></Header>
          <Department></Department>
          <Information></Information>
          <ApplyNow></ApplyNow>
          <News></News>
          <Destination></Destination>
          <Footer></Footer>
          <SmallFooter></SmallFooter>

        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
