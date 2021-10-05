import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <h1>Routing setup</h1>
      <Nav/>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <h1>This is a home page</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <h1>This is a about page</h1>
    </div>
  );
}
export default App;
