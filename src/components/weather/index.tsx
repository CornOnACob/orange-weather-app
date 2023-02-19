import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import TemperatureSwitch from '../temperatureSwitch';
import './index.css';

function Weather() {

  const { city, temperature, humidity, windSpeed } = useSelector(
    (state: RootState) => state.weather
  );

  const isFahrenheit = useSelector(
    (state: RootState) => state.temperature.isFahrenheit
  );

  return (
    <div className='weatherBox'>
      <div className='cityText'>Weather in {city}:</div>
      <div>Temperature: { isFahrenheit ? ((temperature * 1.8) + 32).toFixed(1) : temperature } °{ isFahrenheit ? "F" : "C" }</div>
      <div>Humidity: {humidity}%</div>
      <div>Wind Speed: {windSpeed} km/h</div>
      <TemperatureSwitch />
    </div>
  );
}

export default Weather;