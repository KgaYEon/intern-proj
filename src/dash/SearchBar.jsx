import React from 'react';

function SearchBar({ value, onChange, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 새로고침 방지
    if (onSubmit) onSubmit(); // 버튼 클릭 시 동작
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="이름 또는 아이디를 입력해주세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">검색</button>
    </form>
  );
}

export default SearchBar;
