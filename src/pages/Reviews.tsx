import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "../context/LanguageContext";

function ReviewsHero() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const { t } = useLanguage();

  const images = [
    { src: "-1.jpg", name: "Aung Min Htet", place: "Mandalay" },
    { src: "-2.jpg", name: "Ko Ko Lwin", place: "Yangon" },
    { src: "-3.jpg", name: "Myo Zaw Oo", place: "Naypyidaw" },
    { src: "-4.jpg", name: "Soe Min Tun", place: "Taunggyi (Shan State)" },
    { src: "-5.jpg", name: "Htet Naing Kyaw", place: "Mawlamyine" },
    { src: "-6.png", name: "Su Su Hlaing", place: "Yangon" },
    { src: "-7.jpg", name: "Ei Mon Kyaing", place: "Pathein" },
    { src: "-8.jpg", name: "Thandar Hnin", place: "Bagan" },
    { src: "-9.jpg", name: "Nandar Oo", place: "Pyin Oo Lwin" },
    { src: "-10.jpg", name: "Wutt Yi Htwe", place: "Hpa-An" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite marquee effect
      gsap.to(trackRef.current, {
        xPercent: -50,
        ease: "linear",
        repeat: -1,
        duration: 40,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#0a0a0a] text-white px-6 py-16 overflow-hidden"
    >
      {/* Heading Section */}
      <div className="text-center max-w-3xl relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          {t("ReviewHeading")}
        </h1>
        <p className="text-gray-400 text-base sm:text-lg">{t("ReviewDesc")}</p>
      </div>

      {/* Image Track with GSAP */}
      <div className="relative w-full overflow-hidden mt-16">
        <div ref={trackRef} className="flex gap-6 w-max review-track">
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="review-slide group flex-shrink-0 w-64 h-72 rounded-xl overflow-hidden relative cursor-pointer"
            >
              <img
                src={`/images/Website/Reviews/${img.src}`}
                alt={img.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-lg font-semibold">{img.name}</h3>
                <p className="text-sm text-gray-300">{img.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsHero;
