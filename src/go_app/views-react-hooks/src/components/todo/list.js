import React, { useEffect } from 'react';

import _ from 'lodash';
import { connect } from 'react-redux';
import { getTodoList } from '../../actions/todo_actions';

const List = props => {

  useEffect(() => {
    props.getTodoList();
  },[])
  const renderList = () => {
    return _.map(props.todo, todo => (
      <tr key={todo.crtTimestamp}>
        <td>{todo.category}</td>
        <td>{todo.toDo}</td>
        <td>{todo.timeToBeDone}</td>
      </tr>
    ))
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>

        </thead>
        <tbody>
          {renderList()}
        </tbody>
      </table>
    </div>
  );
}
const mapStateToProps = state => {
  console.log('list_mapStateToProps', state)
  return { todo: state.todo }
}
const mapDispatchToProps = ({ getTodoList })
export default connect(
  mapStateToProps, mapDispatchToProps
)(List)