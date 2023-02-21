import { screen } from '@testing-library/react';
import { renderWithProviders } from '../test/test-utils';
import App from './App';

describe('App', () => {

  afterEach(() => {
    localStorage.clear();
  });

  it('renders the App component', () => {
    renderWithProviders(<App />);
    const appComponent = document.querySelector('.App');
    expect(appComponent).toBeInTheDocument();
  });

  it('renders the title', () => {
    renderWithProviders(<App />);
    const title = screen.getByText(/Check the Weather/i);
    expect(title).toBeInTheDocument();
  });

  it('renders the Search component', () => {
    renderWithProviders(<App />);
    const searchComponent = document.querySelector('.search');
    expect(searchComponent).toBeInTheDocument();
  });
  
  it('does not render the Weather component without a selection', () => {
    renderWithProviders(<App />);
    const weatherComponent = document.querySelector('.weather');
    expect(weatherComponent).not.toBeInTheDocument();
  });

  it('does not render the TemperatureSwitch component without a selection', () => {
    renderWithProviders(<App />);
    const tempSwitchComponent = document.querySelector('.temperatureSwitch');
    expect(tempSwitchComponent).not.toBeInTheDocument();
  });

  it('retrieves the city and weather from local storage', () => {
    const getItemSpy = vi.spyOn(Storage.prototype, 'getItem');
    const mockLocalStorage = '{"city":"New York","temperature":22,"humidity":0.6,"windSpeed":5}';
    localStorage.setItem('cityWeather', mockLocalStorage);
    renderWithProviders(<App />);
    expect(getItemSpy).toHaveBeenCalledWith('cityWeather');
    expect(localStorage.getItem('cityWeather')).toEqual(mockLocalStorage);
  });

  it('renders the Weather component when a city is in local storage', () => {
    const mockLocalStorage = '{"city":"New York","temperature":22,"humidity":0.6,"windSpeed":5}';
    localStorage.setItem('cityWeather', mockLocalStorage);
    renderWithProviders(<App />);
    const weatherComponent = document.querySelector('.weather');
    expect(weatherComponent).toBeInTheDocument();
  });

  it('renders the TemperatureSwitch component when a city is in local storage', () => {
    const mockLocalStorage = '{"city":"New York","temperature":22,"humidity":0.6,"windSpeed":5}';
    localStorage.setItem('cityWeather', mockLocalStorage);
    renderWithProviders(<App />);
    const tempSwitchComponent = document.querySelector('.temperatureSwitch');
    expect(tempSwitchComponent).toBeInTheDocument();
  });
});
