import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//
const postPerLoading = 2;

// 
const Wrapper = styled.div`text-align: left;`;

// 
const POSTS_QUERY = gql`
  query allPosts($skip: Int) {
    posts(orderBy: updatedAt_DESC, skip: $skip, first: ${postPerLoading}) {
      id
      title
      updatedAt
    }
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Query query={POSTS_QUERY}>
        {({ loading, data, fetchMore }) => {
          if (loading) return <div>Loading...</div>;
          const { posts } = data;

          return (
            <React.Fragment>
              <ol>
                {posts.map(({ title, id }, idx) => {
                  return (
                    <li key={idx}>
                      <Link to={`/post/${id}`}>{title}</Link>
                    </li>
                  );
                })}
              </ol>
              <button
                onClick={() =>
                  fetchMore({
                    variables: {
                      skip: posts.length,
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return prev;
                      return Object.assign({}, prev, {
                        posts: [...prev.posts, ...fetchMoreResult.posts],
                      });
                    },
                  })}
              >
                load more
              </button>
            </React.Fragment>
          );
        }}
      </Query>
    </Wrapper>
  );
};

export default Home;
