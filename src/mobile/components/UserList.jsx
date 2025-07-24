import React from 'react';
import UserCard from './UserCard';

export default function UserList({ searchTerm = '' }) {
  const users = [
    { id: 1, name: '홍길동', gender: '남성', age: 24, email: 'hong1@example.com', info: 'A조 출신', userId: 'hong1' },
    { id: 2, name: '김영희', gender: '여성', age: 22, email: 'kim22@example.com', info: 'B조 출신', userId: 'kim22' },
    { id: 3, name: '이철수', gender: '남성', age: 27, email: 'lee33@example.com', info: '전공/ 컴퓨터', userId: 'lee33' },
    { id: 4, name: '박미정', gender: '여성', age: 23, email: 'parkmj@example.com', info: '전공: 디자인' },
    { id: 5, name: '정우성', gender: '남성', age: 30, email: 'jung@example.com', info: '외부 참가자' },
    { id: 6, name: '장보리', gender: '여성', age: 21, email: 'jang@example.com', info: '내부 전환 예정' },
    { id: 7, name: '최진혁', gender: '남성', age: 28, email: 'choi@example.com', info: '졸업예정자' },
    { id: 8, name: '윤서영', gender: '여성', age: 25, email: 'yoon@example.com', info: '복학생' },
    { id: 9, name: '강다현', gender: '여성', age: 24, email: 'kang@example.com', info: '신입' },
    { id: 10, name: '남준혁', gender: '남성', age: 29, email: 'nam@example.com', info: '리더' },
    { id: 11, name: '오예림', gender: '여성', age: 22, email: 'oh@example.com', info: '디자인팀' },
    { id: 12, name: '심재민', gender: '남성', age: 26, email: 'shim@example.com', info: '프론트엔드' },
    { id: 13, name: '고은지', gender: '여성', age: 23, email: 'koeun@example.com', info: '서버개발자' },
    { id: 14, name: '배준형', gender: '남성', age: 27, email: 'bae@example.com', info: 'IOS 담당' },
    { id: 15, name: '하수빈', gender: '여성', age: 24, email: 'ha@example.com', info: 'AI 파트' },
  ];

  const filteredUsers = users.filter((user) => {
    const term = searchTerm.toLowerCase();
    return (
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      (user.userId && user.userId.toLowerCase().includes(term))
    );
  });

  if (filteredUsers.length === 0) {
    return <p className="no-users">검색 결과가 없습니다.</p>;
  }

  return (
    <div className="mobile-user-list">
      {filteredUsers.map((user, idx) => (
        <UserCard key={user.id} user={user} index={idx + 1} />
      ))}
    </div>
  );
}
