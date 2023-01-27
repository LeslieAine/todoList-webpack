import { addToStorage } from './updateLocalStorage.js';

const handleCheck = (tasks, todoList, displayTasks) => {
  todoList.addEventListener('change', (e) => {
    const todoItem = e.target.parentElement.querySelector('.description');
    const taskIndex = todoItem.dataset.edit;
//* add line through
    if (
      e.target.classList.contains('checkbox')
      && e.target.checked === true
    ) {
      tasks[taskIndex - 1].completed = true;
      todoItem.classList.add('line-through');
      addToStorage(tasks);
      displayTasks();
    }
    if (
      e.target.classList.contains('checkbox')
      && e.target.checked === false
    ) {
      tasks[taskIndex - 1].completed = false;
      todoItem.classList.remove('line-through');
      addToStorage(tasks);
      displayTasks();
    }
  });
};

export default handleCheck;