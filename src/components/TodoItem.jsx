import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  isCompleted,
  removeTodo,
  updateTodo,
} from "../features/todo/todoSlice";

import { FaTrash } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { FaRegSave } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";

function TodoItem({ todo }) {
  const [isEditable, setIsEditable] = useState(true);
  const [val, setVal] = useState(todo.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditable(false);
  };

  const handleUpdate = () => {
    dispatch(updateTodo({id: todo.id, text: val}));
    setIsEditable(true);
  };

  const handleClick = (id) => {
    dispatch(removeTodo(id));
  };
  const handleDone = (id) => {
    dispatch(isCompleted(id));
  };
  return (
    <div className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
        <input className={`bg-zinc-800 px-4 py-2 mr-2 rounded text-gray-200 ${todo.toggleComplete === true ? 'line-through' : ''}`}
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          readOnly={isEditable}
        />
        {isEditable === true ? (
          <button className="text-white  bg-blue-500 border-0 py-2 px-2 mr-2 focus:outline-none hover:bg-blue-600 rounded text-md" onClick={() => handleEdit()}><CiEdit/></button>
        ) : (
          <button className="text-white bg-blue-500 border-0 py-2 px-2 mr-2 focus:outline-none hover:bg-blue-600 rounded text-md" onClick={() => handleUpdate()}><FaRegSave/></button>
        )}
        <button className={`text-white hover:bg-green-600 ${todo.toggleComplete === true ? 'bg-green-700': 'bg-green-400'} border-0 py-2 px-2 focus:outline-none  rounded text-md`} onClick={() => handleDone(todo.id)}><IoMdDoneAll/></button>
        <button
          className="text-white  bg-red-500 border-0 py-2 px-2 ml-2 focus:outline-none hover:bg-red-600 rounded text-md"
          onClick={() => handleClick(todo.id)}
        >
          <FaTrash />
        </button>
    </div>
  );
}

export default TodoItem;
