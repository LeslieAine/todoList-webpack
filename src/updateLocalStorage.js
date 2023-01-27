export const addToStorage = (tasks) => {
  const storage = localStorage.setItem('tasks', JSON.stringify(tasks));
  return storage;
};

export const getFromStorage = () => {
  const storage = localStorage.getItem('tasks') === null
    ? []
    : JSON.parse(localStorage.getItem('tasks'));
  return storage;
};
