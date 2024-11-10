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
    }
})

export const {addTodo, removeTodo, isCompleted} = todoSlice.actions
export default todoSlice.reducer