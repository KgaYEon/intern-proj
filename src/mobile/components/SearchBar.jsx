// src/mobile/components/SearchBar.jsx

import React from 'react';
import searchlogo from '../../assets/search.png';

export default function SearchBar({ value, onChange, onSubmit }) {
  return (
    <div className="mobile-searchbar">
      <input
        className="mobile-search-input"
        type="text"
        placeholder="이름 또는 아이디로 검색해주세요"
        value={value}
        onChange={onChange}
      />
      <button className="mobile-search-button" onClick={onSubmit}>
        <img
          src={searchlogo}
          alt="search"
          className="mobile-logo-search"
        />
      </button>
    </div>
  );
}
