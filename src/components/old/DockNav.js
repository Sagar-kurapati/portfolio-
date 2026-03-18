import React, { useEffect, useRef, useState } from 'react';
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

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // For pinned horizontal sections, ScrollTrigger knows the real scroll position
    const st = ScrollTrigger.getAll().find(
      (trigger) => trigger.vars.trigger === el || trigger.trigger === el
    );

    if (st) {
      gsap.to(window, {
        scrollTo: { y: st.start, autoKill: false },
        duration: 1.2,
        ease: 'power3.inOut',
      });
    } else {
      gsap.to(window, {
        scrollTo: { y: el, offsetY: 0, autoKill: false },
        duration: 1.2,
        ease: 'power3.inOut',
      });
    }
  };

  // Track active section
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const triggers = sections.map((section) => {
      return ScrollTrigger.create({
        trigger: section,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => setActiveId(section.id),
        onEnterBack: () => setActiveId(section.id),
      });
    });

    return () => triggers.forEach((t) => t.kill());
  }, []);

  // Entrance animation
  useEffect(() => {
    gsap.from(dockRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 1.8,
    });
  }, []);

  return (
    <nav className="dock-nav" ref={dockRef}>
      <div className="dock-nav__pill">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`dock-nav__btn ${activeId === item.id ? 'dock-nav__btn--active' : ''}`}
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
