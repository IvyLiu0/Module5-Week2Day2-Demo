import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to = "/">Home</Link>
            </li>
            <li>
              <Link to = "/about">About</Link>
            </li>
            <li>
              <Link to = "/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* Router Handler */}
        <Routes>
          <Route path="/about" element={ <About />} />
          <Route path="/users" element={ <Users />} />
          <Route path="/" element={ <Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return(
    <div>
      <h2>Home</h2>
      <p>This is home</p>
    </div>
  );
}

function About() {
  return(
    <div>
      <h2>About</h2>
      <p>This is about</p>
    </div>
  );
}

function Users() {
  return(
    <div>
      <h2>Users</h2>
      <p>This is users</p>
    </div>
  );
}
