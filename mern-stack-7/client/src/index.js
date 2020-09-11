import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { BrowserRouter as Router} from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import Reducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);