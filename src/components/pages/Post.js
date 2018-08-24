import React from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

//
import UpdatePost from './post/UpdatePost';
import ToggleEditButton from './post/ToggleEditButton';

//
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

//
const Post = ({ match: { params: { id } } }) => {
  //
  return (
    <div>
      <Query query={POST_QUERY} variables={{ id }}>
        {({ data, loading }) => {
          if (loading) return <h1>Loadgin...</h1>;

          const { post: { id, title, body } } = data;
          const { isReadOnly } = data;

          //
          return (
            <div>
              <ToggleEditButton text="Toggle Edit" isReadOnly={isReadOnly} />
              {isReadOnly ? (
                <div>
                  <h1>{title}</h1>
                  <h3>{body}</h3>
                </div>
              ) : (
                <div>
                  <UpdatePost existingPostData={{ id, title, body }} />
                </div>
              )}
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Post;
