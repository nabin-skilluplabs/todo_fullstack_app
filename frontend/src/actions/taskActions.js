
const API_URL = 'http://localhost:3001';

export async function getTasks() {
   const response =  await fetch(`${API_URL}/tasks`);
   const tasks = await response.json();
   return tasks;
}

export async function addTask(task) {
   const response =  await fetch(`${API_URL}/tasks`,{
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ task })
   });
   const newTask = await response.json();
   return newTask;
} 

export async function updateTask(id, task) {
   const response =  await fetch(`${API_URL}/tasks`,{
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, task })
   });
   const updatedTask = await response.json();
   return updatedTask;
}

export async function deleteTask(id) {
   const response =  await fetch(`${API_URL}/tasks/${id}`,{
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json'
      }
   });
   await response.json();
}