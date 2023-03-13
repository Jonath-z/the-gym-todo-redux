function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  return value;
}

function getTodos(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function addNewTodo(key, todo) {
  const todos = getTodos(key);
  return setItem(key, [...todos, todo]);
}

function deleteTodo(key, todo) {
  const todos = getTodos(key);
  const updatedItems = todos.filter((_todo) => todo.id !== _todo.id);
  return setItem(key, updatedItems);
}

function updateTask(key, todoId, task) {
  const todos = getTodos(key);
  const updatedItems = todos.map((_todo) => {
    return _todo.id === todoId ? { ..._todo, task } : _todo;
  });

  return setItem(key, updatedItems);
}

function updateAchievedTodo(key, todo) {
  const todos = getTodos(key);
  const updatedItems = todos.map((_todo) => {
    return _todo.id === todo.id ? { ..._todo, done: !_todo.done } : _todo;
  });

  return setItem(key, updatedItems);
}

const storage = {
  getTodos,
  setItem,
  deleteTodo,
  addNewTodo,
  updateTask,
  updateAchievedTodo,
};
export default storage;
