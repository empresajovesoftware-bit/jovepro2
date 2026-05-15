import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useEffect, useState } from "react";

function App() {

  const [loading, setLoading] = useState(true);

  const [count, setCount] = useState(0);

  const [menuOpen, setMenuOpen] = useState(false);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    const cursor = document.querySelector(".cursor-glow");

    const moveCursor = (e) => {

      if(cursor){
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }

    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (

    <>

      <AnimatePresence>

        {loading && (

          <motion.div
            className="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >

            <motion.h1
              initial={{
                scale: 0.8,
                opacity: 0
              }}
              animate={{
                scale: 1,
                opacity: 1
              }}
              transition={{
                duration: 1
              }}
            >

              JovePro

            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1
              }}
            >

              Designed and developed by Juan Miguel C. 🚀

            </motion.p>

          </motion.div>

        )}

      </AnimatePresence>

      {!loading && (

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
                  value: 80,
                },

                color: {
                  value: "#60a5fa",
                },

                links: {
                  enable: true,
                  color: "#60a5fa",
                  distance: 140,
                  opacity: 0.2,
                },

                move: {
                  enable: true,
                  speed: 1.2,
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

            <motion.div
              className="logo"
              whileHover={{ scale: 1.1 }}
            >
              JovePro
            </motion.div>

            <nav className="nav-links">

              <a href="#">
                Home
              </a>

              <a href="#services">
                Services
              </a>

              <a href="#projects">
                Projects
              </a>

              <a href="#contact">
                Contact
              </a>

            </nav>

            <div
              className="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </div>

          </header>

          {/* MOBILE MENU */}

          {
            menuOpen && (

              <div className="mobile-nav">

                <a href="#">
                  Home
                </a>

                <a href="#services">
                  Services
                </a>

                <a href="#projects">
                  Projects
                </a>

                <a href="#contact">
                  Contact
                </a>

              </div>

            )
          }

          {/* HERO */}

          <section className="hero">

            <motion.div
              className="content"
              initial={{
                opacity: 0,
                y: 50
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 1
              }}
            >

              <span className="badge">
                🚀 PREMIUM DIGITAL EXPERIENCE
              </span>

              <h1>
                We design the digital future
              </h1>

              <p>
                We create modern, futuristic and ultra professional digital experiences for brands, startups and businesses.
              </p>

              <motion.button
                whileHover={{
                  scale: 1.08
                }}
                whileTap={{
                  scale: 0.95
                }}
              >
                Start Project
              </motion.button>

            </motion.div>

          </section>

          {/* SERVICES */}

          <section
            className="cards"
            id="services"
          >

            <motion.div
              className="card"
              whileHover={{
                y: -12,
                scale: 1.03
              }}
            >

              <h2>
                ⚡ Speed
              </h2>

              <p>
                Ultra fast and optimized websites.
              </p>

            </motion.div>

            <motion.div
              className="card"
              whileHover={{
                y: -12,
                scale: 1.03
              }}
            >

              <h2>
                🎨 Design
              </h2>

              <p>
                Premium interfaces inspired by Apple and Tesla.
              </p>

            </motion.div>

            <motion.div
              className="card"
              whileHover={{
                y: -12,
                scale: 1.03
              }}
            >

              <h2>
                🔥 Experience
              </h2>

              <p>
                Cinematic animations and futuristic interactions.
              </p>

            </motion.div>

          </section>

          {/* PROJECTS */}

          <section
            className="projects"
            id="projects"
          >

            <div className="project-title">

              <span className="project-badge">
                OUR PROJECTS
              </span>

              <h2>
                Modern and futuristic experiences
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

                <h3>
                  Startup UI
                </h3>

                <p>
                  Futuristic interface for technology companies.
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

                <h3>
                  Business Landing
                </h3>

                <p>
                  Premium landing page for modern brands.
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

                <h3>
                  AI Experience
                </h3>

                <p>
                  Artificial intelligence inspired futuristic design.
                </p>

              </motion.div>

            </div>

          </section>

          {/* COUNTER */}

          <section className="counter-section">

            <h2>
              Interactive React Counter
            </h2>

            <div className="counter-box">

              <h1>
                {count}
              </h1>

              <div className="counter-buttons">

                <button onClick={() => setCount(count + 1)}>
                  + Add
                </button>

                <button onClick={() => setCount(count - 1)}>
                  - Remove
                </button>

                <button onClick={() => setCount(0)}>
                  Reset
                </button>

              </div>

            </div>

          </section>

          {/* CONTACT */}

          <section
            className="contact"
            id="contact"
          >

            <motion.div
              className="contact-box"
              initial={{
                opacity: 0,
                y: 80
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 1
              }}
              viewport={{
                once: true
              }}
            >

              <span className="contact-badge">
                CONTACT
              </span>

              <h2>
                Let's build your next project
              </h2>

              <form className="contact-form">

                <input
                  type="text"
                  placeholder="Your Name"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                />

                <textarea
                  placeholder="Tell us about your idea"
                ></textarea>

                <button type="submit">
                  Send Message
                </button>

              </form>

            </motion.div>

          </section>

          {/* FOOTER */}

          <footer className="footer">

            <div className="footer-content">

              <div>

                <h3 className="footer-logo">
                  JovePro
                </h3>

                <p>
                  Modern premium digital experiences.
                </p>

              </div>

              <div className="footer-links">

                <a href="#">
                  Home
                </a>

                <a href="#services">
                  Services
                </a>

                <a href="#projects">
                  Projects
                </a>

                <a href="#contact">
                  Contact
                </a>

              </div>

            </div>

            <div className="footer-bottom">
              © 2025 JovePro — Designed and developed by Juan Miguel C. 🚀
            </div>

          </footer>

        </div>

      )}

    </>

  );

}

export default App;