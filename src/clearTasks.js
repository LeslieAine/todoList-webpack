import { addToStorage } from './updateLocalStorage.js';

const clearAllButton = document.querySelector('.clear-all');

const clearAll = (tasks, todoList) => {
  clearAllButton.addEventListener('click', () => {
    todoList.innerHTML = '';
    tasks = tasks.filter((task) => task.index < 0);
    addToStorage(tasks);
  });
};

export default clearAll;