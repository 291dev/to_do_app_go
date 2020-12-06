import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import reducer from './reducers';
import Login from './components/login';
import SignUp from './components/sign_up';
import TodoList from './components/todo/list';
import Error401 from './components/errors/error401';
import {requestInterceptor, responseInterceptor} from './axios_util';
// import * as serviceWorker from './serviceWorker';
import List_Hook from './components/todo/list-react-async-hook';
// axios interceptorを有効化
requestInterceptor();
responseInterceptor();

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
      <Route exact path="/error401" component={Error401}></Route>
      <Route exact path="/test" component={List_Hook}></Route>

      </Switch>
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>,
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
