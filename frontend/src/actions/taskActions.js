
const API_URL = 'http://localhost:3001';

export async function getTasks() {
   const response =  await fetch(`${API_URL}/tasks`);
   const tasks = await response.json();
   return tasks;
}