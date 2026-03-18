import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const marqueeRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const ctaRef = useRef(null);
  const galleryRef = useRef(null);

  const [time, setTime] = useState('');
  const [timeZone, setTimeZone] = useState('IST');
  const [location] = useState('INDIA');

  // Live clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
      const hours = istTime.getHours().toString().padStart(2, '0');
      const minutes = istTime.getMinutes().toString().padStart(2, '0');
      const seconds = istTime.getSeconds().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
      setTimeZone('IST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background marquee - continuous scroll right to left
      const marqueeInner = marqueeRef.current;
      if (marqueeInner) {
        gsap.set(marqueeInner, { xPercent: 0 });
        gsap.to(marqueeInner, {
          xPercent: -50,
          duration: 20,
          ease: 'none',
          repeat: -1,
        });
      }

      // Main name reveal
      gsap.from(nameRef.current, {
        y: 120,
        opacity: 0,
        duration: 1.4,
        ease: 'power4.out',
        delay: 0.3,
      });

      // Left card entrance + floating
      gsap.from(leftCardRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.6,
      });

      // Left card floating effect
      gsap.to(leftCardRef.current, {
        y: -12,
        duration: 2.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 1.8,
      });

      // Right card entrance + floating
      gsap.from(rightCardRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.8,
      });

      // Right card floating effect
      gsap.to(rightCardRef.current, {
        y: 12,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 2,
      });

      // CTA button
      gsap.from(ctaRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 1,
      });

      // Gallery link
      gsap.from(galleryRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 1.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef} id="hero">
      {/* Background scrolling text */}
      <div className="hero__marquee-wrap">
        <div className="hero__marquee" ref={marqueeRef}>
          <span className="hero__marquee-text">
            WEB DEVELOPER&nbsp;&nbsp;&nbsp;&nbsp;WEB DEVELOPER&nbsp;&nbsp;&nbsp;&nbsp;WEB DEVELOPER&nbsp;&nbsp;&nbsp;&nbsp;WEB DEVELOPER&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="hero__marquee-text" aria-hidden="true">
            WEB DEVELOPER&nbsp;&nbsp;&nbsp;&nbsp;WEB DEVELOPER&nbsp;&nbsp;&nbsp;&nbsp;WEB DEVELOPER&nbsp;&nbsp;&nbsp;&nbsp;WEB DEVELOPER&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="hero__content">
        {/* Left telemetry card */}
        <div className="hero__left">
          <div className="hero__card hero__card--telemetry" ref={leftCardRef}>
            <div className="hero__card-header">
              <span className="hero__card-label">ACTIVE</span>
              <span className="hero__status-dots">
                <span className="hero__dot hero__dot--green"></span>
                <span className="hero__dot hero__dot--green hero__dot--dim"></span>
              </span>
            </div>
            <div className="hero__card-location">
              <span className="hero__location-icon">◉</span>
              <span className="hero__location-name">Mumbai</span>
            </div>
            <div className="hero__card-time">
              <span className="hero__time-icon">◷</span>
              <span className="hero__time-value">{time} {timeZone}</span>
            </div>
          </div>

          <button className="hero__cta" ref={ctaRef}  onClick={() => (window.location.href = "tel:+918291524322")}>
            <span>CONTACT NOW</span>
            <span className="hero__cta-arrow">↗</span>
          </button>
        </div>

        {/* Center name */}
        <div className="hero__center" ref={nameRef}>
          <h1 className="hero__name">
            <span className="hero__name-line">SAGAR</span>
            <span className="hero__name-line">KURAPATI</span>
          </h1>
        </div>

        {/* Right tech specs card */}
        <div className="hero__right">
          <div className="hero__card hero__card--specs" ref={rightCardRef}>
            <div className="hero__card-header">
              <span className="hero__card-label">TECH SPECS / LOAD</span>
              <span className="hero__bolt-icon">⚡</span>
            </div>

            <div className="hero__spec-item">
              <div className="hero__spec-info">
                <span className="hero__spec-name">REACT / WORDPRESS</span>
                <span className="hero__spec-value">98%</span>
              </div>
              <div className="hero__spec-bar">
                <div className="hero__spec-fill" style={{ width: '98%' }}></div>
              </div>
            </div>

            <div className="hero__spec-item">
              <div className="hero__spec-info">
                <span className="hero__spec-name">NODE / MYSQL</span>
                <span className="hero__spec-value">95%</span>
              </div>
              <div className="hero__spec-bar">
                <div className="hero__spec-fill" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div className="hero__spec-item">
              <div className="hero__spec-info">
                <span className="hero__spec-name">JS / PHP</span>
                <span className="hero__spec-value">92%</span>
              </div>
              <div className="hero__spec-bar">
                <div className="hero__spec-fill" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>

          {/* <div className="hero__gallery-link" ref={galleryRef}>
            <span>PROJECT GALLERY</span>
            <span className="hero__gallery-arrow">→</span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
