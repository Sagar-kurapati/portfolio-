import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    proposal: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text stagger
      const lines = heroRef.current?.querySelectorAll('.contact-hero__line');
      if (lines) {
        gsap.from(lines, {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // Form section
      if (formRef.current) {
        gsap.from(formRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // Info section
      if (infoRef.current) {
        gsap.from(infoRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact" ref={sectionRef}>
      {/* Hero area */}
      <div className="contact-hero" ref={heroRef}>
        <span className="contact-hero__label">05 / GET CONNECTED</span>
        <h2 className="contact-hero__title">
          <span className="contact-hero__line contact-hero__line--black">LET'S</span>
          <span className="contact-hero__line contact-hero__line--accent">WORK</span>
          <span className="contact-hero__line contact-hero__line--black">TOGETHER</span>
        </h2>
      </div>

      {/* Form + Info */}
      <div className="contact__body">
        <div className="contact__inner">
          {/* Left - Form */}
          <div className="contact__form-wrap" ref={formRef}>
            <h3 className="contact__form-title">Send a Message</h3>
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label className="contact__field-label">NAME</label>
                <input
                  type="text"
                  name="name"
                  className="contact__input"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label className="contact__field-label">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  className="contact__input"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label className="contact__field-label">PROPOSAL</label>
                <input
                  type="text"
                  name="proposal"
                  className="contact__input"
                  placeholder="Project details..."
                  value={formData.proposal}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="contact__submit">
                <span>SEND MESSAGE</span>
                <span className="contact__submit-arrow">↗</span>
              </button>
            </form>
          </div>

          {/* Right - Info */}
          <div className="contact__info" ref={infoRef}>
            {/* Avatar + Name */}
            <div className="contact__info-profile">
              <div className="contact__info-avatar">
                <span className="contact__info-avatar-icon">👤</span>
                <span className="contact__info-status-dot"></span>
              </div>
              <div className="contact__info-name-block">
                <span className="contact__info-name">Sagar Kurapati</span>
                <span className="contact__info-role">WEB DEVELOPER</span>
              </div>
            </div>

            {/* Direct contact */}
            <div className="contact__info-direct">
              <span className="contact__info-direct-label">CONTACT DIRECTLY</span>
              <a href="mailto:sagarkurapati@gmail.com" className="contact__info-email">
                sagarkurapati@gmail.com
              </a>
            </div>

            {/* Socials */}
            <div className="contact__info-socials">
              <a href="#" className="contact__social-link" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a href="#" className="contact__social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="contact__social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      {/* <div className="contact__footer">
        <span className="contact__footer-copy">© 2026 SAGAR KURAPATI.</span>
        <span className="contact__footer-credit">DESIGNED & BUILT IN REACT</span>
      </div> */}
    </section>
  );
};

export default Contact;
