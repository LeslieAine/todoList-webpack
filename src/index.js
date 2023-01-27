import './index.css';
import {
  addTask,
  displayTasks,
  removeAndEditTodo,
} from './addRemove.js';

const form = document.querySelector('.todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask();
  displayTasks();
  form.reset();
});

window.addEventListener('DOMContentLoaded', () => {
  displayTasks();
  removeAndEditTodo();
});
