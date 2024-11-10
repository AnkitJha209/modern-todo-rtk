import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isCompleted, removeTodo } from '../features/todo/todoSlice';

function TodoList() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(removeTodo(id))
    }
    const handleDone = (id) => {
      dispatch(isCompleted(id))
    }
    console.log(todos)

  return (
    <div>
      <ul>
        {todos.map(todo => (
            <li key={todo.id}>
                <div style={{color: todo.toggleComplete === true ? 'red' : 'blue'}}>
                {todo.text}
                <button onClick={()=> handleDone(todo.id)}>done</button>
                <button onClick={()=>handleClick(todo.id)}>X</button>
                </div>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
