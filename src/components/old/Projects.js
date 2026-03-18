import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    num: '01',
    category: 'FULLSTACK / MARKETPLACE',
    title: 'LOCAL VENDOR\nMARKETPLACE\nPLATFORM',
    description:
      'Hyper-local backend marketplace with geo-search, role-based access, and production-grade load performance',
    tech: ['REACT', 'NODE.JS', 'MONGODB', 'EXPRESS'],
    icon: '📍',
    link: '#',
  },
  {
    num: '02',
    category: 'FULLSTACK / MICROSERVICES',
    title: 'UBER-LIKE RIDE\nBOOKING SYSTEM',
    description:
      'Real-time ride matching engine with WebSocket updates, dynamic pricing algorithm, and driver tracking dashboard',
    tech: ['NEXT.JS', 'SOCKET.IO', 'REDIS', 'POSTGRESQL'],
    icon: '🚗',
    link: '#',
  },
  {
    num: '03',
    category: 'SAAS / PLATFORM',
    title: 'QUIZ BUILDER\nSAAS PLATFORM',
    description:
      'Multi-tenant quiz platform with real-time scoring, analytics dashboard, and embeddable widget system',
    tech: ['REACT', 'NODE.JS', 'MONGODB', 'TAILWIND'],
    icon: '🧩',
    link: '#',
  },
  {
    num: '04',
    category: 'UTILITY / TOOL',
    title: 'URL SHORTENER\nWITH ANALYTICS',
    description:
      'High-throughput URL shortening service with click analytics, QR generation, and custom alias support',
    tech: ['EXPRESS', 'REDIS', 'MONGODB', 'DOCKER'],
    icon: '🔗',
    link: '#',
  },
  {
    num: '05',
    category: 'E-COMMERCE / FULLSTACK',
    title: 'E-COMMERCE\nPLATFORM',
    description:
      'Full-featured online store with cart management, payment integration, inventory tracking, and admin panel',
    tech: ['NEXT.JS', 'STRIPE', 'POSTGRESQL', 'TAILWIND'],
    icon: '🛒',
    link: '#',
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.from(headerRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Each project row stagger
      const rows = projectRefs.current.filter(Boolean);
      rows.forEach((row) => {
        gsap.from(row, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // GSAP hover animations
  const handleMouseEnter = (index) => {
    const row = projectRefs.current[index];
    if (!row) return;

    const bg = row.querySelector('.project-row__hover-bg');
    const title = row.querySelector('.project-row__title');
    const arrow = row.querySelector('.project-row__arrow');
    const icon = row.querySelector('.project-row__icon');
    const caseStudy = row.querySelector('.project-row__case-study');

    gsap.killTweensOf([bg, title, arrow, icon, caseStudy]);

    gsap.to(bg, {
      scaleX: 1,
      duration: 0.5,
      ease: 'power3.out',
    });

    gsap.to(title, {
      x: 20,
      color: '#0a0a0a',
      duration: 0.4,
      ease: 'power3.out',
    });

    gsap.to(arrow, {
      scale: 1,
      opacity: 1,
      backgroundColor: 'var(--accent)',
      duration: 0.35,
      ease: 'power3.out',
    });

    gsap.to(icon, {
      scale: 1.15,
      duration: 0.4,
      ease: 'power3.out',
    });

    if (caseStudy) {
      gsap.to(caseStudy, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        ease: 'power3.out',
      });
    }
  };

  const handleMouseLeave = (index) => {
    const row = projectRefs.current[index];
    if (!row) return;

    const bg = row.querySelector('.project-row__hover-bg');
    const title = row.querySelector('.project-row__title');
    const arrow = row.querySelector('.project-row__arrow');
    const icon = row.querySelector('.project-row__icon');
    const caseStudy = row.querySelector('.project-row__case-study');

    gsap.killTweensOf([bg, title, arrow, icon, caseStudy]);

    gsap.to(bg, {
      scaleX: 0,
      duration: 0.45,
      ease: 'power3.in',
    });

    gsap.to(title, {
      x: 0,
      color: '#0a0a0a',
      duration: 0.35,
      ease: 'power3.in',
    });

    gsap.to(arrow, {
      scale: 0.8,
      opacity: 0.5,
      backgroundColor: 'transparent',
      duration: 0.3,
      ease: 'power3.in',
    });

    gsap.to(icon, {
      scale: 1,
      duration: 0.35,
      ease: 'power3.in',
    });

    if (caseStudy) {
      gsap.to(caseStudy, {
        opacity: 0,
        x: 10,
        duration: 0.3,
        ease: 'power3.in',
      });
    }
  };

  const setRowRef = (el, index) => {
    projectRefs.current[index] = el;
  };

  return (
    <section className="projects" ref={sectionRef}>
      {/* Dark header banner */}
      <div className="projects__header" ref={headerRef}>
        <div className="projects__header-inner">
          <div className="projects__header-left">
            <span className="projects__header-label">TRACK RECORD</span>
            <h2 className="projects__header-title">
              SELECTED<br />WORKS
            </h2>
          </div>
          <div className="projects__header-right">
            <div className="projects__header-stat">
              <span className="projects__stat-label">PROJECTS</span>
              <span className="projects__stat-value">{projectsData.length}</span>
            </div>
            <div className="projects__header-stat">
              <span className="projects__stat-label">YEAR</span>
              <span className="projects__stat-value">2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project rows */}
      <div className="projects__list">
        {projectsData.map((project, index) => (
          <div
            className="project-row"
            key={project.num}
            ref={(el) => setRowRef(el, index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* Hover background that slides in */}
            <div className="project-row__hover-bg"></div>

            <div className="project-row__content">
              {/* Left side */}
              <div className="project-row__left">
                <span className="project-row__category">{project.category}</span>
                <h3 className="project-row__title">{project.title}</h3>
                <p className="project-row__desc">{project.description}</p>
                <div className="project-row__tech">
                  {project.tech.map((t) => (
                    <span className="project-row__tech-tag" key={t}>
                      ◆ {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right side */}
              <div className="project-row__right">
                <div className="project-row__num-block">
                  <span className="project-row__num-bg">{project.num}</span>
                  <div className="project-row__icon">
                    <span>{project.icon}</span>
                  </div>
                </div>
                <a
                  href={project.link}
                  className="project-row__case-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="project-row__case-study">VIEW CASE STUDY</span>
                  <div className="project-row__arrow">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 13L13 3M13 3H5M13 3V11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
