import React, { useEffect, useState } from 'react';
import { getWeatherByCity } from '../../services/weatherAPI';
import { Country, WeatherData } from '../../types';
import CountryInfo from './CountryInfo';
import WeatherInfo from './WeatherInfo';
import '../../styles/CountryContent.css';

interface CountryContentProps {
  country: Country;
}

const CountryContent: React.FC<CountryContentProps> = ({ country }) => {
  const [weather, setWeather] = useState<WeatherData>();
  const [loading, setLoading] = useState<boolean>(true);
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    if (!country.capital) return;

    setLoading(true);
    getWeatherByCity(country.capital).then((response) => {
        setWeather(response);
        setLoading(false);

    }, (error) => {
        console.error('Error fetching weather:', error);
        setLoading(false);
        
    });
  }, [country.capital]);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(formattedDate);
  }, []);

  if (loading) return <p>Loading weather...</p>;
  if (!weather) return <p>No weather data available.</p>;

  return (
    <div className='weatherInfoContainer'>
        <WeatherInfo currentDate={currentDate} country={country} weather={weather} />
        <CountryInfo country={country} />
    </div>
  );
};

export default CountryContent;
