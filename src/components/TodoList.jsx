import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';

function TodoList() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(removeTodo(id))
    }

  return (
    <div>
      <ul>
        {todos.map(todo => (
            <li key={todo.id}>
                {todo.text}
                <button onClick={()=>handleClick(todo.id)}>X</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
