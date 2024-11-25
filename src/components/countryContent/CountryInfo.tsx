import { Country } from "../../types"
import '../../styles/CountryInfo.css';

interface CountryInfoProps {
    country: Country
}

const CountryInfo = ({
    country
}: CountryInfoProps) => (
    <div className='countryData'>
        <div>
            <p className='title'>Continent</p>
            <p className='data'>{country.continent.name}</p>  
        </div>
        <div>
            <p className='title'>Languages</p>
            <p className='data'>
                {country.languages.map((lang, index) => <span>{lang.name}{index < country.languages.length - 1 && ', '} </span>)}
            </p>
        </div>
        <div>
            <p className='title'>Currencies</p>
            <p className='data'>
                {country.currencies.map((cur, index) => <span>{cur}{index < country.currencies.length - 1 && ', '} </span>)}
            </p>
        </div>
    </div>
)

export default CountryInfo;