import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MyBW from "../assests/MyBW.png";
import "./Journey.css";

gsap.registerPlugin(ScrollTrigger);

const journeyData = [
 {
  id: 1,
  phase: "THE PROFILE",
  sectionNum: "01",
  type: "profile",
  titleLine1: "BSc IT",
  titleLine2: "Graduate.",
  titleLine2Style: "outline",
  description:
    "Web developer with 2+ years of experience building modern web applications using React, PHP, and WordPress. Focused on creating scalable, high-performance, and user-friendly digital products.",
  profileImage: true,
},

{
  id: 2,
  phase: "PHASE 1",
  sectionNum: "02",
  navLabel: "JOURNEY / PHASE 1",
  year: "2023",
  icon: "📖",
  iconBg: "book",
  titleLine1: "BUILDING THE",
  titleLine2: "FOUNDATION",
  description:
    "Started my professional journey as a Web Developer at Ringenious Solutions. Worked with PHP, WordPress, JavaScript, HTML, and CSS while learning how real-world websites are developed, deployed, and maintained.",
},

{
  id: 3,
  phase: "PHASE 2",
  sectionNum: "02",
  navLabel: "JOURNEY / PHASE 2",
  year: "2024",
  icon: "🌱",
  iconBg: "seedling",
  titleLine1: "BUILDING REAL",
  titleLine2: "APPLICATIONS",
  description:
    "Developed production websites and systems including CRM platforms, e-commerce solutions, and dynamic WordPress sites. Focused on backend logic using PHP & MySQL while improving responsive UI and performance.",
},

{
  id: 4,
  phase: "PHASE 3",
  sectionNum: "02",
  navLabel: "JOURNEY / PHASE 3",
  year: "2025",
  icon: "⚡",
  iconBg: "bolt",
  titleLine1: "MOVING INTO",
  titleLine2: "MODERN FRONTEND",
  description:
    "Expanded into modern frontend development using React. Built projects like admin dashboards, appointment booking systems, and portfolio applications while learning component-based architecture and reusable UI systems.",
},

{
  id: 5,
  phase: "PHASE 4",
  sectionNum: "02",
  navLabel: "JOURNEY / PHASE 4",
  year: "2026",
  icon: "🚀",
  iconBg: "rocket",
  titleLine1: "ENGINEERING",
  titleLine2: "FULL STACK SOLUTIONS",
  description:
    "Working as a Web Developer  building scalable web applications using React, Node.js, and MySQL. Focused on performance optimization, modern UI development, and delivering production-ready web solutions.",
},
  {
    id: 7,
    type: "cta",
    titleLine1: "READY?",
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

    mm.add("(min-width: 769px)", () => {
      const slider = sliderRef.current;
      const slides = slidesRef.current.filter(Boolean);
      const totalSlides = slides.length;

      const scrollTween = gsap.to(slider, {
        x: () => -(slider.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + (slider.scrollWidth - window.innerWidth),
          invalidateOnRefresh: true,
        },
      });

      // Animate each slide content on enter
      slides.forEach((slide, i) => {
        if (i === 0) return; // profile slide animates differently

        const content = slide.querySelector(".journey-slide__right");
        const left = slide.querySelector(".journey-slide__left");

        if (content) {
          gsap.from(content, {
            opacity: 0,
            y: 60,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: slide,
              containerAnimation: scrollTween,
              start: "left 80%",
              toggleActions: "play none none reverse",
            },
          });
        }

        if (left) {
          gsap.from(left, {
            opacity: 0,
            x: -60,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: slide,
              containerAnimation: scrollTween,
              start: "left 85%",
              toggleActions: "play none none reverse",
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
    <section className="journey" ref={sectionRef} id="journey">
      <div className="journey__slider" ref={sliderRef}>
        {journeyData.map((slide, index) => {
          // Profile slide
          if (slide.type === "profile") {
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
                      <img
                          className="journey-slide__profile-image"
                          src={MyBW}
                          alt="Profile"
                        />
                      <div className="journey-slide__avatar">
                        
                        {/* <span className="journey-slide__avatar-icon">👤</span> */}
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
                    <span className="journey-slide__title-solid">
                      {slide.titleLine1}
                    </span>
                    <span className="journey-slide__title-outline">
                      {slide.titleLine2}
                    </span>
                  </h2>
                  <p className="journey-slide__desc">{slide.description}</p>
                </div>
                <div className="journey-slide__bg-number">01</div>
              </div>
            );
          }

          // CTA slide
          if (slide.type === "cta") {
            return (
              <div
                className="journey-slide journey-slide--cta"
                key={slide.id}
                ref={(el) => setSlideRef(el, index)}
              >
                <div className="journey-slide__cta-content">
                  <span className="journey-slide__cta-subtitle">
                    {slide.subtitle}
                  </span>
                  <h2 className="journey-slide__cta-title">
                    {slide.titleLine1}
                  </h2>
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
                  <div
                    className={`journey-slide__icon journey-slide__icon--${slide.iconBg}`}
                  >
                    <span>{slide.icon}</span>
                  </div>
                  <span className="journey-slide__year">{slide.year}</span>
                  <div className="journey-slide__year-underline"></div>
                </div>
              </div>
              <div className="journey-slide__right">
                <h2 className="journey-slide__title">
                  <span className="journey-slide__title-solid">
                    {slide.titleLine1}
                  </span>
                  <span className="journey-slide__title-solid">
                    {slide.titleLine2}
                  </span>
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
