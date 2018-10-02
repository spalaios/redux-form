import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import reducers from './reducers';
import PostIndex from './components/post_index';
import PostNew from './components/posts_new';
import PostShow from './components/post_show';
import reduxPromise from 'redux-promise';


const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

/**
 * we get a subtle error while rendering multiple routes like displaying components of two different routes
 * in order to handle we use switch component 
 * rule for using switch component is that the most specific route should be at the top and so on..this coz react has a greedy way of matching routes.
 */

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/* <App /> */}
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostNew} />
          <Route path="/posts/:id" component={PostShow} />
          <Route path="/" component={PostIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
