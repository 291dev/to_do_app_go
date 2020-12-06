import React, {Component}  from 'react';

import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'

import { login } from '../actions/user_action'; 

class Login extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log("componentDidMount");
  }
  onClickLogin(){
    const req = {
      userId:"fukui@fukui.com",
      password:"password"
    }
    this.props.login(req);
  }
  toList(){
    this.props.history.push('/todoList')
  }

  render(){
    const props = this.props;
    console.log('state',this.state);
    return (
      <div>
        <h1>こんにちは{props.userName}</h1>
        <input type="submit" value="ログイン" onClick={this.onClickLogin.bind(this)}/>
        <input type="submit" value="リスト" onClick={this.toList.bind(this)}/>
      </div>
    );
  }
}

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