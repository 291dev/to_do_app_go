import axios from 'axios';

export const LOGIN = 'LOGIN_EVENT';
export const SIGN_UP = 'SIGN_UP';

export const login = req => async dispatch => {
    const response = await axios.post("/login", req);
    dispatch({type: LOGIN, response});
}

export const signUp = req => async dispatch => {
  const response = await axios.post("/signUp", req);
  dispatch({type: SIGN_UP, response});
}

