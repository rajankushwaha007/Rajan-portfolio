import "./Projects.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const projects = [
  {
    id: "01",
    title: "E-Commerce + AI",
    description:
      "A full-stack e-commerce platform built with the MERN stack, featuring secure authentication, product browsing, category filtering, search, shopping cart, wishlist, checkout, order management, and an admin dashboard. Integrated with Generative AI to deliver intelligent product discovery and AI-powered shopping assistance through a responsive, user-friendly interface.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux Toolkit",
      "JWT",
      "Bootstrap",
      "Cloudinary",
    ],
    github: "https://github.com/rajankushwaha007",
    live: "https://shopmart-server-final-0dwi.onrender.com",
  },

  {
    id: "02",
    title: "NewsApp + AI",
    description:
      "A responsive news application built with React.js and NewsAPI, featuring AI-powered article search, automatic article summarization into 3–4 key points, and Hindi-to-English and English-to-Hindi translation. Users can explore the latest news, browse categories, and understand news articles faster through intelligent AI features and a user-friendly interface.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Google Maps API",
      "JWT",
      "Bootstrap",
    ],
    github: "https://github.com/rajankushwaha007",
    live: "https://rajan-news-app.vercel.app",
  },

  {
    id: "03",
    title: "Employee Management System + AI",
    description:
      "A full-stack employee management application built with the MERN stack, featuring employee records management, search, filtering, pagination, analytics, and AI-powered natural-language queries using Gemini API, with a clean interface, database integration, and responsive design",
    tech: [
      "React",
      "CSS",
      "Vite",
      "Node.Js",
      "Lenis",
    ],
    github: "https://github.com/rajankushwaha007",
    live: "https://employee-management-ai.onrender.com",
  },

  {
    id: "04",
    title: "AI-Powered Chat App",
    description:
      "A full-stack real-time messaging application enhanced with Generative AI, featuring instant messaging, intelligent AI-powered conversations, secure authentication, online user status, media sharing, and Socket.IO-powered communication for seamless interactions.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Cloudinary",
      "Tailwind CSS",
    ],
    github: "https://github.com/rajankushwaha007",
    live: "https://realtime-chat-app-a5t3.onrender.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">



      <div className="projects-top">

        <span className="tag">
          Featured Projects
        </span>

        <h2>
          Work that speaks
          <br />
          for itself
        </h2>

        <p>
          A selection of projects showcasing my expertise in full-stack development, Generative AI integration, and modern application architecture.
        </p>

      </div>

      <div className="project-list">

        {projects.map((project) => (
          <div className="project-card" key={project.id}>

            <span className="project-label">
              ★ Flagship Project
            </span>

            <div className="project-heading">

              <h3>{project.id}</h3>

              <h1>{project.title}</h1>

            </div>

            <p className="description">
              {project.description}
            </p>

            <div className="tech-stack">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="buttons">

              <a href={project.github}>
                <FaGithub />
                GitHub
              </a>

              <a href={project.live}>
                <FaExternalLinkAlt />
                Live Demo
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}