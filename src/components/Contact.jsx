import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./contact.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    talent: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact__animate",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://rajan-portfolio-backend-84hc.onrender.com/api/contact/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);

        setFormData({
          name: "",
          email: "",
          talent: "",
          message: "",
        });
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.log("Contact Form Error:", error);

      setError(
        "Unable to send message. Please check your server and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container contact__inner">

        {/* LEFT SIDE */}
        <div className="contact__text contact__animate">
          <p className="eyebrow">
            Have an Idea? Let’s Make It Real.
          </p>

          <h2>
            Ready to Build the Next Big Thing?
          </h2>

          <p className="contact__sub">
            Tell us what you do — whatever it is — and our team will reach out
            about Any Help we can give.
          </p>
        </div>

        {/* CONTACT FORM */}
        <form
          className="contact__form contact__animate"
          onSubmit={handleSubmit}
        >
          {submitted ? (
            <div className="contact__success">
              You're in the queue. We'll be in touch. 🎤
            </div>
          ) : (
            <>
              {/* Name + Email */}
              <div className="contact__row">

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Talent */}
              <input
                type="text"
                name="talent"
                placeholder="What's your talent?"
                value={formData.talent}
                onChange={handleChange}
                required
              />

              {/* Message */}
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us why you belong on that stage"
                value={formData.message}
                onChange={handleChange}
                required
              />

              {/* Error */}
              {error && (
                <div
                  className="contact__error"
                  style={{
                    color: "#ff4d4d",
                    marginBottom: "10px",
                  }}
                >
                  ❌ {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading
                  ? "Sending..."
                  : "Submit Application →"}
              </button>
            </>
          )}
        </form>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer__inner">

          <span>
            © {new Date().getFullYear()} Rajan Kushwaha. All rights reserved.
          </span>

          <div className="footer__links">
            <a href="#home">Home</a>
            <a href="#projects">Project Section</a>
            <a href="#about">About</a>
          </div>

        </div>
      </footer>
    </section>
  );
}