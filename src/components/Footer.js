import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Footer.css';

const Footer = () => {
  const footerRef = useRef(null);
  const [time, setTime] = useState('');
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // IST time
      const ist = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
      const istH = ist.getHours().toString().padStart(2, '0');
      const istM = ist.getMinutes().toString().padStart(2, '0');
      const istS = ist.getSeconds().toString().padStart(2, '0');
      setTime(`${istH}:${istM}:${istS}`);

      // Local time (visitor)
      const localH = now.getHours().toString().padStart(2, '0');
      const localM = now.getMinutes().toString().padStart(2, '0');
      setLocalTime(`${localH}:${localM}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 1.5,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="footer-bar" ref={footerRef}>
      <div className="footer-bar__left">
        <span className="footer-bar__dot"></span>
        <span className="footer-bar__text">INDIA / {time}</span>
      </div>
      <div className="footer-bar__right">
        <span className="footer-bar__text">LOCAL / {localTime}</span>
      </div>
    </div>
  );
};

export default Footer;
