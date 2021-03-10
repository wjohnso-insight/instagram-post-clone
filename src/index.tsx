import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

import './index.css'

import { fetchUsers } from './features/users/userSlice'
import { fetchPosts } from './features/posts/postsSlice'

store.dispatch(fetchUsers())
store.dispatch(fetchPosts())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


