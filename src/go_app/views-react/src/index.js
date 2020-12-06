import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { BrowserRouter, Route, Switch} from 'react-router-dom';
import reducer from './reducers';
import Login from './components/login';
import SignUp from './components/sign_up';
import TodoList from './components/todo/list';

import * as serviceWorker from './serviceWorker';

const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)

const store = createStore(reducer, enhancer);


ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Login}></Route>
      {/* <Route exact path="/signUp" component={SignUp}></Route> */}
      <Route exact path="/todoList" component={TodoList}></Route>
      </Switch>
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>,
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
