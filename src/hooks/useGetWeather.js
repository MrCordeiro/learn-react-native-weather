import { useState, useEffect, useCallback } from 'react';
import * as Location from 'expo-location';
import { OPEN_WEATHER_API_KEY } from '@env';

export const useGetWeather = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [weather, setWeather] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const fetchWeatherData = useCallback(async () => {
    if (!lat || !lon) {
      return;
    }
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`,
    );
    const data = await res.json();
    return data;
  }, [lat, lon]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      try {
        const weatherData = await fetchWeatherData();
        setWeather(weatherData);
      } catch (error) {
        setErrorMsg("Couldn't load weather, please try again later.");
      }

      setIsLoading(false);
    })();
  }, [fetchWeatherData]);

  return [isLoading, errorMsg, weather];
};
