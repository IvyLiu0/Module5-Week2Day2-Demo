import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams
} from "react-router-dom";

export default function App() {
  return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/about" element={ <About />} />
          <Route path="/topics" element={ <Topics />} />
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

//Topics
function Topics() {
  let match = useNavigate();
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to = {`${match.url}/cats`}>Cats</Link>
        </li>
        <li>
          <Link to = {`${match.url}/dogs`}>Dogs</Link>
        </li>
      </ul>

      <Routes>
        <Route path={`${match.path}/:topicId`} element={<Topic />}></Route>
        <Route path={match.path} >
          <h3>Please select a topic.</h3>
        </Route>
      </Routes>
    </div>
  )
}


// add topic function
function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
