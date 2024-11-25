import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from './graphql/queries';
import CountryCard from './components/countryCard/CountryCard';
import CountryContent from './components/countryContent/CountryContent';
import './styles/global.css';
import { Country } from './types';
import Header from './components/header/Header';

const App: React.FC = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const [selectedCountry, setSelectedCountry] = useState<Country>(data?.countries[0]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortKey, setSortKey] = useState<string>('name');
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [sortedCountries, setSortedCountries] = useState<Country[]>([]);
  
  const countries = data?.countries || [];

  
  useEffect(() => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const filtered = countries.filter((country: Country) => {
      return (
        country.name.toLowerCase().includes(lowerSearchTerm) ||
        country.capital?.toLowerCase().includes(lowerSearchTerm) ||
        country.awsRegion.toLowerCase().includes(lowerSearchTerm)
      );
    });
    
    setFilteredCountries(filtered);
  }, [searchTerm, countries]);
  
  useEffect(() => {
    const sorted = [...filteredCountries].sort((a: Country, b: Country) => {
      if (sortKey === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortKey === 'capital') {
        return (a.capital || '').localeCompare(b.capital || '');
      } else if (sortKey === 'awsRegion') {
        return a.awsRegion.localeCompare(b.awsRegion);
      }
      return 0;
    });
    
    setSortedCountries(sorted);
  }, [filteredCountries, sortKey]);

  if (loading) {return <p>Loading...</p>};
  if (error) {return <p>Error loading countries.</p>};
  
  return (
    <div className='appWrapper glassCard'>
      <Header
        onSearch={(value) => setSearchTerm(value)}
        onSortChange={setSortKey}
      />
    <div className="container">
      <aside className="aside-menu">
        {sortedCountries.map((country: Country) => (
          <CountryCard
            key={country.code}
            country={country}
            onSelect={setSelectedCountry}
            isActive={selectedCountry?.code === country.code}
          />
        ))}
      </aside>

      {/* Main Content Area */}
      <div className="content-area">
        {selectedCountry ? (
          <CountryContent
            country={selectedCountry}
          />
        ) : (
          <p>Select a country to view weather information.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default App;
