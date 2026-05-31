import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";

const projects = [
  {
  number: "01",
  category: "AI/ML",
  title: "AI Desktop Assistant",
  github: "https://github.com/Bishnupriyadarshini/ai-desktop-assistant",
  live: "",
  images: [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  ],
},

 {
  number: "02",
  category: "Deep Learning",
  title: "Breast Cancer Detection",
  github: "https://github.com/Bishnupriyadarshini/breast-cancer-detection",
  live: "",
  images: [
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1200&auto=format&fit=crop",
  ],
},

  
];

function ProjectCard({ project, index, total }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, targetScale]
  );

  return (
    <div
      ref={ref}
      className="h-[85vh] sticky top-24 md:top-32"
      style={{
        top: `${index * 28}px`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="
          h-full
          rounded-[40px]
          sm:rounded-[50px]
          md:rounded-[60px]
          border-2
          border-[#D7E2EA]
          bg-[#0C0C0C]
          p-4
          sm:p-6
          md:p-8
        "
      >
        {/* TOP */}
        <div className="flex items-start justify-between gap-6 mb-6">
          
          <div className="flex gap-6 items-start">
            
            <div
              className="
                hero-heading
                font-black
                leading-none
              "
              style={{
                fontSize: "clamp(3rem, 10vw, 140px)",
              }}
            >
              {project.number}
            </div>

            <div className="pt-3">
              <p className="uppercase text-sm tracking-widest text-[#D7E2EA]/60 mb-2">
                {project.category}
              </p>

              <h3 className="text-2xl md:text-4xl font-medium">
                {project.title}
              </h3>
            </div>
          </div>

          <a
  href={project.github}
  target="_blank"
  rel="noreferrer"
  className="
    rounded-full
    border-2
    border-[#D7E2EA]
    px-8
    py-3
    uppercase
    tracking-widest
    text-sm
    hover:bg-[#D7E2EA]/10
    transition
  "
>
  View Project
</a>
        </div>

        {/* IMAGES */}
        <div className="grid grid-cols-5 gap-4 h-[calc(100%-140px)]">
          
          {/* LEFT */}
          <div className="col-span-2 flex flex-col gap-4">
            
            <img
              src={project.images[0]}
              alt=""
              className="
                rounded-[40px]
                object-cover
                h-[230px]
                w-full
              "
            />

            <img
              src={project.images[1]}
              alt=""
              className="
                rounded-[40px]
                object-cover
                flex-1
                w-full
              "
            />
          </div>

          {/* RIGHT */}
          <div className="col-span-3">
            <img
              src={project.images[2]}
              alt=""
              className="
                rounded-[40px]
                object-cover
                w-full
                h-full
              "
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="
        relative
        bg-[#0C0C0C]
        rounded-t-[40px]
        sm:rounded-t-[50px]
        md:rounded-t-[60px]
        -mt-10
        sm:-mt-12
        md:-mt-14
        z-10
        px-5
        sm:px-8
        md:px-10
        py-20
      "
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="
            hero-heading
            uppercase
            font-black
            text-center
            leading-none
            tracking-tight
            mb-20
          "
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
          }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-20">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  );
}