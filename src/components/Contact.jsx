// // import { useEffect, useRef, useState } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import "./contact.css";

// // gsap.registerPlugin(ScrollTrigger);

// // export default function Contact() {
// //   const sectionRef = useRef(null);

// //   // Form states
// //   const [submitted, setSubmitted] = useState(false);

// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     talent: "",
// //     message: "",
// //   });

// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");

// //   // GSAP animation
// //   useEffect(() => {
// //     gsap.fromTo(
// //       sectionRef.current.querySelectorAll(".contact__animate"),
// //       {
// //         y: 30,
// //         opacity: 0,
// //       },
// //       {
// //         y: 0,
// //         opacity: 1,
// //         duration: 0.7,
// //         stagger: 0.1,
// //         ease: "power2.out",
// //         scrollTrigger: {
// //           trigger: sectionRef.current,
// //           start: "top 80%",
// //         },
// //       }
// //     );
// //   }, []);

// //   // Handle input changes
// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   // Handle form submit
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     setLoading(true);
// //     setError("");

// //     try {
// //       const response = await fetch(
// //         "http://localhost:8000/api/contact/send",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify(formData),
// //         }
// //       );

// //       const data = await response.json();

// //       if (data.success) {
// //         setSubmitted(true);

// //         // Clear form
// //         setFormData({
// //           name: "",
// //           email: "",
// //           talent: "",
// //           message: "",
// //         });
// //       } else {
// //         setError(data.message || "Something went wrong.");
// //       }
// //     } catch (error) {
// //       console.log("Contact Form Error:", error);

// //       setError(
// //         "Unable to send message. Please check your server and try again."
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <section id="contact" className="contact" ref={sectionRef}>
// //       <div className="container contact__inner">

// //         {/* LEFT SIDE */}
// //         <div className="contact__text contact__animate">
// //           <p className="eyebrow">
// //             Have an Idea? Let’s Make It Real.
// //           </p>

// //           <h2>
// //             Ready to Build the Next Big Thing?
// //           </h2>

// //           <p className="contact__sub">
// //             Tell us what you do — whatever it is — and our team will reach out
// //             about Any Help we can give.
// //           </p>
// //         </div>

// //         {/* CONTACT FORM */}
// //         <form
// //           className="contact__form contact__animate"
// //           onSubmit={handleSubmit}
// //         >
// //           {submitted ? (
// //             <div className="contact__success">
// //               You're in the queue. We'll be in touch. 🎤
// //             </div>
// //           ) : (
// //             <>
// //               {/* Name + Email */}
// //               <div className="contact__row">

// //                 <input
// //                   type="text"
// //                   name="name"
// //                   placeholder="Your name"
// //                   value={formData.name}
// //                   onChange={handleChange}
// //                   required
// //                 />

// //                 <input
// //                   type="email"
// //                   name="email"
// //                   placeholder="Email address"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   required
// //                 />

// //               </div>

// //               {/* Talent */}
// //               <input
// //                 type="text"
// //                 name="talent"
// //                 placeholder="What's your talent?"
// //                 value={formData.talent}
// //                 onChange={handleChange}
// //                 required
// //               />

// //               {/* Message */}
// //               <textarea
// //                 name="message"
// //                 rows="4"
// //                 placeholder="Tell us why you belong on that stage"
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 required
// //               />

// //               {/* Error Message */}
// //               {error && (
// //                 <div
// //                   className="contact__error"
// //                   style={{
// //                     color: "#ff4d4d",
// //                     marginBottom: "10px",
// //                   }}
// //                 >
// //                   ❌ {error}
// //                 </div>
// //               )}

// //               {/* Submit Button */}
// //               <button
// //                 type="submit"
// //                 className="btn btn-primary"
// //                 disabled={loading}
// //               >
// //                 {loading
// //                   ? "Sending..."
// //                   : "Submit Application →"}
// //               </button>
// //             </>
// //           )}
// //         </form>
// //       </div>

// //       {/* FOOTER */}
// //       <footer className="footer">
// //         <div className="container footer__inner">

// //           <span>
// //             © {new Date().getFullYear()} Rajan Kushwaha. All rights reserved.
// //           </span>

// //           <div className="footer__links">
// //             <a href="#home">Home</a>
// //             <a href="#projects">Project Section</a>
// //             <a href="#about">About</a>
// //           </div>

// //         </div>
// //       </footer>
// //     </section>
// //   );
// // }

// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import "./Navbar.css";

// export default function Navbar() {
//   const navRef = useRef();
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".navbar > *", {
//         y: -60,
//         opacity: 0,
//         stagger: 0.2,
//         duration: 1,
//         ease: "power4.out",
//       });
//     }, navRef);

//     return () => ctx.revert();
//   }, []);

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <nav className="navbar" ref={navRef}>

//       {/* Logo */}
//       <div className="logo">
//         Rajan <span>Kushwaha</span>
//       </div>

//       {/* Navigation Links */}
//       <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
//         <li>
//           <a href="#home" onClick={closeMenu}>Home</a>
//         </li>

//         <li>
//           <a href="#about" onClick={closeMenu}>About</a>
//         </li>

//         <li>
//           <a href="#skills" onClick={closeMenu}>Skills</a>
//         </li>

//         <li>
//           <a href="#projects" onClick={closeMenu}>Projects</a>
//         </li>

//         <li>
//           <a href="#contact" onClick={closeMenu}>Contact</a>
//         </li>

//         {/* Mobile Hire Me */}
//         <li className="mobile-hire">
//           <a
//             href="https://mail.google.com/mail/?view=cm&fs=1&to=rajankushwaha45998@gmail.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             onClick={closeMenu}
//           >
//             Hire Me
//           </a>
//         </li>
//       </ul>

//       {/* Desktop Hire Me */}
//       <div className="desktop-hire">
//         <a
//           href="https://mail.google.com/mail/?view=cm&fs=1&to=rajankushwaha45998@gmail.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <button type="button" className="hire-btn">
//             Hire Me
//           </button>
//         </a>
//       </div>

//       {/* Hamburger */}
//       <button
//         className={`menu-btn ${menuOpen ? "open" : ""}`}
//         onClick={() => setMenuOpen(!menuOpen)}
//         aria-label="Toggle navigation menu"
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </button>

//     </nav>
//   );
// }


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
        "http://localhost:8000/api/contact/send",
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