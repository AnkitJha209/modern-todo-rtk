import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                toggleComplete: false,
            }
            state.todos.push(todo) 
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        isCompleted: (state, action) => {
            state.todos.forEach(todo => (
                todo.id === action.payload ? todo.toggleComplete = !(todo.toggleComplete) : todo.toggleComplete = todo.toggleComplete
            ))
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        updateTodo: (state, action) => {
            state.todos.forEach(todo => (
                todo.id === action.payload.id ? todo.text = action.payload.text : todo.text = todo.text
            ))
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        loadFromLocalStorage: (state) => {
            const storedTodos = JSON.parse(localStorage.getItem('todos'));
            if (storedTodos) {
                state.todos = storedTodos; // Load todos from localStorage
            }
        }
    }
})

export const {addTodo, removeTodo, isCompleted, updateTodo, loadFromLocalStorage} = todoSlice.actions
export default todoSlice.reducer