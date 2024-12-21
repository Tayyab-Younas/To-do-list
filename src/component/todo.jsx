function TodoItem({ todo, completeTodo, deleteTodo }) {
  return (
    <div className={`flex items-center justify-between p-3 mb-2 w-full rounded shadow-md ${todo.complete ? 'bg-green-500' :' bg-white'}`}>
      <span
        className={`flex-1 ${todo.complete ? 'line-through  text-black-500' : ''}`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => completeTodo(todo.id)}
        className={`${todo.complete ? 'bg-green-500' : 'bg-yellow-500'
          } text-white px-4 py-1 rounded mr-2`}
      >
        {todo.complete ? 'Completed' : 'Complete'}
      </button>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
