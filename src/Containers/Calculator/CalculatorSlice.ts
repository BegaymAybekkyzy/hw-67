import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  displayContent: string;
  symbols: string[];
}

const initialState: CalculatorState = {
  displayContent: "",
  symbols: ["7", "8", "9", "4", "5", "6", "1", "2", "3", "<", "0", "=", "+", "-", ".", "*", "/", "C"],
};

export const calculatorSlice = createSlice({
  name: "Calculator",
  initialState,
  reducers: {
    mathOperations:  (state, action: PayloadAction<number | string>) => {
      if (action.payload !== "C" && action.payload !== "<" && action.payload !== "=") {
       state.displayContent += action.payload;
      }

      if (action.payload === "<") {
        state.displayContent = state.displayContent.slice(0, -1);
      }
      if (action.payload === "C") {
        state.displayContent ="";
      }

      if (action.payload === "=") {
        try {
          state.displayContent = eval(state.displayContent);
        } catch(e) {
          console.error(e);
          state.displayContent ="";
        }
      }
    }
  }
});

export const calculatorReducer = calculatorSlice.reducer;
export const {mathOperations} = calculatorSlice.actions;