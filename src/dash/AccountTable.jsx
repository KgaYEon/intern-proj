import React from 'react';

function AccountTable({ data, children }) {
  return (
    <div className="account-table-wrapper">
      <table>
        <thead>
          <tr><th>순번</th><th>이름</th><th>이메일</th><th>성별</th><th>나이</th></tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{String(user.index).padStart(2, '0')}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
            </tr>
          ))}

        </tbody>
      </table>

      {/* 페이지네이션을 테이블 하단에 포함 */}
      <div className="table-footer">
        {children}
      </div>
    </div>
  );
}

export default AccountTable;
