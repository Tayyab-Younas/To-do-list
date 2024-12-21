import { useState } from 'react';
import './App.css';
import Todo from './component/todo';

function App() {
  const [todo, setTodos] = useState([]); // state to store todo items
  const [input, setInputs] = useState(''); 

  const addTodo = () => {
    if (input) {
      setTodos([...todo, { id: Date.now(), text:input , complete: false}])
      setInputs('');// Clear the input field

    }
  };

  const completeTodo = (id)=>{
    setTodos(
      todo.map(
        (item) => 
        item.id === id ? {...item , complete: !item.complete }: item
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(
      todo.filter(
        (item) => item.id!== id
      )
    );
  };


  return(
    <div className="App flex flex-col items-center justify-center">
      <h1 className='font-mono'>To-Do List</h1>
      <input  className=" w-full p-2 border rounded mb-3" 
        value={input} 
        onChange={(e) => setInputs(e.target.value)} 
        placeholder="Add a new task"
      />
      <button 
        onClick={addTodo} 
        className="bg-blue-500 text-white px-4 py-2 rounded mb-3"
      >
        Add Todo
      </button>

      {todo.map((item) => (
        <Todo 
          key={item.id} 
          todo={item} 
          completeTodo={completeTodo} 
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
    
  )


}

export default App;
