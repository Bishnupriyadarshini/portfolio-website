import { motion } from "framer-motion";
import Magnet from "./components/Magnet";
import FadeIn from "./components/FadeIn";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import SmoothScroll from "./components/SmoothScroll";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import TechStackSection from "./components/TechStackSection";
import profile from "./assets/profile.png";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SmoothScroll />
      <Cursor />
      <Loader loading={loading} />

      <motion.section
        id="home"
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-black
          text-white
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* BACKGROUND */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.12),transparent_30%)]
          "
        />

        {/* NAVBAR */}
        <div className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 pt-4">
          <nav
            className="
              mx-auto
              flex
              max-w-7xl
              items-center
              justify-between
              rounded-full
              border
              border-purple-500/20
              bg-black/30
              backdrop-blur-xl
              px-6
              py-4
            "
          >
            <div className="flex items-center gap-6">
              <a href="#about" className="uppercase text-sm tracking-[0.25em] hover:text-purple-400 transition">
                About
              </a>

              <a href="#services" className="uppercase text-sm tracking-[0.25em] hover:text-purple-400 transition">
                Services
              </a>

              <a href="#projects" className="uppercase text-sm tracking-[0.25em] hover:text-purple-400 transition">
                Projects
              </a>
            </div>

            <div className="hidden md:block text-3xl font-bold">
              BP
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/Bishnupriyadarshini"
                target="_blank"
                rel="noreferrer"
                className="uppercase text-sm tracking-[0.25em] hover:text-purple-400 transition"
              >
                Github
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="uppercase text-sm tracking-[0.25em] hover:text-purple-400 transition"
              >
                LinkedIn
              </a>

              
               
            </div>
          </nav>
        </div>

        {/* HERO */}
        <div
          className="
            relative
            z-10
            min-h-screen
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            px-6
            md:px-12
            lg:px-24
            pt-36
          "
        >
          {/* LEFT */}
          <div className="max-w-3xl z-20">
            <FadeIn delay={0.1}>
              <p
                className="
                  uppercase
                  tracking-[0.35em]
                  text-purple-300
                  text-sm
                  mb-8
                "
              >
                • AI/ML Developer
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1
                className="
                  uppercase
                  font-black
                  leading-[0.88]
                  tracking-tight
                  text-[18vw]
                  sm:text-[14vw]
                  md:text-[10vw]
                  lg:text-[7vw]
                "
              >
                Bishnu
                <br />
                Priyadarshini
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="w-24 h-[2px] bg-purple-500 mt-8 mb-8" />
            </FadeIn>

            <FadeIn delay={0.4}>
              <p
                className="
                  text-white/70
                  max-w-2xl
                  leading-relaxed
                  text-lg
                "
              >
                Crafting intelligent digital experiences with modern
                full-stack technologies, AI systems, and immersive frontend engineering.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <a
                href="mailto:bishnu@example.com"
                className="
                  inline-flex
                  items-center
                  gap-3
                  mt-12
                  px-8
                  py-4
                  rounded-full
                  border
                  border-purple-500
                  uppercase
                  tracking-[0.25em]
                  text-sm
                  hover:bg-purple-500
                  transition-all
                  duration-300
                "
              >
                Contact Me ↗
              </a>
            </FadeIn>
          </div>

          {/* RIGHT */}
          <FadeIn delay={0.4}>
            <div
              className="
                relative
                mt-20
                lg:mt-0
                flex
                items-center
                justify-center
              "
            >
              {/* OUTER GLOW */}
              <div
                className="
                  absolute
                  w-[500px]
                  h-[500px]
                  rounded-full
                  bg-purple-700/20
                  blur-[120px]
                "
              />

              {/* RING */}
              <div
                className="
                  absolute
                  w-[420px]
                  h-[420px]
                  rounded-full
                  border
                  border-purple-400
                  shadow-[0_0_80px_rgba(168,85,247,0.6)]
                "
              />

              {/* IMAGE */}
              <Magnet>
                <div className="relative">
                  <img
                    src={profile}
                    alt="Bishnu Priyadarshini"
                    className="
                      relative
                      z-10
                      w-[300px]
                      sm:w-[380px]
                      md:w-[520px]
                      object-cover
                      mix-blend-lighten
                      opacity-90
                      contrast-110
                      brightness-105
                    "
                  />
                </div>
              </Magnet>
            </div>
          </FadeIn>
        </div>
      </motion.section>

      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <TechStackSection />
      <ProjectsSection />
    </>
  );
}