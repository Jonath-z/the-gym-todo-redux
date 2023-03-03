import { createSlice } from "@reduxjs/toolkit";
import storage from "../utils/storage";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: storage.getTodos("_todos") || [],
  },
  reducers: {
    addNewTodo: (state, action) => {
      state.value = storage.addNewTodo("_todos", action.payload);
    },
    deleteTodo: (state, action) => {
      state.value = storage.deleteTodo("_todos", action.payload);
    },
    achieveTodo: (state, action) => {
      state.value = storage.updateAchievedTodo("_todos", action.payload);
    },
    updateTask: (state, action) => {
      state.value = storage.updateTask("_todos", action.payload);
    },
  },
});

export const { addNewTodo, deleteTodo, achieveTodo, updateTask } =
  todoSlice.actions;
export default todoSlice.reducer;
