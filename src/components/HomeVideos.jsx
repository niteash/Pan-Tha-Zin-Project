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

// ─── Sync helper ──────────────────────────────────────────────────────────────
function syncVideos(refs, activeIndex, isSectionVisible) {
  refs.current.forEach((refObj, i) => {
    const video = refObj?.current;
    if (!video || typeof video.pause !== "function") return;

    if (i === activeIndex && isSectionVisible) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
    video.muted = true;
  });
}

// ─── Desktop VideoCard ────────────────────────────────────────────────────────
function VideoCard({ src, isActive, videoRef }) {
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, [videoRef]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTimeUpdate = () =>
      setProgress(video.duration ? video.currentTime / video.duration : 0);
    const onLoaded = () => setDuration(video.duration);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoaded);
    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoaded);
    };
  }, [videoRef]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = muted;
  }, [muted, videoRef]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.paused ? video.play().catch(() => {}) : video.pause();
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    video.currentTime = ((e.clientX - rect.left) / rect.width) * video.duration;
  };

  const fmt = (s) => {
    if (!s || isNaN(s)) return "0:00";
    return `${Math.floor(s / 60)}:${Math.floor(s % 60)
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="relative w-[380px] h-[520px] rounded-2xl overflow-hidden shadow-2xl group">
      <video
        ref={(el) => {
          videoRef.current = el;
        }}
        src={src}
        loop
        playsInline
        muted
        className="w-full h-full object-cover"
      />

      {/* Controls — hover on desktop, always visible on mobile */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-10 bg-gradient-to-t from-black/70 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
        {/* Progress bar */}
        <div
          className="w-full h-1.5 bg-white/30 rounded-full mb-3 cursor-pointer"
          onClick={handleSeek}
        >
          <div
            className="h-full bg-white rounded-full transition-all duration-100"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="text-white hover:text-white/80 transition"
            >
              {playing ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            <span className="text-white text-xs font-medium tabular-nums">
              {fmt(progress * duration)} / {fmt(duration)}
            </span>
          </div>

          <button
            onClick={() => setMuted((m) => !m)}
            className="text-white hover:text-white/80 transition"
          >
            {muted ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97V10.18l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18l1.9 1.9L21 18.63l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile controls ──────────────────────────────────────────────────────────
function MobileControls({ videoRef }) {
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onTime = () =>
      setProgress(video.duration ? video.currentTime / video.duration : 0);
    const onMeta = () => setDuration(video.duration);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("timeupdate", onTime);
    video.addEventListener("loadedmetadata", onMeta);
    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("timeupdate", onTime);
      video.removeEventListener("loadedmetadata", onMeta);
    };
  }, [videoRef]);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted, videoRef]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.paused ? v.play().catch(() => {}) : v.pause();
  };

  const handleSeek = (e) => {
    const v = videoRef.current;
    if (!v) return;
    const rect = e.currentTarget.getBoundingClientRect();
    v.currentTime = ((e.clientX - rect.left) / rect.width) * v.duration;
  };

  const fmt = (s) => {
    if (!s || isNaN(s)) return "0:00";
    return `${Math.floor(s / 60)}:${Math.floor(s % 60)
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 pt-8 bg-gradient-to-t from-black/60 to-transparent">
      <div
        className="w-full h-1 bg-white/30 rounded-full mb-2 cursor-pointer"
        onClick={handleSeek}
      >
        <div
          className="h-full bg-white rounded-full"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={togglePlay} className="text-white">
            {playing ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
          <span className="text-white text-xs tabular-nums">
            {fmt(progress * duration)} / {fmt(duration)}
          </span>
        </div>
        <button onClick={() => setMuted((m) => !m)} className="text-white">
          {muted ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97V10.18l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18l1.9 1.9L21 18.63l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function ScrollVideoSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const activeIndexRef = useRef(0);

  // ✅ One unified ref array — { current: null } objects — used everywhere
  const allVideoRefs = useRef(videoData.map(() => ({ current: null })));

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const text = t("HomeVideoQuote");
  const units = text.includes(" ") ? text.split(" ") : Array.from(text);

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
    syncVideos(allVideoRefs, activeIndex, isSectionVisible);
  }, [activeIndex, isSectionVisible, isTabletOrMobile]);

  // ─── Mobile: sync playback ────────────────────────────────────────────────
  useEffect(() => {
    if (!isTabletOrMobile) return;
    syncVideos(allVideoRefs, currentIndex, true);
  }, [currentIndex, isTabletOrMobile]);

  // ─── Mobile: pause when section leaves viewport ───────────────────────────
  useEffect(() => {
    if (!isTabletOrMobile || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          allVideoRefs.current.forEach((refObj) => {
            const video = refObj?.current;
            if (!video) return;
            video.pause();
            video.muted = true;
          });
        } else {
          syncVideos(allVideoRefs, currentIndex, true);
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
                className="relative w-full h-[55vh] rounded-2xl overflow-hidden group"
                style={{
                  transform: i === currentIndex ? "scale(1)" : "scale(0.92)",
                  transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
                  boxShadow:
                    i === currentIndex
                      ? "0 10px 20px rgba(0,0,0,0.2)"
                      : "0 4px 10px rgba(0,0,0,0.08)",
                }}
              >
                <video
                  ref={(el) => {
                    allVideoRefs.current[i].current = el;
                  }}
                  src={item.src}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                {/* ✅ Pass the stable ref object, not the raw element */}
                <MobileControls videoRef={allVideoRefs.current[i]} />
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
                <VideoCard
                  src={item.src}
                  isActive={i === activeIndex && isSectionVisible}
                  videoRef={allVideoRefs.current[i]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
