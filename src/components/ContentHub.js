import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ContentHub.css";
import Astrika from "../assests/Astrika.png";
import Ringenious from "../assests/ringenious-solution.png";
import Merchant from "../assests/merchant-marvels-logo.png";
import MyBW from "../assests/crop-image.jpg";

gsap.registerPlugin(ScrollTrigger);

const featuredVideos = [
  {
    title: "Astrika Infotech ",
    category: "Web Developer",
    views: "Joined In April 2024",
    thumbnail: Astrika,
  },
  {
    title: "Merchant Marvels",
    category: "Web Developer",
    views: "Freelance Project",
    thumbnail: Merchant,
  },
  {
    title: "Ringenious Solutions LLC",
    category: "Web Developer",
    views: "Joined In April 2023",
    thumbnail: Ringenious,
  },
];

const ContentHub = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const slidesRef = useRef([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      const slider = sliderRef.current;

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

      // Animate slides on enter
      const slides = slidesRef.current.filter(Boolean);
      slides.forEach((slide) => {
        const inner = slide.querySelector(".chub-slide__inner");
        if (inner) {
          gsap.from(inner, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: slide,
              containerAnimation: scrollTween,
              start: "left 80%",
              toggleActions: "play none none reverse",
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
    <section className="content-hub" ref={sectionRef} id="content-hub">
      <div className="content-hub__slider" ref={sliderRef}>
        {/* ===== SLIDE 1: Hero intro ===== */}
        <div
          className="chub-slide chub-slide--hero"
          ref={(el) => setSlideRef(el, 0)}
        >
          <div className="chub-slide__inner">
            {/* Left - Avatar */}
            <div className="chub-hero__left">
              <div className="chub-hero__avatar-wrap">
                <div className="chub-hero__avatar-ring"></div>
                <div className="chub-hero__avatar-ring chub-hero__avatar-ring--outer"></div>
                <div className="chub-hero__avatar">
                  <img
              className="journey-slide__profile-image"
              src={MyBW}
              alt="Profile"
            />
                </div>
                <div className="chub-hero__play-badge">
                  
                </div>
              </div>
            </div>

            {/* Right - Info */}
            <div className="chub-hero__right">
              <div className="chub-hero__telemetry">
                <span className="chub-hero__dot"></span>
                <span className="chub-hero__telemetry-text">
                  TELEMETRY: ACTIVE / CAREER_PATH
                </span>
              </div>

              <span className="chub-hero__label">
                06 / EXPERIENCE & LEARNINGS
              </span>

              <h2 className="chub-hero__name">
                <span className="chub-hero__name-solid">Experience </span>
                <span className="chub-hero__name-outline">& Learnings</span>
              </h2>

              <p className="chub-hero__desc">
                Working on live projects, learning modern technologies, and
                continuously improving through real-world development
                challenges.
              </p>

              <div className="chub-hero__bg-num">01</div>
            </div>
          </div>
        </div>

        {/* ===== SLIDE 2: Impact Report / Metrics ===== */}
        <div
          className="chub-slide chub-slide--metrics"
          ref={(el) => setSlideRef(el, 1)}
        >
          <div className="chub-slide__inner">
            <div className="chub-metrics__header">
              <span className="chub-metrics__label">CERTIFICATIONS </span>
              <h2 className="chub-metrics__title">
                <span className="chub-metrics__title-solid">IMPACT</span>
                <span className="chub-metrics__title-accent">LEARNINGS</span>
              </h2>
            </div>
            <span className="chub-metrics__realtime">⚡</span>

            <div className="chub-metrics__cards">
              <div className="chub-metrics__card">
                <span className="chub-metrics__card-icon">🎓</span>
                <span className="chub-metrics__card-label">July, 2023</span>
                <span className="chub-metrics__card-value">
                  React JS Tutorial
                </span>
                <span className="chub-metrics__card-label">
                  Great Learning{" "}
                </span>
                <div className="chub-metrics__card-bar"></div>
              </div>
              <div className="chub-metrics__card">
                <span className="chub-metrics__card-icon">🎓</span>
                <span className="chub-metrics__card-label">July, 2023</span>
                <span className="chub-metrics__card-value">
                  Data Science Foundations
                </span>
                <span className="chub-metrics__card-label">
                  Great Learning{" "}
                </span>
                <div className="chub-metrics__card-bar"></div>
              </div>
              <div className="chub-metrics__card">
                <span className="chub-metrics__card-icon">🎓</span>
                <span className="chub-metrics__card-label">August, 2023</span>
                <span className="chub-metrics__card-value">
                  Introduction to JavaScript
                </span>
                <span className="chub-metrics__card-label">
                  Great Learning{" "}
                </span>
                <div className="chub-metrics__card-bar"></div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SLIDE 3: Featured Videos ===== */}
        <div
          className="chub-slide chub-slide--featured"
          ref={(el) => setSlideRef(el, 2)}
        >
          <div className="chub-slide__inner">
            <div className="chub-featured__header">
              <span className="chub-featured__label">💼 WORK EXPERIENCE</span>
              {/* <span className="chub-featured__hint">HOVER TO PLAY PREVIEW</span> */}
            </div>
            <div className="chub-featured__bg-num">03</div>

            <div className="chub-featured__grid">
              {featuredVideos.map((video, i) => (
                <div className="chub-video-card" key={i}>
                  <div className="chub-video-card__thumb">
                    <div className="chub-video-card__thumb-placeholder">
                      <img
                        className="exp__logo-image"
                        src={video.thumbnail}
                        alt="Profile"
                      />
                      {/* <span>▶</span> */}
                    </div>
                  </div>
                  <div className="chub-video-card__info">
                    <span className="chub-video-card__category">
                      <span className="chub-video-card__cat-dot"></span>
                      {video.category}
                    </span>
                    <h4 className="chub-video-card__title">{video.title}</h4>
                    <span className="chub-video-card__views">
                      👁 {video.views}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== SLIDE 4: CTA ===== */}
        <div
          className="chub-slide chub-slide--cta"
          ref={(el) => setSlideRef(el, 3)}
        >
          <div className="chub-slide__inner chub-cta__inner">
            <div className="chub-cta__yt-icon">
              <span>💼</span>
            </div>

            <h2 className="chub-cta__title">
              LET’S BUILD
              <br />
              TOGETHER
            </h2>

            <p className="chub-cta__desc">
              Open to new opportunities, collaborations, and challenging<br></br>
              projects where I can contribute, learn, and grow as a developer.
            </p>

            <div className="chub-cta__buttons">
              <a
                href="#contact"
                className="chub-cta__btn chub-cta__btn--primary"
              >
                <span></span>
                <span>CONTACT ME</span>
                <span>↗</span>
              </a>

              <a
                href="https://github.com/sagar-kurapati"
                target="_blank"
                rel="noreferrer"
                className="chub-cta__btn chub-cta__btn--secondary"
              >
                <span></span>
                <span>VIEW PROJECTS</span>
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
