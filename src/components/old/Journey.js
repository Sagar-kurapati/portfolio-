import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Journey.css';

gsap.registerPlugin(ScrollTrigger);

const journeyData = [
  {
    id: 1,
    phase: 'THE PROFILE',
    sectionNum: '01',
    type: 'profile',
    titleLine1: 'BEYOND',
    titleLine2: 'SYNTAX.',
    titleLine2Style: 'outline',
    description:
      'I engineer high-performance systems where design meets logic. Building digital products that are fast, scalable, and unforgettable.',
    profileImage: true,
  },
  {
    id: 2,
    phase: 'PHASE 1',
    sectionNum: '02',
    navLabel: 'JOURNEY / PHASE 1',
    year: '2022',
    icon: '📖',
    iconBg: 'book',
    titleLine1: 'BUILDING THE',
    titleLine2: 'FOUNDATION',
    description:
      'Dived deep into React, Node.js, Express, and MongoDB. Learned how real web applications are designed — authentication, REST APIs, state management, and responsive design patterns.',
  },
  {
    id: 3,
    phase: 'PHASE 2',
    sectionNum: '02',
    navLabel: 'JOURNEY / PHASE 2',
    year: '2023',
    icon: '🌱',
    iconBg: 'seedling',
    titleLine1: 'SHIPPING REAL',
    titleLine2: 'PRODUCTS',
    description:
      'Built and deployed full-stack products — a URL shortener, e-commerce platform, and quiz SaaS. Entered the hackathon circuit and reached the finals, placing in the top 45 out of 400+ teams.',
  },
  {
    id: 4,
    phase: 'PHASE 3',
    sectionNum: '02',
    navLabel: 'JOURNEY / PHASE 3',
    year: '2024',
    icon: '⚡',
    iconBg: 'bolt',
    titleLine1: 'SCALING &',
    titleLine2: 'OPTIMIZING',
    description:
      'Focused on performance optimization, CI/CD pipelines, and cloud deployments. Containerized applications using Docker, engineered APIs handling 250+ requests/sec with sub-30ms P90 latency.',
  },
  {
    id: 5,
    phase: 'PHASE 4',
    sectionNum: '02',
    navLabel: 'JOURNEY / PHASE 4',
    year: '2025',
    icon: '🚀',
    iconBg: 'rocket',
    titleLine1: 'GOING',
    titleLine2: 'FULL STACK',
    description:
      'Mastering the complete stack — TypeScript, Next.js, PostgreSQL, Redis, and AWS. Building production-grade applications with real-time features, microservices architecture, and DevOps best practices.',
  },
  {
    id: 6,
    phase: 'PHASE 5',
    sectionNum: '02',
    navLabel: 'JOURNEY / PHASE 5',
    year: '2026',
    icon: '☁️',
    iconBg: 'cloud',
    titleLine1: 'MASTERING',
    titleLine2: 'DEVOPS',
    description:
      'Completed a 90-Day DevOps Challenge — mastering Docker, Linux, Jenkins CI/CD, GitHub Actions, GitLab pipelines, and Kubernetes from the ground up. Now building and shipping cloud-native, production-ready systems end to end.',
  },
  {
    id: 7,
    type: 'cta',
    titleLine1: 'READY?',
    subtitle: "WHAT'S NEXT?",
    description: "LET'S BUILD THE FUTURE.",
  },
];

const Journey = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const slidesRef = useRef([]);

  // Desktop: horizontal scroll pinned
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 769px)', () => {
      const slider = sliderRef.current;
      const slides = slidesRef.current.filter(Boolean);
      const totalSlides = slides.length;

      const scrollTween = gsap.to(slider, {
        x: () => -(slider.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => '+=' + (slider.scrollWidth - window.innerWidth),
          invalidateOnRefresh: true,
        },
      });

      // Animate each slide content on enter
      slides.forEach((slide, i) => {
        if (i === 0) return; // profile slide animates differently

        const content = slide.querySelector('.journey-slide__right');
        const left = slide.querySelector('.journey-slide__left');

        if (content) {
          gsap.from(content, {
            opacity: 0,
            y: 60,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: slide,
              containerAnimation: scrollTween,
              start: 'left 80%',
              toggleActions: 'play none none reverse',
            },
          });
        }

        if (left) {
          gsap.from(left, {
            opacity: 0,
            x: -60,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: slide,
              containerAnimation: scrollTween,
              start: 'left 85%',
              toggleActions: 'play none none reverse',
            },
          });
        }
      });

      return () => {
        scrollTween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  const setSlideRef = (el, index) => {
    slidesRef.current[index] = el;
  };

  return (
    <section className="journey" ref={sectionRef}>
      <div className="journey__slider" ref={sliderRef}>
        {journeyData.map((slide, index) => {
          // Profile slide
          if (slide.type === 'profile') {
            return (
              <div
                className="journey-slide journey-slide--profile"
                key={slide.id}
                ref={(el) => setSlideRef(el, index)}
              >
                <div className="journey-slide__left">
                  <div className="journey-slide__image-frame">
                    <div className="journey-slide__image-border"></div>
                    <div className="journey-slide__image-placeholder">
                      <div className="journey-slide__avatar">
                        <span className="journey-slide__avatar-icon">👤</span>
                      </div>
                    </div>
                    <div className="journey-slide__image-dot"></div>
                  </div>
                </div>
                <div className="journey-slide__right">
                  <span className="journey-slide__section-label">
                    {slide.sectionNum} / {slide.phase}
                  </span>
                  <h2 className="journey-slide__title">
                    <span className="journey-slide__title-solid">{slide.titleLine1}</span>
                    <span className="journey-slide__title-outline">{slide.titleLine2}</span>
                  </h2>
                  <p className="journey-slide__desc">{slide.description}</p>
                </div>
                <div className="journey-slide__bg-number">01</div>
              </div>
            );
          }

          // CTA slide
          if (slide.type === 'cta') {
            return (
              <div
                className="journey-slide journey-slide--cta"
                key={slide.id}
                ref={(el) => setSlideRef(el, index)}
              >
                <div className="journey-slide__cta-content">
                  <span className="journey-slide__cta-subtitle">{slide.subtitle}</span>
                  <h2 className="journey-slide__cta-title">{slide.titleLine1}</h2>
                  <p className="journey-slide__cta-desc">{slide.description}</p>
                </div>
              </div>
            );
          }

          // Journey phase slides
          return (
            <div
              className="journey-slide journey-slide--phase"
              key={slide.id}
              ref={(el) => setSlideRef(el, index)}
            >
              <div className="journey-slide__left">
                <div className="journey-slide__year-block">
                  <span className="journey-slide__year-bg">{slide.year}</span>
                  <div className={`journey-slide__icon journey-slide__icon--${slide.iconBg}`}>
                    <span>{slide.icon}</span>
                  </div>
                  <span className="journey-slide__year">{slide.year}</span>
                  <div className="journey-slide__year-underline"></div>
                </div>
              </div>
              <div className="journey-slide__right">
                <h2 className="journey-slide__title">
                  <span className="journey-slide__title-solid">{slide.titleLine1}</span>
                  <span className="journey-slide__title-solid">{slide.titleLine2}</span>
                </h2>
                <p className="journey-slide__desc">{slide.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Journey;
