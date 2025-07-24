import React from 'react';
import sejongLogo from '../../assets/sejong_logo.png';
import mainTextLogo from '../../assets/maintext_logo.png';
import subTextLogo from '../../assets/subtext_logo.png';

export default function LogoSection() {
  return (
    <div className="mobile-logo-section">
      <img
        src={sejongLogo}
        alt="세종시 로고"
        className="mobile-logo-image-sejong"
      />
      <img
        src={mainTextLogo}
        alt="메타버스 메인 텍스트"
        className="mobile-logo-image-maintext"
      />
      <img
        src={subTextLogo}
        alt="작은 회색 텍스트"
        className="mobile-logo-image-subtext"
      />
    </div>
  );
}
