import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

function TodoInput() {

    const [inp, setInp] = useState('')
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();
        // if(!inp){
        //     alert('Please Enter first')
        // }  add a toaster here  =------------------------------------
        dispatch(addTodo(inp))
        setInp('')
    }
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input type="text" placeholder='Enter a todo...' value={inp} onChange={e => setInp(e.target.value)} />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

export default TodoInput
