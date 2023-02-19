import { createSlice } from '@reduxjs/toolkit';

interface TemperatureState {
  isFahrenheit: boolean;
}

const initialState: TemperatureState = {
  isFahrenheit: false,
};

export const temperatureSlice = createSlice({
  name: 'temperature',
  initialState,
  reducers: {
    //Toggle between Celsius and Fahrenheit
    toggleTempType: (state) => {
      state.isFahrenheit = !state.isFahrenheit;
    },
  },
});

export const { toggleTempType } = temperatureSlice.actions;
