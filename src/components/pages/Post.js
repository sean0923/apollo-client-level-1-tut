import React from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const POST_QUERY = gql`
  query onePost($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      body
    }
  }
`;

const Post = ({ match: { params: { id } } }) => {
  return (
    <div>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <div>Post</div>

      <Query query={POST_QUERY} variables={{ id }}>
        {({ data, loading }) => {
          if (loading) return <h1>Loadgin...</h1>;

          return (
            <div>
              <h1>{data.post.title}</h1>
              <h3>{data.post.body}</h3>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Post;
