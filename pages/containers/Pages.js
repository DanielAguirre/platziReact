import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Home from './Home';
import Post from './Post';
import Error404 from './Error404';

function Pages(){
  return (
    <main role="application">
      <Switch>
        {/* Articles List */}
        <Route
          path="/"
          exact
          component={Home}
        />
        {/* Article Detail */}
        <Route
          path="/post/:id"
          exact
          component={About} 
        />
        {/* USer Profile */}
        <Route
          path="/usert/:id"
          exact
          component={Profile} 
        />
      {/* Error 404*/}
        <Route component={Error404} />
      </Switch>
    </main>
    );
}

export default Pages;