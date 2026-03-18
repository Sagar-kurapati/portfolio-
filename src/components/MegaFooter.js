import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./MegaFooter.css";
import resume from "../assests/Sagar_Kurapati_2025.pdf";
import MyBW from "../assests/MyBW-BR.png";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: "HOME", target: "hero" },
  { label: "ABOUT", target: "journey" },
  { label: "SKILLS", target: "tech-matrix" },
  { label: "PROJECTS", target: "projects" },
  { label: "EXPERIENCE", target: "content-hub" },
  { label: "CONTACT", target: "contact" },
];

const socials = [
  {
    name: "LINKEDIN",
    icon: "in",
    href: "https://linkedin.com/in/sagar-kurapati-a02307270",
  },
  {
    name: "GITHUB",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    href: "https://github.com/sagar-kurapati",
  },
  {
    name: "INSTAGRAM",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37a4 4 0 1 1-7.75 1.26 4 4 0 0 1 7.75-1.26z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    href: "https://www.instagram.com/sagar_kurapati__?igsh=N2RocmVmN3RqaXRu&utm_source=qr",
  },
];

const MegaFooter = () => {
  const sectionRef = useRef(null);
  const topRef = useRef(null);
  const navRef = useRef(null);
  const socialsRef = useRef(null);
  const centerRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    gsap.to(window, {
      scrollTo: { y: el, autoKill: false },
      duration: 1.2,
      ease: "power3.inOut",
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(topRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      const links = navRef.current?.querySelectorAll(".mega-footer__nav-item");
      if (links) {
        gsap.from(links, {
          x: -60,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: navRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      const socialItems = socialsRef.current?.querySelectorAll(
        ".mega-footer__social-item",
      );
      if (socialItems) {
        gsap.from(socialItems, {
          x: 60,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: socialsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      gsap.from(centerRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: centerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mega-footer" ref={sectionRef} id="mega-footer">
      <div className="mega-footer__top" ref={topRef}>
        <div className="mega-footer__top-left">
          <h3 className="mega-footer__name">
            SAGAR
            <br />
            KURAPATI
          </h3>
        </div>
        <div className="mega-footer__top-right">
          <a
            href={resume}
            download="Sagar_Kurapati_2025.pdf"
            className="mega-footer__resume-btn"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
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

      <div className="mega-footer__main">
        <div className="mega-footer__nav" ref={navRef}>
          <span className="mega-footer__section-label">LINKS / MENU</span>
          <ul className="mega-footer__nav-list">
            {navLinks.map((link) => (
              <li className="mega-footer__nav-item" key={link.label}>
                <button
                  className="mega-footer__nav-link"
                  onClick={() => scrollToSection(link.target)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mega-footer__center" ref={centerRef}>
          <div className="mega-footer__bg-text">WEB DEVELOPER</div>
          <div className="mega-footer__avatar-area">
            <img
              className="journey-slide__profile-image"
              src={MyBW}
              alt="Profile"
            />
            <div className="mega-footer__avatar">
              <span className="mega-footer__avatar-icon">👤</span>
            </div>
            {/* <div className="mega-footer__line mega-footer__line--1"></div>
            <div className="mega-footer__line mega-footer__line--2"></div>
            <div className="mega-footer__line mega-footer__line--3"></div> */}
          </div>
          <button
            className="mega-footer__explore-btn"
            onClick={() => scrollToSection("hero")}
          >
            <span>EXPLORE MORE</span>
            <span>↗</span>
          </button>
        </div>

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

      {/* <div className="mega-footer__bottom">
        <span className="mega-footer__copy">© 2026 SAGAR KURAPATI. BUILDING FOR THE FUTURE.</span>
        <div className="mega-footer__bottom-right">
          <a href="#" className="mega-footer__legal">PRIVACY POLICY</a>
          <a href="#" className="mega-footer__legal">LEGAL TERMS</a>
        </div>
      </div> */}
    </section>
  );
};

export default MegaFooter;
