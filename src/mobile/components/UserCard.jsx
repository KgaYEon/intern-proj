import React from 'react';

export default function UserCard({ user, index }) {
  const paddedIndex = String(index).padStart(2, '0');

  return (
    <div className="mobile-user-card">
      <div className="mobile-user-index-box">
        {paddedIndex}
      </div>
      <div className="mobile-user-info-box">
        <div className="mobile-user-name">{user.name}</div>
        <div className="mobile-user-desc">
          {user.gender} | {user.age}세 | 정보: {user.info}
        </div>
        <div className="mobile-user-email">이메일: {user.email}</div>
      </div>
    </div>
  );
}
