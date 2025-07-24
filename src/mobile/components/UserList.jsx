import React from 'react';
import UserCard from './UserCard';

export default function UserList() {
  const users = [
    { id: 1, name: '홍길동', gender: '남성', age: 24, email: 'hong1@example.com', info: 'A조 출신', index: 0 },
    { id: 2, name: '김영희', gender: '여성', age: 22, email: 'kim22@example.com', info: 'B조 출신', index: 1 },
    { id: 3, name: '이철수', gender: '남성', age: 27, email: 'lee33@example.com', info: '전공/ 컴퓨터', index: 2 },
    { id: 4, name: '박미정', gender: '여성', age: 23, email: 'parkmj@example.com', info: '전공/ 디자인', index: 3 },
    { id: 5, name: '정우성', gender: '남성', age: 30, email: 'jung@example.com', info: '외부 참가자', index: 4 },
    { id: 6, name: '장보리', gender: '여성', age: 21, email: 'jang@example.com', info: '내부 전환 예정', index: 5 },
    { id: 7, name: '최진혁', gender: '남성', age: 28, email: 'choi@example.com', info: '졸업예정자', index: 6 },
    { id: 8, name: '윤서영', gender: '여성', age: 25, email: 'yoon@example.com', info: '복학생', index: 7 },
    { id: 9, name: '강다현', gender: '여성', age: 24, email: 'kang@example.com', info: '신입', index: 8 },
    { id: 10, name: '남준혁', gender: '남성', age: 29, email: 'nam@example.com', info: '리더', index: 9 },
    { id: 11, name: '오예림', gender: '여성', age: 22, email: 'oh@example.com', info: '디자인팀', index: 10 },
    { id: 12, name: '심재민', gender: '남성', age: 26, email: 'shim@example.com', info: '프론트엔드', index: 11 },
    { id: 13, name: '고은지', gender: '여성', age: 23, email: 'koeun@example.com', info: '서버개발자', index: 12 },
    { id: 14, name: '배준형', gender: '남성', age: 27, email: 'bae@example.com', info: 'IOS 담당', index: 13 },
    { id: 15, name: '하수빈', gender: '여성', age: 24, email: 'ha@example.com', info: 'AI 파트', index: 14 },
  ];


  return (
    <div className="mobile-user-list">
      {users.map((user, index) => (
        <UserCard key={user.id} user={{ ...user, index }} />
      ))}
    </div>
  );
}
