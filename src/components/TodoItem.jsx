import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isCompleted, removeTodo, updateTodo } from "../features/todo/todoSlice";

function TodoItem({ todo }) {

    const [isEditable, setIsEditable] = useState(true)
    const [val, setVal] = useState(todo.text)
    const dispatch = useDispatch();

    const handleEdit = () => {
        setIsEditable(false)
    }

    const handleUpdate = (id, text) => {
        dispatch(updateTodo(id,text))
        setIsEditable(true);
    }

    const handleClick = (id) => {
        dispatch(removeTodo(id))
    }
    const handleDone = (id) => {
      dispatch(isCompleted(id))
    }
  return (
    <div>
      <div style={{ color: todo.toggleComplete === true ? "red" : "blue" }}>
        <input type="text" value={val} onChange={(e) => setVal(e.target.value)} readOnly={isEditable}/>
        {isEditable === true ? <button onClick={()=>handleEdit()}>Edit</button> : <button onClick={()=>handleUpdate(todo.id,val)}>Update</button>}
        <button onClick={() => handleDone(todo.id)}>done</button>
        <button onClick={() => handleClick(todo.id)}>X</button>
      </div>
    </div>
  );
}

export default TodoItem;
