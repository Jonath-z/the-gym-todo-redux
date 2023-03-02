function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  return value;
}

function getTodos(key) {
  return JSON.parse(localStorage.getItem(key));
}

function addNewTodo(key, todo) {
  return setItem(key, [...getTodos(key), todo]);
}

function deleteTodo(key, todo) {
  const todos = getTodos(key);
  const updatedItems = todos.filter((_todo) => todo.id !== _todo.id);
  return setItem(key, updatedItems);
}

function updateAchievedTodo(key, todo) {
  console.log({ key, todo });
  const todos = getTodos(key);
  const updatedItems = todos.map((_todo) => {
    return _todo.id === todo.id ? { ..._todo, done: true } : _todo;
  });

  return setItem(key, updatedItems);
}

const storage = {
  getTodos,
  setItem,
  deleteTodo,
  addNewTodo,
  updateAchievedTodo,
};
export default storage;
