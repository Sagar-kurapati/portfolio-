import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Navbar.css';

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(logoRef.current, {
        y: -40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      });

      gsap.from(titleRef.current, {
        y: -40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4,
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar__logo" ref={logoRef}>
        <div className="navbar__logo-box">
          <span>SK</span>
        </div>
      </div>
      <div className="navbar__title" ref={titleRef}>
        <span className="navbar__role">WEB DEVELOPER</span>
      </div>
    </nav>
  );
};

export default Navbar;
