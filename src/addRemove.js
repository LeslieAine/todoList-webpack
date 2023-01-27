import { addToStorage, getFromStorage } from './updateLocalStorage.js';
import handleCheck from './checkbox.js';
import clearAll from './clearTasks.js';

const todoList = document.querySelector('.todo-list-items');
const input = document.querySelector('.input-text');
//* edit variables
const editSection = document.querySelector('.edit__section');
const saveEditButton = document.querySelector('.save__edit');
const discardEditButton = document.querySelector('.discard__edit');
const editInput = document.querySelector('.edit__input');

let tasks = getFromStorage();

export const addTask = () => {
  const task = {
    index: tasks.length + 1,
    description: input.value,
    completed: false,
  };
  tasks.push(task);
  addToStorage(tasks);
};

//* display todo
export const displayTasks = () => {
  const taskData = tasks.map((item) => {
    const { index, description, completed } = item;
    return `
      <div class="todo">
        <input class="checkbox" ${completed === true ? 'checked' : ''} type="checkbox" name="" id="" />
        <p class="description" style="text-decoration:${completed === true ? 'line-through' : 'none'}" data-edit=${index}>${description}</p>
        <img class="dots" src="./images/Dots.png" alt="vertical-dots">;
        <i class="fa-solid fa-file-pen edit__todo"></i>
        <i class="fa-solid fa-trash-can remove" data-index=${index} data-info=${description}></i>
      </div>
    `;
  });
  todoList.innerHTML = taskData.join(' ');
};

//* remove and edit todo
export const removeAndEditTodo = () => {
  todoList.addEventListener('click', (e) => {
    //* remove todo

    if (e.target.classList.contains('remove')) {
      e.target.parentElement.remove();
      const taskIndex = e.target.dataset.index;
      tasks = tasks.filter((item) => item.index !== +taskIndex);
      tasks.forEach((item, index) => {
        item.index = index + 1;
      });
      displayTasks();
      addToStorage(tasks);
    }

    //* edit todo
    if (e.target.classList.contains('edit__todo')) {
      const todoDescription = e.target.parentElement.querySelector('.description');
      editSection.classList.add('show_edit_section');
      editInput.value = todoDescription.innerText;
      // discard changes
      discardEditButton.addEventListener('click', () => {
        editSection.classList.remove('show_edit_section');
      });

      // save changes
      saveEditButton.addEventListener('click', () => {
        const editIndex = todoDescription.dataset.edit;
        const editItem = tasks.find(
          (item) => item.index === +editIndex,
        );
        editItem.description = editInput.value;
        todoDescription.innerText = editInput.value;
        addToStorage(tasks);
        // hide edit section
        editSection.classList.remove('show_edit_section');
      });
    }
  });
};

handleCheck(tasks, todoList, displayTasks);
clearAll(tasks, todoList);