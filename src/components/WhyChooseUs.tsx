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
      // First row scrolls left
      gsap.to(row1Ref.current, {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Second row scrolls right
      gsap.to(row2Ref.current, {
        xPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
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
      <div className="flex items-center gap-4 mb-10 container mx-auto relative z-10">
        <h2 className="text-black font-jaro text-3xl md:text-5xl font-bold">
          WHY CHOOSE US?
        </h2>
        <div className="flex-grow h-px bg-zinc-900"></div>
      </div>

      <div className="mt-15 relative z-10">
        {/* First row wrapper with fade */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-12 whitespace-nowrap font-jaro text-3xl md:text-5xl text-zinc-900 font-bold mb-4 relative"
            ref={row1Ref}
            style={{
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
            }}
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
            <span>Support</span>
            <span>True</span>
            <span>Safe</span>
            <span>Value</span>
            <span>Care</span>
          </div>
        </div>

        {/* Second row wrapper with fade */}
        <div className="relative overflow-hidden mt-6">
          <div
            className="flex gap-12 whitespace-nowrap font-jaro text-3xl md:text-5xl text-zinc-900 font-bold relative"
            ref={row2Ref}
            style={{
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
            }}
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
            <span>Passion</span>
            <span>Teamwork</span>
            <span>Vision</span>
            <span>Quality</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
