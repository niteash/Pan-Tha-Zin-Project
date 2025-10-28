import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLanguage } from "../context/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    // Row 1 → move left
    gsap.to(row1Ref.current, {
      xPercent: -30,
      repeat: -1,
      ease: "linear",
      duration: 20,
    });

    // Row 2 → move right
    gsap.to(row2Ref.current, {
      xPercent: 30,
      repeat: -1,
      ease: "linear",
      duration: 20,
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
        <h2 className="text-black font-ital mb-10 text-5xl md:text-7xl font-extrabold">
          {t("whyChooseUsTitle")}
        </h2>
        <div className="flex-grow h-px mb-10 bg-zinc-900"></div>
      </div>

      <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-20"></div>
      <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-20"></div>

      {/* First row */}
      <div className="overflow-hidden relative mb-6 p-6">
        <div
          ref={row1Ref}
          className="flex gap-12 whitespace-nowrap font-ital text-4xl md:text-6xl text-zinc-900 font-extrabold"
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
      <div className="overflow-hidden  relative mb-6 p-6">
        <div
          ref={row2Ref}
          className="flex gap-12 whitespace-nowrap font-ital text-4xl md:text-6xl text-zinc-900 font-extrabold"
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
