import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './DockNav.css';

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { id: 'hero', label: 'Home', icon: '⌂' },
  { id: 'journey', label: 'About', icon: '☺' },
  { id: 'coding-profiles', label: 'Profiles', icon: '✦' },
  { id: 'tech-matrix', label: 'Skills', icon: '⟨⟩' },
  { id: 'projects', label: 'Projects', icon: '▦' },
  { id: 'content-hub', label: 'YouTube', icon: '▶' },
  { id: 'contact', label: 'Contact', icon: '✉' },
  { id: 'mega-footer', label: 'Hub', icon: '⚡' },
];

const DockNav = () => {
  const dockRef = useRef(null);
  const [activeId, setActiveId] = useState('hero');

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    gsap.to(window, {
      scrollTo: { y: el, autoKill: false },
      duration: 1.2,
      ease: 'power3.inOut',
    });
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveId(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Entrance animation
  useEffect(() => {
    if (dockRef.current) {
      gsap.fromTo(
        dockRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 2 }
      );
    }
  }, []);

  return (
    <nav className="dock-nav" ref={dockRef}>
      <div className="dock-nav__pill">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`dock-nav__btn${activeId === item.id ? ' dock-nav__btn--active' : ''}`}
            onClick={() => scrollToSection(item.id)}
            aria-label={item.label}
            title={item.label}
          >
            <span className="dock-nav__icon">{item.icon}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default DockNav;