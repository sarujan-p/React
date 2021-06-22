import React from "react";
import {BrowserRouter as Router ,Switch ,Route} from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
