import { createContext, useState, useEffect } from 'react';
import getFormattedWeatherData from '../components/services/weatherService';
// import { } from '../api/API';

const StateContext = createContext({});

export const StateProvider = ({ children }) => {
  const [query, setQuery] = useState({ q: "București" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Bucuresti");
  const [idSelectedCity, setIDSelectedCity] = useState("RO-B");
  const [favorites, setFavorites] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : {});
  const [fromFavorites, setFromFavorites] = useState(false);
  // alert
  const [alert, setAlert] = useState(null);
  if (alert) {
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites])

  const fetchWeather = async () => {
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      setWeather(data);
    });
  };


  useEffect(() => {
    fetchWeather();
  }, [query, units, fromFavorites]);

  return <StateContext.Provider
    value={{
      alert,
      setAlert,
      query,
      setQuery,
      units,
      setUnits,
      weather,
      setWeather,
      selectedCity,
      setSelectedCity,
      idSelectedCity,
      setIDSelectedCity,
      favorites,
      setFavorites,
      fromFavorites,
      setFromFavorites,
      fetchWeather,
    }}
  >{children}</StateContext.Provider>;
};

export default StateContext;
