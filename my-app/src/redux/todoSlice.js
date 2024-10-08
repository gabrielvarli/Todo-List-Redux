import { createSlice } from "@reduxjs/toolkit";

// Skapa en slice för att hantera Todo-listan
const todoSlice = createSlice({
  name: "todo", // Namnet på denna slice
  initialState: {
    todos: [
      { title: "Springa", description: "Runt Södertälje 15km" },
      { title: "Handla", description: "Barn Mat" },
      { title: "Gym", description: "Bröst och Mage" },
    ], // Initiala Todo-poster
  },
  reducers: {
    // Reducer för att lägga till en ny Todo
    addTodo: (state, action) => {
      state.todos.push(action.payload); // Lägga till en ny Todo
    },
    // Reducer för att ta bort en Todo
    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1); // Ta bort Todo vid angiven index
    },
    // Reducer för att redigera en befintlig Todo
    editTodo: (state, action) => {
      // Uppdatera titel och beskrivning för Todo vid angiven index
      const { index, title, description } = action.payload;
      state.todos[index].title = title;
      state.todos[index].description = description;
    },
  },
});

// Exportera reducer-åtgärder så att de kan användas i komponenter
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

// Exportera reducer-funktionen så att den kan användas i butiken
export default todoSlice.reducer;
