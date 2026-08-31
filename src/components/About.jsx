import "./About.css";
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import profile from "../assets/profile.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 20%",

          toggleActions: "play none none reverse",
        },
      });

      // About content entrance
      tl.from(".About-left", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".About-right",
          {
            x: 60,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          ".tech",
          {
            y: 40,
            opacity: 0,
            scale: 0.8,
            stagger: 0.2,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.2"
        );

      // Profile continuous movement
      gsap.to(imageRef.current, {
        rotation: 4,
        y: 8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play pause resume pause",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="About" ref={sectionRef}>
      <div className="About-container">
        {/* Left Side */}
        <div className="About-left">
          <div className="hanger">
            <div className="hook"></div>

            <div className="rope rope-left"></div>
            <div className="rope rope-right"></div>

            <div className="image-card" ref={imageRef}>
              <img src={profile} alt="Profile" />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="About-right">
          <h1>Hello!</h1>

          <p>
            Hi, my name is <span>Rajan Kushwaha</span>, an aspiring software
            engineer based in India, dedicated to crafting clean, functional,
            and highly scalable full-stack applications.
          </p>

          <div className="tech-stack">
            <div className="tech">
              <FaHtml5 />
              <span>HTML</span>
            </div>

            <div className="tech">
              <FaNodeJs />
              <span>NODE.JS</span>
            </div>

            <div className="tech">
              <FaReact />
              <span>REACT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="curve"></div>

      {/* Decorative Stars */}
      <span className="star star1">✦</span>
      <span className="star star2">✦</span>
    </section>
  );
}