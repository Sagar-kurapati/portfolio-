import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CodingProfiles.css';

gsap.registerPlugin(ScrollTrigger);

const profilesData = [
  {
    name: 'LEETCODE',
    icon: '<>',
    iconColor: '#f89f1b',
    stat: '250',
    statLabel: 'SOLVED',
    footerLabel: 'PROBLEMS SOLVED',
    link: '#',
  },
  {
    name: 'CODESTUDIO',
    icon: '>_',
    iconColor: '#f05a28',
    stat: '32',
    statLabel: 'SOLVED',
    footerLabel: 'CODING NINJAS',
    link: '#',
  },
  {
    name: 'GEEKSFORGEEKS',
    icon: '{ }',
    iconColor: '#2e8b57',
    stat: '50',
    statLabel: 'SOLVED',
    footerLabel: 'PROBLEM SOLVING',
    link: '#',
  },
  {
    name: 'CODECHEF',
    icon: '⊞',
    iconColor: '#5b4638',
    stat: '1036',
    statLabel: 'RATING',
    footerLabel: 'MAX RATING',
    link: '#',
  },
  {
    name: 'CODEFORCES',
    icon: '↗',
    iconColor: '#318ce7',
    stat: '69',
    statLabel: 'SOLVED',
    footerLabel: 'PROBLEMS SOLVED',
    link: '#',
  },
  {
    name: 'HACKERRANK',
    icon: '⍟',
    iconColor: '#1ba94c',
    stat: '5★',
    statLabel: 'BADGES',
    footerLabel: 'SKILL BADGES',
    link: '#',
  },
  {
    name: 'ATCODER',
    icon: '⚡',
    iconColor: '#888',
    stat: '200',
    statLabel: 'RATING',
    footerLabel: 'MAX RATING',
    link: '#',
  },
];

const CodingProfiles = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      const cards = cardsRef.current.filter(Boolean);
      gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 55%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const setCardRef = (el, index) => {
    cardsRef.current[index] = el;
  };

  return (
    <section className="coding-profiles" ref={sectionRef}>
      <div className="coding-profiles__inner">
        {/* Header */}
        <div className="coding-profiles__header" ref={headingRef}>
          <span className="coding-profiles__label">03 / COMPETITIVE ARENA</span>
          <h2 className="coding-profiles__title">
            <span className="coding-profiles__title-solid">CODING</span>
            <span className="coding-profiles__title-outline">PROFILES</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="coding-profiles__grid">
          {profilesData.map((profile, index) => (
            <div
              className="profile-card"
              key={profile.name}
              ref={(el) => setCardRef(el, index)}
            >
              {/* External link icon */}
              <a
                href={profile.link}
                className="profile-card__external"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${profile.name}`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 7.66667V11.6667C11 12.0203 10.8595 12.3594 10.6095 12.6095C10.3594 12.8595 10.0203 13 9.66667 13H2.33333C1.97971 13 1.64057 12.8595 1.39052 12.6095C1.14048 12.3594 1 12.0203 1 11.6667V4.33333C1 3.97971 1.14048 3.64057 1.39052 3.39052C1.64057 3.14048 1.97971 3 2.33333 3H6.33333"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 1H13V5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.66667 8.33333L13 1"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* Icon */}
              <div
                className="profile-card__icon"
                style={{
                  '--icon-color': profile.iconColor,
                  '--icon-bg': `${profile.iconColor}15`,
                }}
              >
                <span>{profile.icon}</span>
              </div>

              {/* Info */}
              <div className="profile-card__info">
                <span className="profile-card__name">{profile.name}</span>
                <span className="profile-card__stat">{profile.stat}</span>
                <span className="profile-card__stat-label">{profile.statLabel}</span>
              </div>

              {/* Footer */}
              <div className="profile-card__footer">
                <div className="profile-card__divider"></div>
                <span className="profile-card__footer-label">{profile.footerLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
