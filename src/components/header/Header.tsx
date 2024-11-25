import React, { useState } from 'react';
import SortCountries from './SortCountries';
import SearchCountries from './SearchCountries';
import { headerStyle } from './styles';

interface Props {
  onSearch: (value: string) => void;
  onSortChange: (sortKey: string) => void;
}

const Header: React.FC<Props> = ({ onSearch, onSortChange }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);

    debounce(() => onSearch(value), 300);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value);
  };

  let debounceTimer: NodeJS.Timeout;
  const debounce = (func: () => void, delay: number) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(func, delay);
  };

  return (
    <header style={headerStyle}>
      <SearchCountries value={searchValue} onSearch={handleSearchChange} />
      <SortCountries onSortBy={handleSortChange} />
    </header>
  );
};


export default Header;
