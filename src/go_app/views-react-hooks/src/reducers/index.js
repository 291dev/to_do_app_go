import { combineReducers } from 'redux';
import { reducer as form } from "redux-form";

import users from './users';
import todo from './todo';
export default combineReducers({todo, users, form})
