import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MegaFooter.css';

gsap.registerPlugin(ScrollTrigger);

const navLinks = ['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'YOUTUBE', 'CONTACT'];

const socials = [
  { name: 'LINKEDIN', icon: 'in', href: '#' },
  { name: 'GITHUB', icon: '⌥', href: '#' },
  { name: 'TWITTER', icon: '𝕏', href: '#' },
  { name: 'INSTAGRAM', icon: '◻', href: '#' },
];

const MegaFooter = () => {
  const sectionRef = useRef(null);
  const topRef = useRef(null);
  const navRef = useRef(null);
  const socialsRef = useRef(null);
  const centerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Top bar
      gsap.from(topRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Nav links stagger
      const links = navRef.current?.querySelectorAll('.mega-footer__nav-item');
      if (links) {
        gsap.from(links, {
          x: -60,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: navRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // Social links stagger
      const socialItems = socialsRef.current?.querySelectorAll('.mega-footer__social-item');
      if (socialItems) {
        gsap.from(socialItems, {
          x: 60,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: socialsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // Center avatar + text
      gsap.from(centerRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: centerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mega-footer" ref={sectionRef}>
      {/* Top bar */}
      <div className="mega-footer__top" ref={topRef}>
        <div className="mega-footer__top-left">
          <h3 className="mega-footer__name">
            SAGAR<br />KURAPATI
          </h3>
        </div>
        <div className="mega-footer__top-right">
          <a href="#" className="mega-footer__resume-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <span>DOWNLOAD RESUME</span>
            <span className="mega-footer__resume-arrow">↗</span>
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="mega-footer__main">
        {/* Left nav */}
        <div className="mega-footer__nav" ref={navRef}>
          <span className="mega-footer__section-label">LINKS / MENU</span>
          <ul className="mega-footer__nav-list">
            {navLinks.map((link) => (
              <li className="mega-footer__nav-item" key={link}>
                <a href={`#${link.toLowerCase()}`} className="mega-footer__nav-link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Center - Avatar + BG text */}
        <div className="mega-footer__center" ref={centerRef}>
          <div className="mega-footer__bg-text">WEB DEVELOPER</div>
          <div className="mega-footer__avatar-area">
            <div className="mega-footer__avatar">
              <span className="mega-footer__avatar-icon">👤</span>
            </div>
            {/* Decorative lines */}
            <div className="mega-footer__line mega-footer__line--1"></div>
            <div className="mega-footer__line mega-footer__line--2"></div>
            <div className="mega-footer__line mega-footer__line--3"></div>
          </div>
          <a href="#" className="mega-footer__explore-btn">
            <span>EXPLORE MORE</span>
            <span>↗</span>
          </a>
        </div>

        {/* Right socials */}
        <div className="mega-footer__socials" ref={socialsRef}>
          <span className="mega-footer__section-label mega-footer__section-label--right">
            CONNECT / SOCIAL
          </span>
          <ul className="mega-footer__social-list">
            {socials.map((s) => (
              <li className="mega-footer__social-item" key={s.name}>
                <a
                  href={s.href}
                  className="mega-footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mega-footer__social-name">{s.name}</span>
                  <span className="mega-footer__social-icon">{s.icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      {/* <div className="mega-footer__bottom">
        <span className="mega-footer__copy">
          © 2026 SAGAR KURAPATI. BUILDING FOR THE FUTURE.
        </span>
        <div className="mega-footer__bottom-right">
          <a href="#" className="mega-footer__legal">PRIVACY POLICY</a>
          <a href="#" className="mega-footer__legal">LEGAL TERMS</a>
        </div>
      </div> */}
    </section>
  );
};

export default MegaFooter;
