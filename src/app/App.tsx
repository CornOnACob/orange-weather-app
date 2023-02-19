import './App.css'
import Search from '../components/search'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import Weather from '../components/weather';
import TemperatureSwitch from '../components/temperatureSwitch';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { setWeather } from '../components/weather/weatherSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Get the city weather from local storage
    const cityWeather = localStorage.getItem('cityWeather');
    if (cityWeather) {
      // Save the parsed JSON string to the Redux store
      dispatch(setWeather(JSON.parse(cityWeather)));
    }
  }, []);

  const { city } = useSelector((state: RootState) => state.weather)

  return (
    <div className="App">
      <ToastContainer />
      <h1>Check the Weather</h1>
      <Search />
      { city && <Weather /> }
      {/* { city && <TemperatureSwitch /> } */}
    </div>
  )
}

export default App
