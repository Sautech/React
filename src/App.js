import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
function App() {
  return (
    <div className="App">
      <h1>Routing setup</h1>
      <Nav />
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </div>
  );
}
export default App;
