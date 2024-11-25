import { Country, WeatherData } from "../../types";
import '../../styles/WatherInfo.css';

interface WeatherInfoProps {
    currentDate: string,
    country: Country,
    weather: WeatherData   
}
const WeatherInfo = ({
    currentDate,
    country,
    weather
}: WeatherInfoProps) => {
    return (<>
        <p className='date'>{currentDate}</p>
        <div>
            <p className='capital'>Weather in {country.capital}</p>
            <p className='country'>{country.name}</p>
        </div>
        <div className='weatherData'>
            <p className='temperature'>{Math.round(weather.main.temp)}°C
                <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                    alt={weather.weather[0].description}
                    width={100}
                    height={100}
                />
            </p>
            <p className='description'>{weather.weather[0].description}</p>
        </div>
    </>)
};

export default WeatherInfo;