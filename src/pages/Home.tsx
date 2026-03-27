import { Play, Pause, Volume, VolumeX } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import ProductCarousel from "../components/ProductCarousel";
import Map from "../components/Map";
import WhyChooseUs from "../components/WhyChooseUs";
import ProductShowcase from "../components/ProductShowCase";

// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollVideoSection from "../components/HomeVideos";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const { t } = useLanguage();

  // Handle video play/pause toggle
  const handleToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        videoRef.current.muted = false; // unmute when playing
        setIsMuted(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Auto-play video on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Autoplay prevented:", err));
    }
  }, []);

  return (
    <section className="flex flex-grow flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#191919] overflow-hidden">
        {/* Text Container */}
        <div className="container mx-auto px-6 text-center relative z-20 mb-40">
          {/* Main Heading */}
          <h1 className="font-extrabold  text-bg sm:font-extrabold mb-20 font-ital-heading text-[#2C2A29] text-7xl tracking-widest md:text-7xl lg:text-[8vw] leading-tight uppercase">
            {t("heroTitle")}
          </h1>
        </div>

        {/* Loading Placeholder */}
        {!imageLoaded && (
          <div className="animate-text bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-[3000ms]"></div>
        )}

        {/* Building Image (fills half height) */}
        <img
          src="https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto,w_1200/v1761811387/Home_q0a7yd.svg"
          srcSet="
    https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto,w_600/v1761811387/Home_q0a7yd.svg 600w,
    https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto,w_1000/v1761811387/Home_q0a7yd.svg 1000w,
    https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto,w_1600/v1761811387/Home_q0a7yd.svg 1600w
  "
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
          alt="Modern Building"
          loading="eager"
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
          className={`absolute bottom-0 z-90 left-1/2 transform -translate-x-1/2 w-full h-[60vh] object-cover object-top transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Side Texts */}
        <div className="absolute bottom-6 w-full hidden md:flex justify-between px-10 text-[#ffffff] text-sm md:text-base font-semibold tracking-wide z-20">
          <p className="border-t border-[#ffffff] pt-2">HIGH QUALITY</p>
          <p className="border-t border-[#ffffff] pt-2 text-right">
            RETAIL & WHOLESALE
            <br />
            DISTRIBUTION
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
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
            <h2 className="text-black font-ital-heading text-4xl md:text-7xl font-extrabold sm:font-extrabold">
              {t("whoWeAre")}
            </h2>
            <div className="flex-grow  h-px bg-zinc-900"></div>
          </div>

          {/* Video */}

          <ScrollVideoSection />

          {/* Descriptions */}
          <p className="text-lg font-bold  text-gray-700 leading-relaxed">
            {t("desc1")}
          </p>
          <p className="mt-4 text-lg font-bold text-gray-700 leading-relaxed">
            {t("desc2")}
          </p>
          <p className="mt-4 text-lg font-bold text-gray-700 leading-relaxed">
            {t("desc3")}
          </p>

          <button className="bg-amber-400  mt-8 hover:bg-amber-200 text-black px-6 py-3 rounded-full font-bold shadow-md uppercase transition">
            <Link to="/about">{t("learnMore")}</Link>
          </button>

          {/* Button */}
          {/* <button className="mt-8 bg-black hover:bg-amber-400 ms-4  text-white px-6 py-3 rounded-full font-bold shadow-lg transition">
            {t("heroBtn")}
          </button> */}
        </section>
      </section>

      {/* Other Sections */}
      <ProductCarousel />
      <Map />
      <WhyChooseUs />
      <ProductShowcase />
    </section>
  );
}

export default Home;
