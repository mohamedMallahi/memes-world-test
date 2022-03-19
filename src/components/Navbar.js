import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
        <div className="d-flex">
          <Link className="btn btn-success" to="/signup">
            Sign Up
          </Link>
          <Link className="btn btn-success mx-2" to="/signin">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
