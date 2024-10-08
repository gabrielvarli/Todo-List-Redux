import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice"; // Importera reducer för räknaren
import nameSlice from "./nameSlice"; // Importera reducer för namn
import todoSlice from "./todoSlice"; // Importera reducer för todo-listan
import darkModeSlice from "./darkMode"; // Importera reducer för mörkt läge

// Konfigurera Redux-butiken
const store = configureStore({
  reducer: {
    counter: counterSlice, // Reducer för att hantera räknarens tillstånd
    name: nameSlice, // Reducer för att hantera namnets tillstånd
    toDo: todoSlice, // Reducer för att hantera todo-listans tillstånd
    darkMode: darkModeSlice, // Reducer för att hantera mörkt läge
  },
});

// Exportera butiken för att kunna användas i applikationen
export default store;
