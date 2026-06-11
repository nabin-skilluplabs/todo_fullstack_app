import { useState } from 'react';
import './App.css'
import ToDoForm from './components/ToDoForm';
import EditToDoForm from './components/EditToDoForm';

function App() {
  const [todoTasks, setTodoTasks] = useState([
    {
      id: 1,
      task: 'Go to the gym',
      isEditing: false,
    },
    {
      id: 2,
      task: 'Buy groceries',
      isEditing: false,
    },
    {
      id: 3,
      task: 'Finish the project',
      isEditing: true,
    },
    {
      id: 4,
      task: 'Call mom',
      isEditing: true,
    },
    {
      id: 5,
      task: 'Read a book',
      isEditing: true,
    }
  ]);

  function handleAddTask(newTask) {
    console.log("New task added:", newTask);
    setTodoTasks([
      {
        id: todoTasks.length + 1,
        task: newTask,
        isEditing: false,
      }, ...todoTasks]);
  }

  function handleUpdateTask(taskToUpdate) {
    console.log("Task updated:", taskToUpdate);
    const updatedTasks = todoTasks.map(task => {
      if (task.id === taskToUpdate.id) {
        return taskToUpdate;
      }
      return task;
    });
    setTodoTasks(updatedTasks);
  }

  function currentTask(task) {
    const updatedTasks = todoTasks.map(t => {
      if (t.id === task.id) {
        return {
          ...t,
          isEditing: true,
        }
      }
      return t;
    });
    setTodoTasks(updatedTasks);
  }


  return (
    <>
      <h2>Todo App  </h2>

      <ToDoForm handleAddTask={handleAddTask} />

      <ul>
        {
          todoTasks.map((task, index) => (<li key={index}>
            {
              task.isEditing ? (<EditToDoForm handleUpdateTask={handleUpdateTask} task={task} />) : <span onClick={() => currentTask(task)}>{task.task}</span>
            }
          </li>))
        }
      </ul>
    </>
  )
}

export default App
