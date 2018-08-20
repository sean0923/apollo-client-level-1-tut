import React, { Component } from 'react';
import Header from './layout/Header';
import Body from './layout/Body';

import '../App.css';

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default Layout;
