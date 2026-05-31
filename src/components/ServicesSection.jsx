import FadeIn from "./FadeIn";

const services = [
  {
    number: "01",
    title: "AI/ML Development",
    description:
      "Building intelligent systems using machine learning, deep learning, and generative AI technologies.",
  },
  {
    number: "02",
    title: "Full Stack Development",
    description:
      "Developing scalable full-stack web applications using React, Node.js, Express, and MongoDB.",
  },
  {
    number: "03",
    title: "Frontend Engineering",
    description:
      "Creating immersive and responsive user interfaces with modern animation and interaction systems.",
  },
  {
    number: "04",
    title: "API & Backend Systems",
    description:
      "Designing secure APIs, authentication systems, and scalable backend architectures.",
  },
  {
    number: "05",
    title: "AI Product Design",
    description:
      "Combining AI capabilities with elegant user experiences to build futuristic digital products.",
  },
];
export default function ServicesSection() {
  return (
    <section
      id="services"
      className="
        bg-white
        rounded-t-[40px]
        sm:rounded-t-[50px]
        md:rounded-t-[60px]
        px-5
        sm:px-8
        md:px-10
        py-20
        sm:py-24
        md:py-32
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
            mb-16
            sm:mb-20
            md:mb-28
            leading-none
            tracking-tight
          "
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
          }}
        >
          Services
        </h2>
      </FadeIn>

      {/* SERVICES LIST */}
      <div className="max-w-5xl mx-auto">
        {services.map((service, index) => (
          <FadeIn
            key={service.number}
            delay={index * 0.1}
            y={30}
          >
            <div
              className="
                border-b
                border-[#0C0C0C]/15
                py-8
                sm:py-10
                md:py-12
                flex
                flex-col
                md:flex-row
                gap-6
                md:gap-10
              "
            >
              {/* NUMBER */}
              <div
                className="
                  text-[#0C0C0C]
                  font-black
                  leading-none
                  shrink-0
                "
                style={{
                  fontSize: "clamp(3rem, 10vw, 140px)",
                }}
              >
                {service.number}
              </div>

              {/* CONTENT */}
              <div className="flex flex-col gap-4 pt-2">
                <h3
                  className="
                    text-[#0C0C0C]
                    uppercase
                    font-medium
                    leading-none
                  "
                  style={{
                    fontSize: "clamp(1rem, 2.2vw, 2.1rem)",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="
                    text-[#0C0C0C]/60
                    font-light
                    leading-relaxed
                    max-w-2xl
                  "
                  style={{
                    fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}