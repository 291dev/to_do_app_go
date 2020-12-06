import React,{useState} from 'react';
import { useAsync } from 'react-async-hook';
import _ from 'lodash';
import axios from 'axios';
const List_Hook = () =>{
  const getTodoList = async () => {
    const res = await axios.get("/getTodoList");
    return res;
  }
  const renderList = (todoList) => {
    return <p>{todoList[0].todo}</p>;
  }

  const [trigger, setTrigger] = useState(0);
  const [trigger2, setTrigger2] = useState(0);
  const getList = useAsync(getTodoList,[trigger2])
  console.log('list',getList);
  return (
    
    <div>
          {getList.loading && <div>loading</div>}
          {getList.error && <div>loading</div>}
          {getList.result && (
            <div>success</div>
          )}
          <button onClick={()=>{setTrigger(trigger+1)}}>トリガー</button>
          <button onClick={()=>{setTrigger2(trigger2+1)}}>トリガー2</button>
    </div>
    
  ); 
}

export default List_Hook;