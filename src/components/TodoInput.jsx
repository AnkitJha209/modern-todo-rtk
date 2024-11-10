import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';
import { toast } from 'react-toastify';

function TodoInput() {

    const [inp, setInp] = useState('')
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();
        if(!inp){
            toast.error('Please Enter Some thing In Input Box')
            return;
        }
        dispatch(addTodo(inp))
        setInp('')
    }
  return (
    <div>
      <form onSubmit={handleAddTodo} className="space-x-3 mt-12">
        <input type="text" className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter a todo...' value={inp} onChange={e => setInp(e.target.value)} />
        <button type='submit'
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Todo</button>
      </form>
    </div>
  )
}

export default TodoInput
