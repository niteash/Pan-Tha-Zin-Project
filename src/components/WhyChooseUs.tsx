import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = [row1Ref.current, row2Ref.current];

      rows.forEach((row, rowIndex) => {
        const direction = rowIndex === 0 ? -1 : 1; // left or right
        gsap.to(row, {
          xPercent: direction * 50,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            onUpdate: (self) => {
              const children = row.children;
              const rowWidth = row.scrollWidth;
              const containerWidth = row.parentElement.offsetWidth;

              for (let i = 0; i < children.length; i++) {
                const el = children[i];
                const rect = el.getBoundingClientRect();
                const center = window.innerWidth / 2;
                const distanceFromCenter = Math.abs(
                  rect.left + rect.width / 2 - center
                );
                const maxDistance = containerWidth / 2;
                el.style.opacity = 1 - distanceFromCenter / maxDistance;
              }
            },
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-16 px-6 overflow-hidden"
      style={{
        background: "radial-gradient(circle at center, #FFF5D1 0%, white 40%)",
      }}
    >
      <div className="flex items-center gap-4 mb-10 container mx-auto">
        <h2 className="text-black font-jaro text-3xl md:text-5xl font-bold">
          WHY CHOOSE US?
        </h2>
        <div className="flex-grow h-px bg-zinc-900"></div>
      </div>

      {/* First row */}
      <div
        className="flex gap-12 whitespace-nowrap font-jaro text-3xl md:text-5xl text-zinc-900 font-bold mb-4"
        ref={row1Ref}
      >
        <span>Trust</span>
        <span>Quality</span>
        <span>Reliability</span>
        <span>Speed</span>
        <span>Support</span>
        <span>True</span>
        <span>Safe</span>
        <span>Value</span>
        <span>Care</span>
        <span>Loyalty</span>
        <span>Customisation</span>
        <span>Reliability</span>
        <span>Speed</span>
        <span>Support</span>
        <span>True</span>
        <span>Safe</span>
      </div>

      {/* Second row */}
      <div
        className="flex gap-12 whitespace-nowrap font-jaro text-3xl md:text-5xl text-zinc-900 font-bold"
        ref={row2Ref}
      >
        <span>Innovation</span>
        <span>Experience</span>
        <span>Integrity</span>
        <span>Passion</span>
        <span>Teamwork</span>
        <span>Vision</span>
        <span>Quality</span>
        <span>Support</span>
        <span>Growth</span>
        <span>Excellence</span>
        <span>Care</span>
        <span>Integrity</span>
        <span>Passion</span>
        <span>Teamwork</span>
        <span>Vision</span>
        <span>Quality</span>
      </div>
    </section>
  );
}
