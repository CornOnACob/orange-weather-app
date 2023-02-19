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
      // Save the city weather to local storage as a JSON string
      localStorage.setItem('cityWeather', JSON.stringify(result));
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
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder='Enter city name'
        onChange={(event) => setSearchText(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && searchText) { // If user presses Enter and input is not empty
            handleSearch();
          }
        }}
      />
      <button disabled={!searchText} onClick={handleSearch}>Search</button> {/* Disable button if input (searchText) is empty */}
    </div>
  );
}

export default SearchBar;