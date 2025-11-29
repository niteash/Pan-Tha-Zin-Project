import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "../context/LanguageContext";

function ReviewsHero() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const { t } = useLanguage();

  const images = [
    {
      src: "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764276947/-1_jzlycc.jpg",
      name: "Aung Min Htet",
      place: "Mandalay",
    },
    {
      src: "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764276949/-2_h0nj6r.jpg",
      name: "Ko Ko Lwin",
      place: "Yangon",
    },
    {
      src: "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764276978/-3_hk5dqt.jpg",
      name: "Myo Zaw Oo",
      place: "Naypyidaw",
    },
    {
      src: "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764276980/-4_qeuuua.jpg",
      name: "Soe Min Tun",
      place: "Taunggyi (Shan State)",
    },
    {
      src: "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764276985/-5_qccxaz.jpg",
      name: "Htet Naing Kyaw",
      place: "Mawlamyine",
    },
    {
      src: "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764276987/-6_wlhe2b.png",
      name: "Su Su Hlaing",
      place: "Yangon",
    },
    {
      src: "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764276991/-7_t8jfiu.jpg",
      name: "Ei Mon Kyaing",
      place: "Pathein",
    },
    {
      src: "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764276999/-8_hbee5m.jpg",
      name: "Thandar Hnin",
      place: "Bagan",
    },
    {
      src: "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764277003/-9_sxm3da.jpg",
      name: "Nandar Oo",
      place: "Pyin Oo Lwin",
    },
    {
      src: "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:eco,w_600,h_600,c_fit,dpr_auto/v1764277008/-10_juoav1.jpg",
      name: "Wutt Yi Htwe",
      place: "Hpa-An",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Marquee animation
      gsap.to(trackRef.current, {
        xPercent: -50,
        ease: "linear",
        repeat: -1,
        duration: 95,
      });

      // Clean entrance (slide-up, no opacity fade)
      gsap.from(headingRef.current, {
        y: 40,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(subRef.current, {
        y: 20,
        duration: 1,
        ease: "power2.out",
        delay: 0.4,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#0a0a0a] text-white px-6 py-50 overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center max-w-5xl relative mb-16 z-10">
        <h1
          ref={headingRef}
          className="
    uppercase font-bold mb-20
    text-4xl sm:text-5xl md:text-7xl lg:text-8xl
    tracking-[0.58em]
    bg-clip-text text-transparent
    bg-[url('https://images.unsplash.com/photo-1621234128753-86580d797163?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
    bg-cover bg-center
    py-4
    leading-[1.4]
    drop-shadow-[0_0_50px_rgba(255,215,0,0.9)]
    hover:drop-shadow-[0_0_80px_rgba(255,215,0,1)]
    transition-all duration-500
  "
        >
          {t("ReviewHeading")}
        </h1>

        <p
          ref={subRef}
          className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto"
        >
          {t("ReviewDesc")}
        </p>
      </div>

      {/* GSAP Track */}
      <div className="relative w-full overflow-hidden mt-16">
        <div ref={trackRef} className="flex gap-10 w-max review-track">
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="review-slide group flex-shrink-0 w-72 md:w-96 h-[60vh] rounded-xl overflow-hidden relative cursor-pointer bg-black/40"
            >
              <img
                src={img.src}
                alt={img.name}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
