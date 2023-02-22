import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import type { AppStore, RootState } from '../app/store';
import { weatherSlice } from '../components/weather/weatherSlice';
import { temperatureSwitchSlice } from '../components/temperatureSwitch/temperatureSwitchSlice';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      weather: {
        city: '',
        temperature: 0,
        humidity: 0,
        windSpeed: 0,
      },
      temperature: {
        isFahrenheit: false,
      },
    },
    store = configureStore({
      reducer: {
        weather: weatherSlice.reducer,
        temperature: temperatureSwitchSlice.reducer,
      },
      preloadedState
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
