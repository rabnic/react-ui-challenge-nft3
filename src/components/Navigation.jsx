import React from 'react';

import logo from "./logo.png";

const Navigation = () => {
  return (
    <header id="header">
      <nav>
        <div class="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div class="navbar">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Isme</a>
            </li>
            <li>
              <a href="#">Developer</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </div>
        <div class="launch-app">
          <button>Launch App</button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;