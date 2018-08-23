import React from 'react';
import gql from 'graphql-tag';

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
      <h2>Update Post</h2>
      <PostForm updatePost={updatePost} existingPostData={existingPostData} />
    </div>
  );
};

export default UpdatePost;
