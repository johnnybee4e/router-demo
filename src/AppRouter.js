import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>This is the homepage</p>
    </div>
  );
};
const About = () => {
    return (
      <div>
        <h2>About</h2>
        <p>This is about learning React Router</p>
      </div>
    );
  };
const Users = () => {
    return (
      <div>
        <h2>Users</h2>
        <p>Jon</p>
        <p>AJ</p>
        <p>Rastko</p>
      </div>
    );
  };

const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
};

export default AppRouter;
