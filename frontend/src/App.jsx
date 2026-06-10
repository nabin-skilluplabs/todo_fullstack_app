import { useState } from 'react';
import './App.css'
import ToDoForm from './components/ToDoForm';

function App() {
  const [todoTasks, setTodoTasks] = useState([
    'Go to the gym',
    'Buy groceries',
    'Finish the project',
    'Call mom',
    'Read a book',
    'Plan the weekend trip',
  ]);

  function handleAddTask(newTask) {
    console.log("New task added:", newTask);
    setTodoTasks([newTask, ...todoTasks]);
  }

  return (
    <>
      <h2>Todo App  </h2>

      <ToDoForm handleAddTask={handleAddTask} />

      <ul>
        {
          todoTasks.map((task, index) => (<li key={index}>{task}</li>))
        }
      </ul>
    </>
  )
}

export default App
