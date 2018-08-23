import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import SwitchAndRoutes from './layout/SwitchAndRoutes';
import Header from './layout/Header';

import '../App.css';

const client = new ApolloClient({
  uri: 'https://api-uswest.graphcms.com/v1/cjl1iqlw3069d01f160ophfxl/master',
});

class Layout extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <SwitchAndRoutes />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default Layout;
