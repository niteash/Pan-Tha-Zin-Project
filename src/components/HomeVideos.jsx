import { useRef, useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const videoData = [
  {
    src: "https://res.cloudinary.com/dcdc4hj6v/video/upload/f_auto,q_auto,w_1280/v1761812481/HomeVideo_y9jlmu.mp4",
    title: "Pan Tha Zin Ads",
    desc: "Pan Tha Zin Business Ads.",
  },
  {
    src: "https://res.cloudinary.com/dcdc4hj6v/video/upload/f_auto,q_auto,w_1280/v1774763000/Ptz_Ai_Video_02_jstmm6.webm",
    title: "Pan Tha Zin Journey",
    desc: "Pan Tha Zin Evolution.",
  },
  {
    src: "https://res.cloudinary.com/dcdc4hj6v/video/upload/f_auto,q_auto,w_1280/v1774762847/Ptz_Ai_Video_01_xild6e.webm",
    title: "Owner Journey",
    desc: "Owner Lifestory.",
  },
];

function syncVideos(refs, activeIndex, isSectionVisible) {
  refs.current.forEach((video, i) => {
    if (!video) return;
    if (i === activeIndex && isSectionVisible) {
      video.muted = false;
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
    }
  });
}

export default function ScrollVideoSection() {
  const { t } = useLanguage();
  const videoRefs = useRef([]);
  const sectionRef = useRef(null);
  const activeIndexRef = useRef(0); // ✅ stale closure fix

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const text = t("HomeVideoQuote");
  const units = text.includes(" ") ? text.split(" ") : Array.from(text);

  // ✅ Keep ref and state in sync
  const updateActiveIndex = (i) => {
    activeIndexRef.current = i;
    setActiveIndex(i);
  };

  // ─── Responsive breakpoint ────────────────────────────────────────────────
  useEffect(() => {
    const check = () => setIsTabletOrMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ─── Desktop: scroll handler ──────────────────────────────────────────────
  useEffect(() => {
    if (isTabletOrMobile) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      const triggerPoint = height * 1.4;
      const totalScroll = height * (videoData.length - 1);
      const sectionEnd = triggerPoint + totalScroll + height;

      const visible = scrollY >= triggerPoint - height && scrollY <= sectionEnd;
      setIsSectionVisible(visible);

      if (scrollY < triggerPoint) {
        setTranslateY(0);
        updateActiveIndex(0);
        setProgress(0);
        return;
      }

      const extraScroll = scrollY - triggerPoint;
      const moveProgress = Math.min(extraScroll / totalScroll, 1);
      const newTranslate = moveProgress * (videoData.length - 1) * 100;
      setTranslateY(newTranslate);

      // ✅ Only activate when video is ~100% in view (within 8% of snap point)
      const rawIndex = newTranslate / 100;
      const nearestIndex = Math.round(rawIndex);
      const distanceFromSnap = Math.abs(rawIndex - nearestIndex);
      const snappedIndex =
        distanceFromSnap < 0.08 ? nearestIndex : activeIndexRef.current;

      updateActiveIndex(Math.min(snappedIndex, videoData.length - 1));
      setProgress(Math.min(scrollY / (height * videoData.length), 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTabletOrMobile]);

  // ─── Desktop: sync playback ───────────────────────────────────────────────
  useEffect(() => {
    if (isTabletOrMobile) return;
    syncVideos(videoRefs, activeIndex, isSectionVisible);
  }, [activeIndex, isSectionVisible, isTabletOrMobile]);

  // ─── Mobile: sync playback ────────────────────────────────────────────────
  useEffect(() => {
    if (!isTabletOrMobile) return;
    syncVideos(videoRefs, currentIndex, true);
  }, [currentIndex, isTabletOrMobile]);

  // ─── Mobile: pause when section leaves viewport ───────────────────────────
  useEffect(() => {
    if (!isTabletOrMobile || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          videoRefs.current.forEach((video) => {
            if (!video) return;
            video.pause();
            video.muted = true;
          });
        } else {
          syncVideos(videoRefs, currentIndex, true);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isTabletOrMobile, currentIndex]);

  // ─── Mobile view ──────────────────────────────────────────────────────────
  if (isTabletOrMobile) {
    const handleCarouselScroll = (e) => {
      const index = Math.round(e.target.scrollLeft / e.target.clientWidth);
      setCurrentIndex(index);
    };

    return (
      <div ref={sectionRef} className="h-screen flex flex-col">
        <div className="px-6 pt-5 pb-6 mb-10">
          <p
            className="text-2xl md:text-3xl w-full max-w-2xl font-extrabold leading-relaxed text-gray-800"
            style={{ opacity: 0.85 }}
          >
            {text}
          </p>
        </div>

        <div
          onScroll={handleCarouselScroll}
          className="flex overflow-x-auto snap-x snap-mandatory flex-1 scroll-smooth no-scrollbar"
        >
          {videoData.map((item, i) => (
            <div
              key={i}
              className="min-w-full snap-center flex items-center justify-center px-4"
            >
              <div
                className="w-full h-[55vh] rounded-2xl overflow-hidden"
                style={{
                  transform: i === currentIndex ? "scale(1)" : "scale(0.92)",
                  transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={item.src}
                  muted
                  loop
                  playsInline
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>

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

  // ─── Desktop view ─────────────────────────────────────────────────────────
  return (
    <div ref={sectionRef} style={{ height: `${videoData.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex lg:flex-row">
        {/* LEFT */}
        <div className="w-1/2 flex items-center px-16">
          <p
            className="text-3xl font-extrabold leading-relaxed max-w-lg flex flex-wrap"
            style={{
              gap: text.includes(" ") ? "8px" : "2px",
              lineHeight: "1.3",
            }}
          >
            {units.map((word, i) => {
              const adjustedProgress = Math.max(progress - 0.4, 0) * 1.7;
              const wordProgress = adjustedProgress * units.length - i;
              const clamped = Math.min(Math.max(wordProgress, 0), 1);
              return (
                <span
                  key={i}
                  style={{
                    color: `rgba(0,0,0,${0.15 + clamped * 0.85})`,
                    transition: "color 0.3s cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  {word}
                </span>
              );
            })}
          </p>
        </div>

        {/* RIGHT */}
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
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={item.src}
                  loop
                  playsInline
                  muted
                  className="w-[85%] h-[70vh] rounded-xl  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
