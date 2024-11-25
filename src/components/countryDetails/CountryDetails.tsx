import React from 'react';
import { Country } from '../../types';

interface Props {
  country: Country;
}

const CountryDetails: React.FC<Props> = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>Languages: {country.languages.map((lang) => lang.name).join(', ')}</p>
      <p>Currencies: {country.currencies.map((cur) => cur).join(', ')}</p>
    </div>
  );
};

export default CountryDetails;
