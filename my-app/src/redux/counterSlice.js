import { createSlice } from "@reduxjs/toolkit";

// Skapa en slice för räknaren
const counterSlice = createSlice({
  name: "counter", // Namnet på denna slice
  initialState: {
    count: 0, // Initiera räknarens värde
  },
  reducers: {
    // Reducer för att öka räknaren
    increment: (state, action) => {
      // Logga åtgärden för att se när räknaren ökas
      console.log(`Incrementing by ${action.payload}`);
      state.count += action.payload; // Öka räknaren med det angivna värdet
    },
    // Reducer för att minska räknaren
    decrement: (state) => {
      // Logga åtgärden för att se när räknaren minskas
      console.log("Decrementing by 1");
      state.count -= 1; // Minska räknaren med 1
    },
  },
});

// Exportera reducer-åtgärderna för att användas i komponenter
export const { increment, decrement } = counterSlice.actions;

// Exportera reducer-funktionen så att den kan användas i butiken
export default counterSlice.reducer;
