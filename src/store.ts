import { configureStore } from '@reduxjs/toolkit';
import { weatherSlice } from './weatherSlice';
import { temperatureSlice } from './temperatureSlice';

export const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
    temperature: temperatureSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;