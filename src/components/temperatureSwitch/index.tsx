import { useDispatch } from 'react-redux';
import { toggleTempType } from './temperatureSwitchSlice';
import './index.css';

function TemperatureSwitch() {

  const dispatch = useDispatch();

  const switchTemperature = () => {
    dispatch(toggleTempType());
  };

  return (
    <div className='temperatureSwitch'>
      <button onClick={switchTemperature}>Toggle °C / °F</button>
    </div>
  );
}

export default TemperatureSwitch;
