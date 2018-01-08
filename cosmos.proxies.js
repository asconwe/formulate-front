// cosmos.proxies.js
import createReduxProxy from 'react-cosmos-redux-proxy';
import { createStore } from 'redux'
import configureStore from './src/store';
import structure from './src/reducers'

const ReduxProxy = createReduxProxy({
    createStore: (state) => {
      const store = createStore(
        structure,
        state
      )
      return store;
    }
});

export default [
  ReduxProxy
  // ...other proxies
];