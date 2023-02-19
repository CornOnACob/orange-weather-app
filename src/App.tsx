import './App.css'
import SearchBar from './components/SearchBar'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import WeatherConditions from './components/WeatherConditions';
import TemperatureButton from './components/TemperatureButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const { city } = useSelector((state: RootState) => state.weather)

  return (
    <div className="App">
      <ToastContainer />
      <h1>Check the Weather</h1>
      <SearchBar />
      { city && <WeatherConditions /> }
      { city && <TemperatureButton /> }
    </div>
  )
}

export default App
