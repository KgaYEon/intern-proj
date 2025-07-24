// src/login/LoginSection.jsx
import React from 'react';

function LoginButton({ className, text }) {
  return (
    <button className={`login-button ${className}`}>
      <div className="icon-box" />
      <span>{text}</span>
    </button>
  );
}

export default function LoginSection() {
  return (
    <div className="login-section">
      <h2>Login</h2>

      <LoginButton className="btn-naver" text="네이버 계정으로 로그인" />
      <LoginButton className="btn-kakao" text="카카오 계정으로 로그인" />
      <LoginButton className="btn-facebook" text="페이스북 계정으로 로그인" />
      <LoginButton className="btn-google" text="구글 계정으로 로그인" />

      <p className="login-notice">
        회원가입 및 로그인은 플랫폼의<br />
        로그인 시 <u>이용약관</u> 및 <u>개인정보 처리방침</u> 동의로 간주합니다.
      </p>
    </div>
  );
}
