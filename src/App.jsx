import "./App.css";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useEffect } from "react";

function App() {

  const particlesInit = async (main) => {
    await loadFull(main);
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

      {/* CURSOR GLOW */}

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

        <nav>
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Proyectos</a>
          <a href="#">Contacto</a>
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
            🚀 EXPERIENCIA DIGITAL PREMIUM
          </span>

          <h1>
            Diseñamos el futuro digital
          </h1>

          <p>
            Creamos experiencias web modernas,
            futuristas y ultra profesionales.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Empezar Proyecto
          </motion.button>

        </motion.div>

      </section>

      {/* CARDS */}

      <section className="cards">

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{
            y: -12,
            scale: 1.03
          }}
        >
          <h2>⚡ Velocidad</h2>

          <p>
            Sitios optimizados y rápidos.
          </p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{
            y: -12,
            scale: 1.03
          }}
        >
          <h2>🎨 Diseño</h2>

          <p>
            Interfaces premium y futuristas.
          </p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileHover={{
            y: -12,
            scale: 1.03
          }}
        >
          <h2>🔥 Experiencia</h2>

          <p>
            Animaciones modernas y fluidas.
          </p>
        </motion.div>

      </section>

      {/* ABOUT */}

      <section className="about">

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <span className="about-badge">
            SOBRE NOSOTROS
          </span>

          <h2>
            Creamos experiencias digitales
            modernas e impactantes
          </h2>

          <p>
            Nuestro objetivo es ayudar a negocios
            y marcas a destacar con páginas web
            profesionales, rápidas y visualmente
            impresionantes.
          </p>

        </motion.div>

        <motion.div
          className="stats"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <div className="stat">
            <h3>+120</h3>
            <span>Clientes</span>
          </div>

          <div className="stat">
            <h3>+300</h3>
            <span>Proyectos</span>
          </div>

          <div className="stat">
            <h3>99%</h3>
            <span>Satisfacción</span>
          </div>

        </motion.div>

      </section>

      {/* PROJECTS */}

      <section className="projects">

        <motion.div
          className="project-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <span className="project-badge">
            NUESTROS PROYECTOS
          </span>

          <h2>
            Diseños modernos y profesionales
          </h2>

        </motion.div>

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
              Interfaz moderna para empresas tecnológicas.
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
              Página premium para negocios y marcas.
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
              Diseño futurista inspirado en inteligencia artificial.
            </p>

          </motion.div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-content">

          <div>

            <h3 className="footer-logo">
              JovePro
            </h3>

            <p>
              Diseñamos experiencias digitales modernas,
              rápidas y profesionales.
            </p>

          </div>

          <div className="footer-links">

            <a href="#">Inicio</a>
            <a href="#">Servicios</a>
            <a href="#">Proyectos</a>
            <a href="#">Contacto</a>

          </div>

        </div>

        <div className="footer-bottom">
          © 2025 JovePro. Todos los derechos reservados.
        </div>

      </footer>

    </div>
  );
}

export default App;