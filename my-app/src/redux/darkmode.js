import { createSlice } from "@reduxjs/toolkit";

// Skapa en slice för mörkt läge
const darkModeSlice = createSlice({
  name: "darkMode", // Namnet på denna slice
  initialState: {
    darkMode: false, // Initiera mörkt läge till false (ljus läge som standard)
  },
  reducers: {
    // Reducer för att ställa in mörkt läge
    setDarkMode: (state, action) => {
      state.darkMode = action.payload; // Ställ in mörkt läge baserat på åtgärden
    },
  },
});

// Exportera reducer-åtgärderna så att de kan användas i komponenter
export const { setDarkMode } = darkModeSlice.actions;

// Exportera reducer-funktionen så att den kan användas i butiken
export default darkModeSlice.reducer;
