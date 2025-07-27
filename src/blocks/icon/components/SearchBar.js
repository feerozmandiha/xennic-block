// src/blocks/icon/components/SearchBar.js
import React from 'react';
import './search-bar.css';

const SearchBar = ({ searchValue, onSearch }) => {
  return (
    <input
      type="text"
      className="xennic-search-bar"
      placeholder="جستجوی آیکون..."
      value={searchValue}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
