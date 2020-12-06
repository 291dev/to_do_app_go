import {GET_TODO_LIST} from '../actions/todo_actions';
import _ from 'lodash';

export default (state = {}, action) => {
  console.log('users', state);
  switch (action.type){
    case GET_TODO_LIST:
      console.log('action',action);
      return _.mapKeys(action.response.data, 'crtTimestamp');
    default:
      return state;
  }
}
