import axios from 'axios';
export const GET_TODO_LIST = 'GET_TODO_LIST'

export const getTodoList = () => async dispatch => {
  const response = await axios.get("/getTodoList");
  dispatch({type:GET_TODO_LIST, response});
}