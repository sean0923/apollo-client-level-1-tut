import React from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
  return (
    <div>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <div>Post</div>
    </div>
  );
};

export default Post;
