import React from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import UpdatePost from './post/UpdatePost';

const POST_QUERY = gql`
  query onePost($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      body
    }
    isReadOnly @client
  }
`;

const Post = ({ match: { params: { id } } }) => {
  return (
    <div>
      <Query query={POST_QUERY} variables={{ id }}>
        {({ data, loading }) => {
          if (loading) return <h1>Loadgin...</h1>;

          const { post: { id, title, body } } = data;
          const { isReadOnly } = data;

          // 
          if (isReadOnly) {
            return (
              <div>
                <h1>{title}</h1>
                <h3>{body}</h3>
              </div>
            );
          }

          // 
          return (
            <div>
              <UpdatePost existingPostData={{ id, title, body }} />
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Post;
