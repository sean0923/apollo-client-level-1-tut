import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../logo.svg';
import '../../App.css';

const FlexWrapper = styled.div`
  margin-top: 1rem;

  display: flex;
  color: white;
  justify-content: center;
  align-items: flex-end;

  & * {
    margin: 0;
    padding: 0;
    line-height: 1;
  }

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <FlexWrapper>
        <h1>Welcome to React</h1>
        <Link to="/">
          <h2> Home </h2>
        </Link>
        <Link to="/post/new">
          <h2> New Post </h2>
        </Link>
      </FlexWrapper>
    </header>
  );
};

export default Header;
