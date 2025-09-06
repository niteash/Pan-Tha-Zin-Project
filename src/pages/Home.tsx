import { Play, Pause } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import ProductCarousel from "../components/ProductCarousel";
import Map from "../components/Map";
import WhyChooseUs from "../components/WhyChooseUs";
import ProductShowcase from "../components/ProductShowCase";

function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useLanguage();

  const handleToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="flex flex-grow  flex-col">
      {/* Hero Section */}
      <section className="bg-blue-spotlight h-full relative  min-h-screen flex overflow-hidden">
        <div className="container mt-20 mx-auto px-6 relative z-10 h-full">
          <h2 className="font-bold gradient font-jaro text-7xl mt-20 md:text-7xl leading-relaxed">
            {t("heroTitle")}
          </h2>
          <p className="font-bold gradient font-jaro text-xl mt-20 md:text-2xl leading-relaxed">
            {t("heroDescription")}
          </p>
          <button className="mt-8 bg-amber-300 hover:bg-amber-200 text-black px-6 py-3 rounded-full font-bold shadow-lg transition">
            {t("heroBtn")}
          </button>
        </div>

        {!imageLoaded && (
          <div className="animate-pulse absolute inset-0 rounded-md bg-gray-200"></div>
        )}

        <img
          src="./images/home2.png"
          alt="House"
          onLoad={() => setImageLoaded(true)}
          className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </section>

      {/* Who We Are Section */}
      <section className="bg-white">
        <section
          className="py-10 container mx-auto px-6"
          style={{
            background:
              "radial-gradient(circle at center, #FFF5D1 0%, white 60%)",
          }}
        >
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-black font-jaro text-3xl md:text-5xl font-bold">
              {t("whoWeAre")}
            </h2>
            <div className="flex-grow h-px bg-zinc-900"></div>
          </div>

          {/* Video */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg mb-8 w-full max-w-[600px] aspect-video mx-auto">
            <video
              ref={videoRef}
              src="/images/Website/shortVd/Short_video.mp4"
              className="w-full h-full object-cover"
              loop
              playsInline
            />
            <button
              onClick={handleToggle}
              className="absolute bottom-4 right-4 flex items-center gap-2 border border-white text-white px-4 py-2 rounded-full backdrop-blur-md bg-black/20 hover:bg-black/30 transition"
              aria-label={isPlaying ? t("videoBtnPause") : t("videoBtnPlay")}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              <span className="text-sm">
                {isPlaying ? t("videoBtnPause") : t("videoBtnPlay")}
              </span>
            </button>
          </div>

          {/* Descriptions */}
          <p className="text-lg text-gray-700 leading-relaxed">{t("desc1")}</p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            {t("desc2")}
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            {t("desc3")}
          </p>

          <button className="bg-amber-400 mt-8 hover:bg-amber-200 text-black px-6 py-3 rounded-full font-bold shadow-md transition">
            <Link to="/about">{t("learnMore")}</Link>
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
