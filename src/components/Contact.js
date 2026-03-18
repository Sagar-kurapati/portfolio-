import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";
import MyBW from "../assests/crop-image.jpg";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    proposal: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: "",
      error: "",
    });

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/sagar8291524322@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            proposal: formData.proposal,
            _subject: "New Portfolio Contact Message",
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const result = await response.json();

      if (result.success === "true" || result.success === true) {
        setStatus({
          loading: false,
          success: "Message sent successfully.",
          error: "",
        });

        setFormData({
          name: "",
          email: "",
          proposal: "",
        });
      } else {
        setStatus({
          loading: false,
          success: "",
          error: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: "",
        error: "Unable to send message right now. Please try again later.",
      });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = heroRef.current?.querySelectorAll(".contact-hero__line");
      if (lines) {
        gsap.from(lines, {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (formRef.current) {
        gsap.from(formRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (infoRef.current) {
        gsap.from(infoRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact" ref={sectionRef} id="contact">
      <div className="contact-hero" ref={heroRef}>
        <span className="contact-hero__label">05 / GET CONNECTED</span>
        <h2 className="contact-hero__title">
          <span className="contact-hero__line contact-hero__line--black">
            LET'S
          </span>
          <span className="contact-hero__line contact-hero__line--accent">
            WORK
          </span>
          <span className="contact-hero__line contact-hero__line--black">
            TOGETHER
          </span>
        </h2>
      </div>

      <div className="contact__body">
        <div className="contact__inner">
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
                  required
                />
              </div>

              <button
                type="submit"
                className="contact__submit"
                disabled={status.loading}
              >
                <span>{status.loading ? "SENDING..." : "SEND MESSAGE"}</span>
                <span className="contact__submit-arrow">↗</span>
              </button>

              {status.success && (
                <p
                  style={{
                    marginTop: "12px",
                    color: "#22c55e",
                    fontSize: "14px",
                  }}
                >
                  {status.success}
                </p>
              )}

              {status.error && (
                <p
                  style={{
                    marginTop: "12px",
                    color: "#ef4444",
                    fontSize: "14px",
                  }}
                >
                  {status.error}
                </p>
              )}
            </form>
          </div>

          <div className="contact__info" ref={infoRef}>
            <div className="contact__info-profile">
              <div className="contact__info-avatar">
                <img
                  className="contact-slide__profile-image"
                  src={MyBW}
                  alt="Profile"
                />

                <span className="contact__info-avatar-icon"></span>
                <span className="contact__info-status-dot"></span>
              </div>

              <div className="contact__info-name-block">
                <span className="contact__info-name">Sagar Kurapati</span>
                <span className="contact__info-role">WEB DEVELOPER</span>
              </div>
            </div>

            <div className="contact__info-direct">
              <span className="contact__info-direct-label">
                CONTACT DIRECTLY
              </span>
              <a
                href="mailto:sagar8291524322@gmail.com"
                className="contact__info-email"
              >
                sagar8291524322@gmail.com
              </a>
            </div>

            <div className="contact__info-socials">
              <a
                href="https://github.com/sagar-kurapati/"
                className="contact__social-link"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
              >
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
              </a>

              <a
                href="https://linkedin.com/in/sagar-kurapati-a02307270"
                className="contact__social-link"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/sagar_kurapati__?igsh=N2RocmVmN3RqaXRu&utm_source=qr"
                className="contact__social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
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
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37a4 4 0 1 1-4.63-3.32A4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;