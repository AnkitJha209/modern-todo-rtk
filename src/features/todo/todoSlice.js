import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
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
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        isCompleted: (state, action) => {
            state.todos.forEach(todo => (
                todo.id === action.payload ? todo.toggleComplete = !(todo.toggleComplete) : todo.toggleComplete = todo.toggleComplete
            ))
        },
        updateTodo: (state, action) => {
            state.todos.forEach(todo => (
                todo.id === action.payload.id ? todo.text = action.payload.text : todo.text = todo.text
            ))
        }
    }
})

export const {addTodo, removeTodo, isCompleted, updateTodo} = todoSlice.actions
export default todoSlice.reducer