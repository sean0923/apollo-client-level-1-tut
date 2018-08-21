import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

import '../../App.css';

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
      <Link to="/post/new">
        <h2> New Post </h2>
      </Link>
    </header>
  );
};

export default Header;
