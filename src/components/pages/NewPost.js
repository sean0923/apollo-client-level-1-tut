import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

//
import PostForm from '../common/PostForm';

//
const CREATE_POST_MUTATION = gql`
  mutation createPost($title: String, $body: String) {
    createPost(data: { title: $title, body: $body }) {
      id
      title
      body
      status
    }
  }
`;

const NewPost = () => {
  return (
    <Mutation mutation={CREATE_POST_MUTATION}>
      {(createPost, { data }) => {
        return <PostForm createPost={createPost} />;
      }}
    </Mutation>
  );
};

export default NewPost;
