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
        duration: 95,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#0a0a0a] text-white px-6 py-50 overflow-hidden"
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
              className="review-slide group  flex-shrink-0 w-96 h-200 rounded-xl overflow-hidden relative cursor-pointer"
            >
              {/* Image */}
              <img
                src={`/images/Website/Reviews/${img.src}`}
                alt={img.name}
                className="w-full h-full rounded object-contain object-center transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay with Text */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-lg font-semibold truncate">{img.name}</h3>
                <p className="text-sm text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis">
                  {img.place}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsHero;
