import { configureStore } from '@reduxjs/toolkit';
import { doorCodeReducer } from '../Containers/DoorCode/DoorCodeSlice.ts';
import { calculatorReducer } from '../Containers/Calculator/CalculatorSlice.ts';

export const store = configureStore({
  reducer: {
    doorCode: doorCodeReducer,
    calculator: calculatorReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch