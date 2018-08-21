import React, { Component } from 'react';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Router from './layout/Router';
import Header from './layout/Header';

import '../App.css';

const client = new ApolloClient({
  uri: 'https://api-uswest.graphcms.com/v1/cjl1iqlw3069d01f160ophfxl/master',
});

class Layout extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <Router />
        </div>
      </ApolloProvider>
    );
  }
}

export default Layout;
