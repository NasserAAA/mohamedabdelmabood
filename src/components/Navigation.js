import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <div className="logo">
        <NavLink to="/">HomePage</NavLink>
      </div>
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
