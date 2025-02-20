import { configureStore } from '@reduxjs/toolkit';
import { DoorCodeReducer } from '../Containers/DoorCode/DoorCodeSlice.ts';

export const store = configureStore({
  reducer: {
    doorCode: DoorCodeReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch