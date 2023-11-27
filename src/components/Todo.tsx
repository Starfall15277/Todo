import List from './List'
import { useStore } from '../store'

function Todo() {

  const { todos, addTodo, deleteTodo, deleteAllTodos } = useStore();

  const handleAddTodo = () => {
    const text = prompt()
    if (text) {
      addTodo(text)
    }
  }

  const handleDeleteAll = () => {
    if (confirm('Are you sure you want to delete all tasks?')) {
      todos.forEach(todo => deleteTodo(todo.id))
      deleteAllTodos();
    }
  };

  const handleSuccess = () => {
    todos
      .filter(todo => todo.completed)
      .forEach(todo => deleteTodo(todo.id));
  };

  return (
    <div className='container'>
      <div className='my-4 d-flex justify-content-center align-items-center gap-4'>
        <div className='fs-1'>
          Task today's
        </div>
        <div className='fs-4 badge bg-secondary'>
          { todos.length }
        </div>
      </div>
      <div className='my-2'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='add-item-container'>
            <button className='btn btn-outline-light' onClick={handleAddTodo}>+ Add a new task</button>
          </div>
          <div>
          <div className='d-flex'></div>
            <button className='btn btn-danger me-3' onClick={handleDeleteAll}>Delete All</button>
            <button className='btn btn-success' onClick={handleSuccess}>Success</button>
          </div>
        </div>
      </div>
      <div className="form">
        {
          todos.length === 0 ? <div className='fs-2 text-center mt-5'>There are no items</div> :
            todos.map((todo) => (
              <List key={todo.id} todo={todo} />
            ))
        }
      </div>
    </div>
  );
};

export default Todo;