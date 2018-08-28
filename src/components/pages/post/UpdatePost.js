import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

//
import PostForm from '../../common/PostForm';

//
const UPDATE_POST_MUTATION = gql`
  mutation updatePost($id: ID!, $title: String!, $body: String!) {
    updatePost(where: { id: $id }, data: { title: $title, body: $body }) {
      id
      title
      body
    }
  }
`;

const UpdatePost = ({ existingPostData }) => {
  return (
    <div>
      <Mutation mutation={UPDATE_POST_MUTATION}>
        {(updatePost, result) => {
          return (
            <PostForm
              updatePost={updatePost}
              existingPostData={existingPostData}
              setIsReadOnlyToTrue={() => {
                result.client.writeData({ data: { isReadOnly: true } });
              }}
            />
          );
        }}
      </Mutation>
    </div>
  );
};

export default UpdatePost;
