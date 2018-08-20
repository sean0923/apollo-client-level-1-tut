import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const POSTS_QUERY = gql`
  query allPosts {
    posts {
      id
      title
      body
    }
  }
`;

const Body = () => {
  return (
    <div>
      <Query query={POSTS_QUERY}>
        {({ loading, data }) => {
          if (loading) return <div>Loading...</div>;
          const { posts } = data;

          return (
            <div>
              {posts.map(({ title }, idx) => {
                return (
                  <div key={idx}>
                    <h2>{title}</h2>
                  </div>
                );
              })}
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Body;
