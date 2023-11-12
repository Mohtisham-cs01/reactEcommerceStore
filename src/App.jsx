import { useState } from 'react';
import './style.css';

function App() {
  

  let getLocalTodo = () => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    return todos;
  }

  function clearTodos() {
    if (window.confirm("Are you sure you want to clear all todos?")) {
      setTodos([]);
      localStorage.removeItem("todos");
    }
  }
  


  let [input, setInput] = useState('');
  let [Update, setUpdate] = useState(false);
  let [UpdateIndex, setUpdateIndex] = useState(-1);
  let [todos, setTodos] = useState(getLocalTodo);


  
  function handleDelete(e, index) {
    e.preventDefault();
    console.log(`Deleted item at index ${index}`);
    let newTodos = [...todos]
    console.log(newTodos.splice(index, 1));

    console.log(newTodos);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos))

  }
  function handleUpdate(e, index) {
    setUpdate(true)
    let todo = todos[index]
    console.log(todo)
    setInput(todo)
    setUpdateIndex(index)
  }

  function makeChanges() {
    if (UpdateIndex !== -1 && input != '') {
      let newTodos = [...todos];
      newTodos[UpdateIndex] = input;
      console.log(newTodos)
      setTodos(newTodos);
      console.log(todos)
      console.log(newTodos)
      setUpdateIndex(-1)
      setUpdate(false)
      setInput('')
      localStorage.setItem("todos", JSON.stringify(newTodos))
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // debugger
    if (input.trim() !== '') {

      setTodos((previousTodos) => {
        const newTodos = [...previousTodos, input];
        localStorage.setItem("todos", JSON.stringify(newTodos));
        return newTodos;
      });
      setInput('');
    }
  }


  return (
    <>
      <div className="app-container">
        <p id='form'>
          <input
            type="text"
            name="todo"
            id="todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a new todo..."
          />
          {Update ? (
            <button className="update-button" type="button" onClick={makeChanges}>
              Update
            </button>
          ) : (
            <button className="add-button" type="button" onClick={handleSubmit}>
              Add Todo
            </button>
          )}
        </p>

        <div className="todo-list">
          {todos.map((item, index) => (
            <form className='forms' key={index} onSubmit={(e) => handleDelete(e, index)}>
              <li>{item}</li>
              <button type="submit" className="delete-button">
                Delete
              </button>
              <button
                type="button"
                className="update-button"
                onClick={(e) => handleUpdate(e, index)}
              >
                Update
              </button>
            </form>
          ))}
        </div>
      </div>
     {
      todos.length > 0 && (
        <button className="clear-button" onClick={() => clearTodos()}>
          Clear All
        </button>
      )
     }
     

    </>
  );
}

export default App;
