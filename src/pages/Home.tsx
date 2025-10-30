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
          <h1 className="font-extrabold text-bg sm:font-extrabold mb-20 font-ital-heading text-[#2C2A29] text-7xl tracking-widest md:text-7xl lg:text-[8vw] leading-tight uppercase">
            {t("heroTitle")}
          </h1>
        </div>

        {/* Loading Placeholder */}
        {!imageLoaded && (
          <div className="animate-pulse absolute bottom-0 left-0 w-full h-1/2 bg-gray-200 rounded-md z-10"></div>
        )}

        {/* Building Image (fills half height) */}
        <img
          src="https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto,w_1600/v1761811387/Home_q0a7yd.svg
"
          alt="Modern Building"
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`absolute bottom-0 z-90 left-1/2 transform -translate-x-1/2 w-[100%] md:w-[100%] lg:w-[100%] h-[60vh] object-cover object-top transition-opacity duration-500 ${
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
      <section className="bg-white">
        <section
          className="py-10 mt-10 container mx-auto px-6"
          style={{
            background:
              "radial-gradient(circle at center, #FFF5D1 0%, white 60%)",
          }}
        >
          <div className="flex items-center gap-4 mb-20">
            <h2 className="text-black font-ital-heading text-4xl md:text-7xl font-extrabold sm:font-extrabold">
              {t("whoWeAre")}
            </h2>
            <div className="flex-grow  h-px bg-zinc-900"></div>
          </div>

          {/* Video */}
          <div className="relative  rounded-3xl overflow-hidden shadow-lg mb-20 w-full max-w-[600px] aspect-video mx-auto">
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/dcdc4hj6v/video/upload/f_auto,q_auto,w_1280/v1761812481/HomeVideo_y9jlmu.mp4"
              className="w-full  h-full object-cover"
              loop
              playsInline
              autoPlay
              muted={isMuted}
            />

            {/* Controls */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              {/* Mute/Unmute */}
              <button
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.muted = !isMuted;
                    setIsMuted(!isMuted);
                  }
                }}
                className="flex items-center gap-1 border border-white text-white px-3 py-2 rounded-full backdrop-blur-md bg-black/20 hover:bg-black/30 transition"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume size={20} />}
              </button>

              {/* Play/Pause */}
              <button
                onClick={handleToggle}
                className="flex items-center gap-2 border border-white text-white px-4 py-2 rounded-full backdrop-blur-md bg-black/20 hover:bg-black/30 transition"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                <span className="text-sm">
                  {isPlaying ? t("videoBtnPause") : t("videoBtnPlay")}
                </span>
              </button>
            </div>
          </div>

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
          <button className="mt-8 bg-black hover:bg-amber-400 ms-4  text-white px-6 py-3 rounded-full font-bold shadow-lg transition">
            {t("heroBtn")}
          </button>
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
