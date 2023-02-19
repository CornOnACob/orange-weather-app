import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function WeatherConditions() {

  const { city, temperature, humidity, windSpeed } = useSelector(
    (state: RootState) => state.weather
  );

  const isFahrenheit = useSelector(
    (state: RootState) => state.temperature.isFahrenheit
  );

  return (
    <div>
      <h2>Weather in {city}:</h2>
      <div>Temperature: { isFahrenheit ? ((temperature * 1.8) + 32).toFixed(1) : temperature } °{ isFahrenheit ? "F" : "C" }</div>
      <div>Humidity: {humidity}%</div>
      <div>Wind Speed: {windSpeed} km/h</div>
    </div>
  );
}

export default WeatherConditions;