import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//TODO remove after testing
import { RECEIVE_CURRENT_USER } from './actions/session_actions';
window.RECEIVE_CURRENT_USER = RECEIVE_CURRENT_USER;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //TODO remove after testing
  window.store = store;

  ReactDOM.render(<Root store={store} />, root);
});
