import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Error() {
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white px-6 relative overflow-hidden">
      {/* Soft radial glow behind text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-[radial-gradient(circle,rgba(255,215,0,0.25)_0%,rgba(0,0,0,0)_65%)]" />
      </div>

      {/* 404 Heading */}
      <div className="relative z-10 text-center space-y-6 max-w-3xl">
        <h1
          ref={headingRef}
          className="
            uppercase font-bold
            text-6xl sm:text-7xl md:text-8xl lg:text-[7vw]
            tracking-[0.25em]
            leading-[1.3] py-4
            bg-clip-text text-transparent
            bg-[url('https://images.unsplash.com/photo-1621234128753-86580d797163?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
            bg-cover bg-center bg-no-repeat
            drop-shadow-[0_0_50px_rgba(255,215,0,0.9)]
    hover:drop-shadow-[0_0_80px_rgba(255,215,0,1)]
          "
          style={{
            backgroundSize: "200% auto",
            backgroundPositionX: "0%",
          }}
        >
          4 0 4
        </h1>

        {/* Subtitle + button */}
        <div ref={subRef} className="space-y-6">
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            {t("error")}
          </p>

          <p className="text-gray-400 text-xs sm:text-sm">
            The page you are looking for doesn’t exist or has been moved.
          </p>

          <div className="flex justify-center pt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-yellow-400/60 bg-yellow-400/10 px-6 py-3 text-sm sm:text-base font-semibold text-yellow-300 hover:bg-yellow-400/20 hover:border-yellow-300 transition-all duration-300 shadow-[0_0_18px_rgba(255,215,0,0.4)]"
            >
              ⬅ Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom subtle label */}
      <div className="absolute bottom-6 text-[10px] sm:text-xs text-gray-500 tracking-[0.25em] uppercase">
        Page Not Found
      </div>
    </section>
  );
}

export default Error;
