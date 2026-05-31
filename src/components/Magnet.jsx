import { useRef } from "react";

export default function Magnet({
  children,
  padding = 100,
  strength = 2,
}) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;

    if (!el) return;

    const rect = el.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    if (
      e.clientX > rect.left - padding &&
      e.clientX < rect.right + padding &&
      e.clientY > rect.top - padding &&
      e.clientY < rect.bottom + padding
    ) {
      el.style.transition = "transform 0.2s ease-out";

      el.style.transform = `
        translate3d(
          ${distanceX / strength}px,
          ${distanceY / strength}px,
          0
        )
      `;
    }
  };

  const handleMouseLeave = () => {
    const el = ref.current;

    if (!el) return;

    el.style.transition = "transform 0.5s ease";
    el.style.transform = "translate3d(0px,0px,0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}