import { createSlice } from "@reduxjs/toolkit";

// Skapa en slice för att hantera användarens namn
const nameSlice = createSlice({
  name: "name", // Namnet på denna slice
  initialState: {
    name: "", // Initiera namn till en tom sträng
  },
  reducers: {
    // Reducer för att ställa in namn
    setName: (state, action) => {
      console.log("Setting name to:", action.payload); // Logga det nya namnet
      state.name = action.payload; // Uppdatera namn med det nya värdet från åtgärden
    },
  },
});

// Exportera reducer-åtgärden så att den kan användas i komponenter
export const { setName } = nameSlice.actions;

// Exportera reducer-funktionen så att den kan användas i butiken
export default nameSlice.reducer;
