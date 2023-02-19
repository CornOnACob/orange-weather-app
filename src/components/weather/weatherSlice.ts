import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
  city: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
}

const initialState: WeatherState = {
  city: '',
  temperature: 0,
  humidity: 0,
  windSpeed: 0,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<WeatherState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setWeather } = weatherSlice.actions;
