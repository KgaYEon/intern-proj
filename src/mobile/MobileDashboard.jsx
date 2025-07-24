// src/mobile/MobileDashboard.jsx

import React from 'react';
import LogoSection from './components/LogoSection_Dash';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import './mobile.css';

export default function MobileDashboard() {
  // 예시 데이터
  const users = [
    {
      id: 1,
      name: '홍길동',
      age: 24,
      gender: '남성',
      info: '정보입니다',
      email: 'emailexample@gmail.com',
      userId: 'honggildong',
    },
    // 추가 유저...
  ];

  return (
    <div className="mobile-dashboard">
      <LogoSection />
      <SearchBar />
      <UserList users={users} />
    </div>
  );
}
