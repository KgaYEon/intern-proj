// src/mobile/components/SearchBar.jsx

import React from 'react';
import searchlogo from '../../assets/search.png';

export default function SearchBar() {
  return (
    <div className="mobile-searchbar">
      <input
        className="mobile-search-input"
        type="text"
        placeholder="이름 또는 아이디로 검색해주세요"
      />
      <button className="mobile-search-button">
        <img
            src={searchlogo}
            alt="search"
            className="mobile-logo-search"
          />
      </button>
    </div>
  );
}
