import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { setWeather } from './weatherSlice';
import WeatherConditions from './components/WeatherConditions';
import TemperatureButton from './components/TemperatureButton';

function App() {

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar />
      <WeatherConditions />
      <TemperatureButton />
    </div>
  )
}

export default App
