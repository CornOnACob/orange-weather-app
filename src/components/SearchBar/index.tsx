import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setWeather } from '../../weatherSlice';
import { weatherData } from '../../weatherData';

function SearchBar() {
  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();

  const handleSearch = () => {
    const result = weatherData.find((weather) => weather.city.toLowerCase() === searchText.toLowerCase());

    if (result) {
      const { city, temperature, humidity, windSpeed } = result;
      dispatch(setWeather({ city, temperature, humidity, windSpeed }));
    } else {
      console.log(`No weather data found for ${searchText}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;