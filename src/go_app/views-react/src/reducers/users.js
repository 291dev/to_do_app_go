import { LOGIN, SIGN_UP} from "../actions/user_action";


export default ( state = {}, action) => {
  console.log('users', state);
  switch (action.type){
    case LOGIN:
      console.log(action);
      const userName = action.response.data.name
      return {userName};
    case SIGN_UP:
      console.log(action.type);
      return {state, response: action.response.data};
    default:
      return state
  }
}