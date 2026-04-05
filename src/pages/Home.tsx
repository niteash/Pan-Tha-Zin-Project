import { Link } from "react-router-dom";
import { useRef, useState, useEffect, lazy, Suspense } from "react";
import { useLanguage } from "../context/LanguageContext";
const ProductCarousel = lazy(() => import("../components/ProductCarousel"));
import WhyChooseUs from "../components/WhyChooseUs";
import ProductShowcase from "../components/ProductShowCase";
import ScrollVideoSection from "../components/HomeVideos";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X, ChevronDown } from "lucide-react";

const Map = lazy(() => import("../components/Map"));

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showMap, setShowMap] = useState(false);
  const mapSectionRef = useRef(null);
  const { t } = useLanguage();

  const handleToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        videoRef.current.muted = false;
        setIsMuted(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Autoplay prevented:", err));
    }
  }, []);

  useEffect(() => {
    if (!mapSectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowMap(true);
      },
      { rootMargin: "200px" },
    );
    observer.observe(mapSectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex flex-grow flex-col">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#191919] overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-20 mb-40">
          <h1 className="font-extrabold text-bg sm:font-extrabold mb-20 font-ital-heading text-[#2C2A29] text-7xl tracking-widest md:text-7xl lg:text-[8vw] leading-tight uppercase">
            {t("heroTitle")}
          </h1>
        </div>

        {!imageLoaded && (
          <div className="animate-text bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-[3000ms]" />
        )}

        <img
          src="https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:good,w_600/v1761811387/Home_q0a7yd"
          srcSet="
          https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:good,w_400/v1761811387/Home_q0a7yd   400w,
          https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:good,w_800/v1761811387/Home_q0a7yd   800w,
          https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:good,w_1200/v1761811387/Home_q0a7yd 1200w
        "
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
          alt="Modern Building — Pan Tha Zin"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          onLoad={() => setImageLoaded(true)}
          className={`absolute bottom-0 z-90 left-1/2 -translate-x-1/2 w-full h-[60vh] object-cover object-top transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="absolute bottom-6 w-full hidden md:flex justify-between px-10 text-white text-sm md:text-base font-semibold tracking-wide z-20">
          <p className="border-t border-white pt-2">HIGH QUALITY</p>
          <p className="border-t border-white pt-2 text-right">
            RETAIL & WHOLESALE
            <br />
            DISTRIBUTION
          </p>
        </div>
      </section>

      {/* ── Who We Are ───────────────────────────────────────────────────── */}
      <section
        className="bg-white"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, #FFF5D1 0%, #f7f7f7 60%, #ffffff 100%)",
          backgroundBlendMode: "multiply",
        }}
      >
        <section className="py-10 mt-10 container mx-auto px-6">
          <div className="flex items-center gap-4 mb-20">
            <h2 className="text-black font-ital-heading text-4xl md:text-7xl font-extrabold">
              {t("whoWeAre")}
            </h2>
            <div className="flex-grow h-px bg-zinc-900" />
          </div>

          {/* ✅ Reserve ScrollVideoSection height — it's 300vh on desktop,
            use screen height as approximation for initial layout */}
          <div style={{ minHeight: "100vh" }}>
            <ScrollVideoSection />
          </div>

          <p className="text-lg font-bold text-gray-700 leading-relaxed">
            {t("desc1")}
          </p>
          <p className="mt-4 text-lg font-bold text-gray-700 leading-relaxed">
            {t("desc2")}
          </p>
          <p className="mt-4 text-lg font-bold text-gray-700 leading-relaxed">
            {t("desc3")}
          </p>

          <button className="bg-amber-400 mt-8 hover:bg-amber-200 text-black px-6 py-3 rounded-full font-bold shadow-md uppercase transition">
            <Link to="/about" aria-label="Learn more about Pan Tha Zin">
              {t("learnMore")}
            </Link>
          </button>
        </section>
      </section>

      <Suspense
        fallback={
          <div
            style={{ minHeight: "500px" }}
            className="bg-gray-100 animate-pulse"
          />
        }
      >
        <ProductCarousel />
      </Suspense>

      <div ref={mapSectionRef}>
        {showMap ? (
          <Suspense
            fallback={
              <div
                style={{ minHeight: "450px" }}
                className="bg-gray-100 animate-pulse rounded-xl"
              />
            }
          >
            <Map />
          </Suspense>
        ) : (
          <div
            style={{ minHeight: "450px" }}
            className="bg-gray-100 rounded-xl"
          />
        )}
      </div>

      <div style={{ minHeight: "600px" }}>
        <WhyChooseUs />
      </div>

      <ProductShowcase />
    </section>
  );
}

export default Home;
