import React, { useState } from 'react';
import LogoSection from './components/LogoSection_Dash';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import './mobile.css';

export default function MobileDashboard() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="mobile-dashboard">
      <LogoSection />
      <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onSubmit={() => {}}
      />
      <UserList searchTerm={searchTerm} />
    </div>
  );
}

