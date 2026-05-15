import "./App.css";
import Counter from "./components/Counter";

import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { useEffect, useRef } from "react";

import emailjs from "@emailjs/browser";

function App() {

  const form = useRef();

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(
      "service_i4rjtam",
      "template_rtexhbr",
      form.current,
      "-sp_Lsyt8XcWFYvXn"
    )

    .then(() => {

      alert("Mensaje enviado 🚀");

    })

    .catch(() => {

      alert("Error al enviar");

    });

  };

  useEffect(() => {

    const cursor = document.querySelector(".cursor-glow");

    const moveCursor = (e) => {

      if(cursor){
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }

    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (

    <div className="app">

      {/* CURSOR */}

      <div className="cursor-glow"></div>

      {/* PARTICLES */}

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#020617",
            },
          },

          fpsLimit: 120,

          particles: {
            number: {
              value: 70,
            },

            color: {
              value: "#60a5fa",
            },

            links: {
              enable: true,
              color: "#60a5fa",
              distance: 150,
              opacity: 0.2,
            },

            move: {
              enable: true,
              speed: 1,
            },

            opacity: {
              value: 0.3,
            },

            size: {
              value: 2,
            },
          },
        }}
      />

      {/* NAVBAR */}

      <header className="navbar">

        <div className="logo">
          JovePro
        </div>

        <nav className="nav-links">

          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </nav>

      </header>

      {/* HERO */}

      <section className="hero">

        <motion.div
          className="content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <span className="badge">
            🚀 PREMIUM DIGITAL EXPERIENCE
          </span>

          <h1>
            We design the digital future
          </h1>

          <p>
            We create modern, futuristic and ultra professional web experiences.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Project
          </motion.button>

        </motion.div>

      </section>

      {/* SERVICES */}

      <section className="cards" id="services">

        <motion.div
          className="card"
          whileHover={{
            y: -12,
            scale: 1.03
          }}
        >

          <h2>⚡ Speed</h2>

          <p>
            Optimized and ultra fast websites.
          </p>

        </motion.div>

        <motion.div
          className="card"
          whileHover={{
            y: -12,
            scale: 1.03
          }}
        >

          <h2>🎨 Design</h2>

          <p>
            Premium futuristic interfaces.
          </p>

        </motion.div>

        <motion.div
          className="card"
          whileHover={{
            y: -12,
            scale: 1.03
          }}
        >

          <h2>🔥 Experience</h2>

          <p>
            Modern smooth animations and interactions.
          </p>

        </motion.div>

      </section>

      {/* COUNTER */}

      <Counter />

      {/* PROJECTS */}

      <section className="projects" id="projects">

        <div className="project-title">

          <span className="project-badge">
            OUR PROJECTS
          </span>

          <h2>
            Modern and professional designs
          </h2>

        </div>

        <div className="project-grid">

          <motion.div
            className="project-card"
            whileHover={{
              y: -10,
              scale: 1.02
            }}
          >

            <div className="project-image"></div>

            <h3>Startup UI</h3>

            <p>
              Modern interface for tech companies.
            </p>

          </motion.div>

          <motion.div
            className="project-card"
            whileHover={{
              y: -10,
              scale: 1.02
            }}
          >

            <div className="project-image image2"></div>

            <h3>Business Landing</h3>

            <p>
              Premium website for modern businesses.
            </p>

          </motion.div>

          <motion.div
            className="project-card"
            whileHover={{
              y: -10,
              scale: 1.02
            }}
          >

            <div className="project-image image3"></div>

            <h3>AI Experience</h3>

            <p>
              Futuristic design inspired by AI systems.
            </p>

          </motion.div>

        </div>

      </section>

      {/* CONTACT */}

      <section className="contact" id="contact">

        <motion.div
          className="contact-box"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <span className="contact-badge">
            CONTACT
          </span>

          <h2>
            Let's build your next project
          </h2>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              placeholder="Tell us about your idea"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </motion.div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <h2>
          Designed and developed by Juan Miguel C. 🚀
        </h2>

      </footer>

    </div>

  );
}

export default App;