import React, {useState, setState}  from 'react';

import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'

import { login } from '../actions/user_action'; 

const Login = props => {
  // const[state, setState] = useState(props);
  const [userId, setUserId] = useState(props.userId);
  const [password, setPassword] = useState(props.password);
  const onClickLogin=()=>{
    const req = {
      userId,password
    }
    props.login(req);
  }
  const toList=()=>{
    props.history.push('/todoList')
  }

  const reset = () => {
    setState(props)
  }
  return (
      <>
        <h1>こんにちは{props.userName}</h1>
        <div>
        <label htmlFor="userId">ユーザーID</label>
        <input id="userId" value={userId} onChange={e => setUserId(e.target.value)}/>
        </div>

        <div>
        <label htmlFor="password">パスワード</label>
        <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        <input type="submit" value="ログイン" onClick={onClickLogin}/>
        <input type="submit" value="リスト" onClick={toList}/>
      </>
    );
  }

// initial state
Login.defaultProps = {
  userId: '',
  password: ''
};

// DOMにマッピングするプロパティ
const mapStateToProps = state => {
  console.log('mapStateToProps',state.users);
  const userName = state.users;
  return userName
}

const mapDispatchToProps = ({ login });
// 正式
// const mapDispatchToProps = dispatch => ({ login: (req)=> dispatch(login(req)) })

export default connect(
  mapStateToProps, mapDispatchToProps
)(Login)