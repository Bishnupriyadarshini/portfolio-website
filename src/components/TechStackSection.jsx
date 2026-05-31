import FadeIn from "./FadeIn";

const techStack = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "Scikit-Learn",
  "OpenCV",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Docker",
  "Git",
  "AWS",
  "LangChain",
  "OpenAI API",
];

export default function TechStackSection() {
  return (
    <section
      className="
        bg-white
        px-5
        sm:px-8
        md:px-10
        py-24
        sm:py-28
        md:py-36
      "
    >
      {/* HEADING */}
      <FadeIn delay={0} y={40}>
        <h2
          className="
            text-[#0C0C0C]
            uppercase
            font-black
            text-center
            leading-none
            tracking-tight
            mb-16
            sm:mb-20
          "
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
          }}
        >
          Tech Stack
        </h2>
      </FadeIn>

      {/* STACK GRID */}
      <div
        className="
          max-w-6xl
          mx-auto
          flex
          flex-wrap
          justify-center
          gap-4
          sm:gap-5
        "
      >
        {techStack.map((tech, index) => (
          <FadeIn
            key={tech}
            delay={index * 0.03}
            y={20}
          >
            <div
              className="
                px-6
                py-4
                rounded-full
                border
                border-[#0C0C0C]/10
                bg-[#F5F5F5]
                text-[#0C0C0C]
                font-medium
                tracking-wide
                hover:scale-105
                hover:bg-[#0C0C0C]
                hover:text-white
                transition-all
                duration-300
              "
            >
              {tech}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}