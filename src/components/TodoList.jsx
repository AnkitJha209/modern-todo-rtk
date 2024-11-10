import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isCompleted, removeTodo } from '../features/todo/todoSlice';
import TodoItem from './TodoItem';

function TodoList() {
    const todos = useSelector(state => state.todos)
    console.log(todos)

  return (
    <div>
        {todos.map(todo => (
            <TodoItem todo={todo}/>
        ))}
    </div>
  )
}

export default TodoList
