import React from 'react';
import { Country } from '../../types';
import '../../styles/CountryCard.css';

interface Props {
  country: Country;
  onSelect: (country: Country) => void;
  isActive: boolean;
}

const CountryCard: React.FC<Props> = ({ country, onSelect, isActive }) => {
  return (
    <div
      className={`card ${isActive ? 'active' : ''}`}
      onClick={() => onSelect(country)}
      style={{ cursor: 'pointer' }}
    >
      <h2>{country.emoji} {country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.awsRegion}</p>
    </div>
  );
};

export default CountryCard;
