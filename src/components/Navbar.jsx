import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Navbar.css";

export default function Navbar() {
  const navRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".navbar > *", {
        y: -60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" ref={navRef}>

      {/* Logo */}
      <div className="logo">
        Rajan <span>Kushwaha</span>
      </div>

      {/* Desktop / Mobile Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={closeMenu}>Home</a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>About</a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>Skills</a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>Projects</a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </li>

        {/* Hire Me for mobile */}
        <li className="mobile-hire">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rajankushwaha45998@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Hire Me
          </a>
        </li>
      </ul>

      {/* Desktop Hire Me */}
      <div className="desktop-hire">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=rajankushwaha45998@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="hire-btn">
            Hire Me
          </button>
        </a>
      </div>

      {/* Hamburger */}
      <button
        className={`menu-btn ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  );
}