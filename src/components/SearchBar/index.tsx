import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setWeather } from '../../weatherSlice';
import { weatherData } from '../../weatherData';
import { toast } from 'react-toastify';

function SearchBar() {
  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();

  const handleSearch = () => {
    const result = weatherData.find((weather) => weather.city.toLowerCase() === searchText.toLowerCase());

    if (result) {
      dispatch(setWeather(result));
    } else {
      toast.error(`No weather data found for city "${searchText}"`, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      console.log(`No weather data found for ${searchText}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        placeholder='Enter city name'
        onChange={(event) => setSearchText(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;