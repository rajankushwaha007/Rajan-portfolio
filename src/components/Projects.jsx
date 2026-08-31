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
    title: "E-Commerce",
    description:
      "A full-stack e-commerce platform built with the MERN stack, featuring secure authentication, product browsing, category filtering, search, shopping cart, wishlist, checkout, order management, admin dashboard, and a responsive user-friendly interface.",
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
    live: "#",
  },

  {
    id: "02",
    title: "NewsApp",
    description:
      "A responsive news application that lets users browse the latest news, explore different categories, search for articles, and read stories in a clean and simple interface. Built with React and NewsAPI for fetching real-time news.",
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
    live: "#",
  },

  {
    id: "03",
    title: "CRUD Applications",
    description:
      "A full-stack CRUD application focused on creating, viewing, updating, and deleting records with a clean interface, form handling, API integration, database operations, and responsive design built with the MERN stack.",
    tech: [
      "React",
      "CSS",
      "Vite",
      "Node.Js",
      "Lenis",
    ],
    github: "https://github.com/rajankushwaha007",
    live: "#",
  },

  {
    id: "04",
    title: "Chat App",
    description:
      "A real-time messaging application with instant chat, online user status, authentication, responsive interface, media sharing support, and Socket.io powered communication for seamless conversations.",
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
    live: "#",
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
          A selection of projects that showcase my expertise in full-stack
          development and modern architecture.
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