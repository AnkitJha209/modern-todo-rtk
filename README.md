# Todo App with Redux Toolkit

This project is a simple Todo App built with React and Redux Toolkit. It includes features such as adding, editing, removing, completing, and persisting todos to local storage.

## Features

- **Add Todo**: Add new tasks to your list.
- **Edit Todo**: Modify existing tasks.
- **Remove Todo**: Delete tasks from your list.
- **Toggle Completion**: Mark tasks as completed or incomplete.
- **Local Storage**: Todos persist in local storage, so they stay available after refreshing the page.

## Demo

Here's a quick demo of how the app works: Demo Link _(Add a demo link if available)_

## Tech Stack

- **React**: User interface.
- **Redux Toolkit**: State management.
- **React-Redux**: To connect Redux state with React components.
- **Local Storage**: Persist todos on the client-side.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/AnkitJha209/modern-todo-rtk.git
cd todo-app-redux-toolkit
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm start
```

The app will be available at http://localhost:3000.

## Project Structure

Here's an overview of the main files and folders in this project:

```plaintext
├── public          # Public assets
├── src
│   ├── app
│   │   └── store.js    # Redux store setup
│   ├── features
│   │   └── todosSlice.js    # Redux slice for todos
│   ├── components
│   │   ├── TodoList.js      # Main component displaying the list of todos
│   │   ├── TodoItem.js      # Individual todo item
│   │   └── TodoInput.js     # Input component for adding/editing todos
│   └── App.js              # Main App component
└── README.md
```

## Usage

1. **Add Todo**: Type your task in the input field and press Enter or click the **Add** button.
2. **Edit Todo**: Click the **Edit** icon on the todo item to edit its text.
3. **Remove Todo**: Click the **Delete** icon to remove the todo item.
4. **Toggle Completion**: Click on the todo item to mark it as completed or incomplete.
5. **Local Storage**: The app automatically saves your todos to local storage, so your list persists across page reloads.

## Redux Slice (todosSlice.js)

The `todosSlice.js` file defines the state and reducers for managing todos using Redux Toolkit. Here's a summary of the main reducers:

- **addTodo**: Adds a new todo to the list.
- **removeTodo**: Removes a todo by its ID.
- **editTodo**: Edits the text of a specific todo.
- **toggleComplete**: Toggles the completion status of a todo.
- **loadFromLocalStorage**: Loads todos from local storage on initial load.
- **saveToLocalStorage**: Persists todos to local storage on every state update.

## Persisting Todos to Local Storage

The app uses local storage to save the state of todos. When a todo is added, removed, or updated, the app saves the state to local storage, and on page load, it retrieves any saved todos.

## License

This project is open-source and available under the MIT License.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the app.

## Acknowledgments

Special thanks to the Redux Toolkit team for making state management in React easier and more efficient!
