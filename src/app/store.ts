import { configureStore } from '@reduxjs/toolkit';
import { weatherSlice } from '../components/weather/weatherSlice';
import { temperatureSwitchSlice } from '../components/temperatureSwitch/temperatureSwitchSlice';

export const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
    temperature: temperatureSwitchSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;