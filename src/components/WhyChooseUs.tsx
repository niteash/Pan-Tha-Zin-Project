import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function WhyChooseUs() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    // Row 1 → move left
    gsap.to(row1Ref.current, {
      xPercent: -50,
      repeat: -1,
      ease: "linear",
      duration: 20,
    });

    // Row 2 → move right
    gsap.to(row2Ref.current, {
      xPercent: 50,
      repeat: -1,
      ease: "linear",
      duration: 25,
    });
  }, []);

  return (
    <section
      className="relative py-16 px-6 overflow-hidden"
      style={{
        background: "radial-gradient(circle at center, #FFF5D1 0%, white 30%)",
      }}
    >
      {/* Title */}
      <div className="flex items-center gap-4 mb-10 container mx-auto relative z-10">
        <h2 className="text-black font-jaro text-3xl md:text-5xl font-bold">
          WHY CHOOSE US?
        </h2>
        <div className="flex-grow h-px bg-zinc-900"></div>
      </div>

      {/* Fade masks (left & right) */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-20"></div>

      {/* First row */}
      <div className="overflow-hidden relative mb-6">
        <div
          ref={row1Ref}
          className="flex gap-12 whitespace-nowrap font-jaro text-3xl md:text-5xl text-zinc-900 font-bold"
        >
          {[
            "Trust",
            "Quality",
            "Reliability",
            "Speed",
            "Support",
            "True",
            "Safe",
            "Value",
            "Care",
            "Loyalty",
            "Customisation",
          ].map((word, i) => (
            <span key={i}>{word}</span>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            "Trust",
            "Quality",
            "Reliability",
            "Speed",
            "Support",
            "True",
            "Safe",
            "Value",
            "Care",
            "Loyalty",
            "Customisation",
          ].map((word, i) => (
            <span key={`dup1-${i}`}>{word}</span>
          ))}
        </div>
      </div>

      {/* Second row */}
      <div className="overflow-hidden relative">
        <div
          ref={row2Ref}
          className="flex gap-12 whitespace-nowrap font-jaro text-3xl md:text-5xl text-zinc-900 font-bold"
        >
          {[
            "Innovation",
            "Experience",
            "Integrity",
            "Passion",
            "Teamwork",
            "Vision",
            "Quality",
            "Support",
            "Growth",
            "Excellence",
            "Care",
          ].map((word, i) => (
            <span key={i}>{word}</span>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            "Innovation",
            "Experience",
            "Integrity",
            "Passion",
            "Teamwork",
            "Vision",
            "Quality",
            "Support",
            "Growth",
            "Excellence",
            "Care",
          ].map((word, i) => (
            <span key={`dup2-${i}`}>{word}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
