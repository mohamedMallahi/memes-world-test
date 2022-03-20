import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

// Components
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      {/* <Navbar /> */}

      <main className="container py-4">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
