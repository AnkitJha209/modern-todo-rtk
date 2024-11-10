import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='h-screen flex flex-col gap-5 items-center mt-16'>
      <h1 className='text-5xl font-bold text-gray-600'>Modern Todo RTK</h1>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App
