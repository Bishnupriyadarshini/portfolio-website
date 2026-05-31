import { useEffect, useRef, useState } from "react";

const images = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
];

export default function MarqueeSection() {
  const sectionRef = useRef(null);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const scrollOffset =
        (window.scrollY - rect.top + window.innerHeight) * 0.3;

      setOffset(scrollOffset);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        bg-[#0C0C0C]
        pt-24
        sm:pt-32
        md:pt-40
        pb-10
        overflow-hidden
      "
    >
      <div
        className="flex gap-4"
        style={{
          transform: `translateX(${offset - 300}px)`,
          willChange: "transform",
        }}
      >
        {[...images, ...images].map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            loading="lazy"
            className="
              w-[320px]
              sm:w-[420px]
              h-[220px]
              sm:h-[270px]
              rounded-[30px]
              object-cover
              shrink-0
            "
          />
        ))}
      </div>
    </section>
  );
}