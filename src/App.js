import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>Routing setup</h1>
      <Router>
        <Link to="/home"> Home Page </Link> <br></br>
        <Link to="/about"> About Page </Link>
        <Route path="/home"><Home/></Route>
        <Route path="/about"><About/></Route>
      </Router>
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
