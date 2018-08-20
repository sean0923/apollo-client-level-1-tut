import React, { Component } from 'react';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

import Header from './layout/Header';
import Body from './layout/Body';

import '../App.css';

const client = new ApolloClient({
  uri: 'https://api-uswest.graphcms.com/v1/cjl1iqlw3069d01f160ophfxl/master',
});

const testQuery = gql`
  {
    posts {
      id
      title
      body
    }
  }
`;

client
  .query({
    query: testQuery,
  })
  .then(({ data }) => console.log('data: ', data));

class Layout extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <Body />
        </div>
      </ApolloProvider>
    );
  }
}

export default Layout;
