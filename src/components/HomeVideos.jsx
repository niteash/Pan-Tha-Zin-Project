import { useRef, useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const videoData = [
  {
    src: "https://res.cloudinary.com/dcdc4hj6v/video/upload/f_auto,q_auto,w_1280/v1761812481/HomeVideo_y9jlmu.mp4",
    type: "video",
    title: "Versace Fragrance",
    desc: "A cinematic fragrance film capturing elegance and motion.",
  },
  {
    src: "https://res.cloudinary.com/dcdc4hj6v/video/upload/f_auto,q_auto,w_1280/v1774763000/Ptz_Ai_Video_02_jstmm6.webm",
    type: "youtube",
    title: "Hermès Ski",
    desc: "A winter luxury story set in the French Alps.",
  },
  {
    src: "https://res.cloudinary.com/dcdc4hj6v/video/upload/f_auto,q_auto,w_1280/v1774762847/Ptz_Ai_Video_01_xild6e.webm",
    type: "youtube",
    title: "Dior Rouge",
    desc: "A bold visual narrative of color and identity.",
  },
];

export default function ScrollVideoSection() {
  const { t } = useLanguage();
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const text = t("HomeVideoQuote");
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsTabletOrMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const units = text.includes(" ")
    ? text.split(" ") // English → words
    : Array.from(text); // Burmese / Chinese → characters
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;

      const triggerPoint = height * 1.4;

      if (scrollY < triggerPoint) {
        setTranslateY(0);
        setActiveIndex(0);
        setProgress(0);
        return;
      }

      const extraScroll = scrollY - triggerPoint;

      // 🎯 TOTAL movement
      const totalScroll = height * (videoData.length - 1);
      const moveProgress = Math.min(extraScroll / totalScroll, 1);

      const newTranslate = moveProgress * (videoData.length - 1) * 100;
      setTranslateY(newTranslate);

      // ✅ PERFECT INDEX SYNC
      const exactIndex = newTranslate / 100;
      const index = Math.floor(exactIndex);
      setActiveIndex(index);

      // ✅ PROGRESS ONLY INSIDE CURRENT SECTION
      const globalProgress = Math.min(scrollY / (height * videoData.length), 1);
      setProgress(globalProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🎬 Play only active video
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  //for mobile

  if (isTabletOrMobile) {
    const handleScroll = (e) => {
      const scrollLeft = e.target.scrollLeft;
      const width = e.target.clientWidth;
      const index = Math.round(scrollLeft / width);
      setCurrentIndex(index);
    };

    return (
      <div className="h-screen flex flex-col">
        {/* 🔥 STATIC TEXT (TOP) */}
        <div className="px-6 pt-5 pb-6 mb-10">
          <p
            className="text-2xl md:text-3xl lg:text-4xl w-full max-w-2xl font-extrabold leading-relaxed text-gray-800"
            style={{ opacity: 0.85 }}
          >
            {text}
          </p>
        </div>

        {/* 🔥 CAROUSEL */}
        <div
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory flex-1 scroll-smooth no-scrollbar"
        >
          {videoData.map((item, i) => {
            const isActive = i === currentIndex;

            return (
              <div
                key={i}
                className="min-w-full snap-center flex items-center justify-center px-4 transition-all duration-300"
              >
                <div
                  className="w-full h-[55vh] rounded-2xl overflow-hidden"
                  style={{
                    transform: isActive ? "scale(1)" : "scale(0.92)",
                    transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
                    boxShadow: isActive
                      ? "0 10px 10px rgba(0,0,0,0.12)"
                      : "0 10px 10px rgba(0,0,0,0.06)",
                  }}
                >
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      muted
                      loop
                      playsInline
                      controls
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <iframe
                      src={item.src}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 🔥 DOTS */}
        <div className="flex justify-center gap-2 mt-4 mb-4">
          {videoData.map((_, i) => (
            <div
              key={i}
              style={{
                width: currentIndex === i ? 20 : 6,
                height: 6,
                borderRadius: 999,
                background: currentIndex === i ? "#111" : "#ccc",
                transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  //for desktop

  return (
    <div style={{ height: `${videoData.length * 100}vh` }}>
      {/* STICKY WRAPPER */}
      <div className="sticky top-0 h-screen flex flex-col lg:flex-row">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex items-center px-6 md:px-10 lg:px-16 py-10 lg:py-0">
          <div>
            <p
              className="text-3xl font-extrabold leading-relaxed max-w-lg flex flex-wrap gap-2"
              style={{
                gap: text.includes(" ") ? "8px" : "2px",
                lineHeight: "1.3",
              }}
            >
              {units.map((word, i) => {
                // 🔥 DELAY START + SLOW DOWN
                const adjustedProgress = Math.max(progress - 0.4, 0) * 1.7;

                const wordProgress = adjustedProgress * units.length - i;

                const clamped = Math.min(Math.max(wordProgress, 0), 1);

                const opacity = 0.15 + clamped * 0.85;

                return (
                  <span
                    key={i}
                    style={{
                      color: `rgba(0,0,0,${opacity})`,
                      transition: "color 0.3s cubic-bezier(0.22,1,0.36,1)",
                    }}
                  >
                    {word}
                  </span>
                );
              })}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 relative overflow-hidden flex items-center justify-center">
          <div
            className="absolute top-0 left-0 w-full"
            style={{
              transform: `translateY(-${translateY}vh)`,
              transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {videoData.map((item, i) => (
              <div
                key={i}
                className="h-screen flex items-center justify-center"
              >
                {item.type === "video" ? (
                  <video
                    ref={(el) => (videoRefs.current[i] = el)}
                    src={item.src}
                    muted
                    loop
                    playsInline
                    controls
                    className="w-[90%] md:w-[70%] lg:w-[85%] rounded-xl shadow-lg"
                  />
                ) : (
                  <iframe
                    src={item.src}
                    className="w-[85%] h-[70vh] rounded-xl shadow-lg"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
