import { useDispatch } from 'react-redux';
import { toggleTempType } from '../../temperatureSlice';

function TemperatureButton() {

  const dispatch = useDispatch();

  const switchTemperature = () => {
    dispatch(toggleTempType());
  };

  return (
    <div>
      <button onClick={switchTemperature}>Toggle °C / °F</button>
    </div>
  );
}

export default TemperatureButton;