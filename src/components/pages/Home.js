import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

const POSTS_QUERY = gql`
  query allPosts {
    posts {
      id
      title
      body
    }
  }
`;

const Home = () => {
  return (
    <div>
      <Query query={POSTS_QUERY}>
        {({ loading, data }) => {
          if (loading) return <div>Loading...</div>;
          const { posts } = data;

          return (
            <div>
              {posts.map(({ title, id }, idx) => {
                return (
                  <Link key={idx} to={`/post/${id}`}>
                    <h2>{title}</h2>
                  </Link>
                );
              })}
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Home;
