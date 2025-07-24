import React from 'react';

function SearchBar() {
  return (
    <div className="search-box">
      <input type="text" placeholder="이름 또는 아이디를 입력해주세요" />
      <button>검색</button>
    </div>
  );
}

export default SearchBar;
