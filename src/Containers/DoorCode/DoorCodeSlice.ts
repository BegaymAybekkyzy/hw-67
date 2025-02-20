import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DoorCodeState {
  code: string;
  combination: string;
  limit: number;
  correctInput: boolean | null;
  displayContent: string;
  symbols: (string | number)[];
}

const initialState:  DoorCodeState = {
  code: "1254",
  combination: '',
  limit: 4,
  displayContent: '',
  correctInput: null,
  symbols: [7, 8, 9, 4, 5, 6, 1, 2, 3, "<", 0, "E"],
};

export const doorCodeSlice = createSlice({
  name: "OnScreenKeyboard",
  initialState,
  reducers: {
    verification: (state, action: PayloadAction<number | string>) => {
      if (action.payload === "<" && state.correctInput === null) {
        state.combination = state.combination.slice(0, -1);
        state.displayContent = state.displayContent.slice(0, -1);
      }

      if (state.correctInput !== null) {
        state.displayContent = "";
        state.combination = "";
        state.correctInput = null;
      }

      if (typeof action.payload === 'number') {
        if (state.combination.length < state.limit ) {
          state.combination += action.payload;
          state.displayContent += "*";
        }
      }

      if (action.payload === "E") {
        if (state.combination === state.code) {
          state.correctInput = true;
          state.displayContent = "Access Granted";
        } else {
          state.correctInput = false;
          state.displayContent = "Access Denied";
        }
      }

    }
  }
});

export const  DoorCodeReducer =    doorCodeSlice.reducer;
export const {verification} =   doorCodeSlice.actions;
