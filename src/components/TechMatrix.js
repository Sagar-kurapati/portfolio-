import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./TechMatrix.css";

gsap.registerPlugin(ScrollTrigger);

const techData = [
  {
    id: "SYS.01",
    name: "REACT",
    desc: "FRONTEND LIBRARY",
    icon: "⚛",
    capacity: 90,
  },
  {
    id: "SYS.02",
    name: "JAVASCRIPT",
    desc: "CORE LANGUAGE",
    icon: "{ }",
    capacity: 92,
  },
  {
    id: "SYS.03",
    name: "HTML / CSS",
    desc: "UI STRUCTURE",
    icon: "</>",
    capacity: 93,
  },
  {
    id: "SYS.04",
    name: "WORDPRESS",
    desc: "CMS DEVELOPMENT",
    icon: "▲",
    capacity: 88,
  },
  {
    id: "SYS.05",
    name: "WOOCOMMERCE",
    desc: "E-COMMERCE PLATFORM",
    icon: "🛒",
    capacity: 85,
  },
  {
    id: "SYS.05",
    name: "PHP",
    desc: "BACKEND DEVELOPMENT",
    icon: "🐘",
    capacity: 85,
  },
  {
    id: "SYS.06",
    name: "NODE.JS",
    desc: "SERVER RUNTIME",
    icon: "⬡",
    capacity: 80,
  },
  {
    id: "SYS.07",
    name: "MYSQL",
    desc: "RELATIONAL DATABASE",
    icon: "🗄",
    capacity: 85,
  },
  {
    id: "SYS.08",
    name: "GSAP",
    desc: "WEB ANIMATION",
    icon: "✨",
    capacity: 80,
  },
  {
    id: "SYS.09",
    name: "REST API",
    desc: "API INTEGRATION",
    icon: "🔗",
    capacity: 82,
  },
];

const TechMatrix = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Staggered card entrance
      const cards = cardsRef.current.filter(Boolean);
      gsap.from(cards, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const setCardRef = (el, index) => {
    cardsRef.current[index] = el;
  };

  return (
    <section className="tech-matrix" ref={sectionRef} id="tech-matrix">
      <div className="tech-matrix__inner">
        {/* Header */}
        <div className="tech-matrix__header" ref={headingRef}>
          <span className="tech-matrix__label">04 / TECH STACK</span>

          <h2 className="tech-matrix__title">
            <span className="tech-matrix__title-solid">TECH </span>
            <span className="tech-matrix__title-outline">STACK</span>
          </h2>

          <p className="tech-matrix__subtitle">
            Technologies and tools I use to build scalable, efficient, and
            reliable applications.
          </p>
          {/* <span className="tech-matrix__hint">// HOVER OVER MODULES TO INSPECT</span> */}
        </div>

        {/* Grid */}
        <div className="tech-matrix__grid">
          {techData.map((tech, index) => (
            <div
              className="tech-card"
              key={tech.id}
              ref={(el) => setCardRef(el, index)}
            >
              <div className="tech-card__top">
                <div className="tech-card__icon">
                  <span>{tech.icon}</span>
                </div>
                <span className="tech-card__id">{tech.id}</span>
              </div>

              <div className="tech-card__info">
                <h3 className="tech-card__name">{tech.name}</h3>
                <span className="tech-card__desc">{tech.desc}</span>
              </div>

              <div className="tech-card__bottom">
                <div className="tech-card__bar-track">
                  <div
                    className="tech-card__bar-fill"
                    style={{ "--fill-width": `${tech.capacity}%` }}
                  ></div>
                </div>
                <div className="tech-card__capacity-row">
                  <span className="tech-card__capacity-label">CAPACITY</span>
                  <span className="tech-card__capacity-value">
                    {tech.capacity}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMatrix;
