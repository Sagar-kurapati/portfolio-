import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ContentHub.css';

gsap.registerPlugin(ScrollTrigger);

const featuredVideos = [
  {
    title: 'How I Built A Full Stack App In 7 Days',
    category: 'TECH TUTORIAL',
    views: '300+',
    thumbnail: null,
  },
  {
    title: 'Best VS Code Extensions For Web Devs',
    category: 'PRODUCTIVITY',
    views: '500+',
    thumbnail: null,
  },
  {
    title: 'CSS Animations That Will Blow Your Mind',
    category: 'VISUALS',
    views: '400+',
    thumbnail: null,
  },
  {
    title: 'My Developer Setup & Workflow 2025',
    category: 'ENTERTAINMENT',
    views: '200+',
    thumbnail: null,
  },
];

const ContentHub = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const slidesRef = useRef([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 769px)', () => {
      const slider = sliderRef.current;

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

      // Animate slides on enter
      const slides = slidesRef.current.filter(Boolean);
      slides.forEach((slide) => {
        const inner = slide.querySelector('.chub-slide__inner');
        if (inner) {
          gsap.from(inner, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: slide,
              containerAnimation: scrollTween,
              start: 'left 80%',
              toggleActions: 'play none none reverse',
            },
          });
        }
      });

      return () => scrollTween.kill();
    });

    return () => mm.revert();
  }, []);

  const setSlideRef = (el, i) => {
    slidesRef.current[i] = el;
  };

  return (
    <section className="content-hub" ref={sectionRef}>
      <div className="content-hub__slider" ref={sliderRef}>
        {/* ===== SLIDE 1: Hero intro ===== */}
        <div className="chub-slide chub-slide--hero" ref={(el) => setSlideRef(el, 0)}>
          <div className="chub-slide__inner">
            {/* Left - Avatar */}
            <div className="chub-hero__left">
              <div className="chub-hero__avatar-wrap">
                <div className="chub-hero__avatar-ring"></div>
                <div className="chub-hero__avatar-ring chub-hero__avatar-ring--outer"></div>
                <div className="chub-hero__avatar">
                  <span className="chub-hero__avatar-icon">👤</span>
                </div>
                <div className="chub-hero__play-badge">
                  <span>▶</span>
                </div>
              </div>
            </div>

            {/* Right - Info */}
            <div className="chub-hero__right">
              <div className="chub-hero__telemetry">
                <span className="chub-hero__dot"></span>
                <span className="chub-hero__telemetry-text">
                  TELEMETRY: ACTIVE / CONTENT_STREAM
                </span>
              </div>
              <span className="chub-hero__label">06 / CONTENT CREATOR</span>
              <h2 className="chub-hero__name">
                <span className="chub-hero__name-solid">SAGAR</span>
                <span className="chub-hero__name-outline">KURAPATI</span>
              </h2>
              <p className="chub-hero__desc">
                Tech tutorials, Shorts, software tips, and creative animations
              </p>
              <div className="chub-hero__bg-num">01</div>
            </div>
          </div>
        </div>

        {/* ===== SLIDE 2: Impact Report / Metrics ===== */}
        <div className="chub-slide chub-slide--metrics" ref={(el) => setSlideRef(el, 1)}>
          <div className="chub-slide__inner">
            <div className="chub-metrics__header">
              <span className="chub-metrics__label">📊 METRICS / DASHBOARD</span>
              <h2 className="chub-metrics__title">
                <span className="chub-metrics__title-solid">IMPACT</span>
                <span className="chub-metrics__title-accent">REPORT</span>
              </h2>
            </div>
            <span className="chub-metrics__realtime">⚡ REAL-TIME CONTENT ENGAGEMENT</span>

            <div className="chub-metrics__cards">
              <div className="chub-metrics__card">
                <span className="chub-metrics__card-icon">👥</span>
                <span className="chub-metrics__card-value">1.2K</span>
                <span className="chub-metrics__card-label">ACTIVE SUBSCRIBERS</span>
                <div className="chub-metrics__card-bar"></div>
              </div>
              <div className="chub-metrics__card">
                <span className="chub-metrics__card-icon">🎬</span>
                <span className="chub-metrics__card-value">50+</span>
                <span className="chub-metrics__card-label">EDUCATIONAL VIDEOS</span>
                <div className="chub-metrics__card-bar"></div>
              </div>
              <div className="chub-metrics__card">
                <span className="chub-metrics__card-icon">👁</span>
                <span className="chub-metrics__card-value">500K+</span>
                <span className="chub-metrics__card-label">TOTAL IMPRESSIONS</span>
                <div className="chub-metrics__card-bar"></div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SLIDE 3: Featured Videos ===== */}
        <div className="chub-slide chub-slide--featured" ref={(el) => setSlideRef(el, 2)}>
          <div className="chub-slide__inner">
            <div className="chub-featured__header">
              <span className="chub-featured__label">📈 FEATURED / TRENDING NOW</span>
              <span className="chub-featured__hint">HOVER TO PLAY PREVIEW</span>
            </div>
            <div className="chub-featured__bg-num">03</div>

            <div className="chub-featured__grid">
              {featuredVideos.map((video, i) => (
                <div className="chub-video-card" key={i}>
                  <div className="chub-video-card__thumb">
                    <div className="chub-video-card__thumb-placeholder">
                      <span>▶</span>
                    </div>
                  </div>
                  <div className="chub-video-card__info">
                    <span className="chub-video-card__category">
                      <span className="chub-video-card__cat-dot"></span>
                      {video.category}
                    </span>
                    <h4 className="chub-video-card__title">{video.title}</h4>
                    <span className="chub-video-card__views">
                      👁 {video.views} VIEWS RECORDED
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== SLIDE 4: CTA ===== */}
        <div className="chub-slide chub-slide--cta" ref={(el) => setSlideRef(el, 3)}>
          <div className="chub-slide__inner chub-cta__inner">
            <div className="chub-cta__yt-icon">
              <span>▶</span>
            </div>
            <h2 className="chub-cta__title">
              JOIN THE<br />FREQUENCY
            </h2>
            <p className="chub-cta__desc">
              BRIDGING THE GAP BETWEEN SOFTWARE<br />
              ENGINEERING AND CREATIVE DIGITAL CONTENT.
            </p>
            <div className="chub-cta__buttons">
              <a href="#" className="chub-cta__btn chub-cta__btn--primary">
                <span>▶</span>
                <span>SUBSCRIBE NOW</span>
                <span>↗</span>
              </a>
              <a href="#" className="chub-cta__btn chub-cta__btn--secondary">
                <span>EXPLORE ARCHIVE</span>
                <span>↗</span>
              </a>
            </div>
            <div className="chub-cta__bg-num">04</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentHub;
