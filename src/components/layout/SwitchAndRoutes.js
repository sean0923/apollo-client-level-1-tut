import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Post from '../pages/Post';
import NewPost from '../pages/NewPost';

const SwitchAndRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/post/new" component={NewPost} />
      <Route exact path="/post/:id" component={Post} />
      <Route exact path="/post/" component={Post} />
    </Switch>
  );
};

export default SwitchAndRoutes;
