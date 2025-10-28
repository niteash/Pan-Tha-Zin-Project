import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const products = [
  { id: 1, image: "/images/Website/Business/PTZ_3.png" },
  { id: 2, image: "/images/Website/Business/PTZ 4.PNG" },
  { id: 3, image: "/images/Website/Business/PTZ 5.PNG" },
  { id: 4, image: "/images/Website/Business/PTZ 6.PNG" },
  { id: 5, image: "/images/Website/Business/PTZ 7.PNG" },
  { id: 6, image: "/images/Website/Business/PTZ 8.PNG" },
  { id: 7, image: "/images/Website/Business/PTZ 9.PNG" },
  { id: 8, image: "/images/Website/Business/PTZ 10.PNG" },
  { id: 9, image: "/images/Website/Business/PTZ 11.PNG" },
  { id: 10, image: "/images/Website/Business/PTZ 12.PNG" },
  { id: 11, image: "/images/Website/Business/PTZ 13.PNG" },
  { id: 12, image: "/images/Website/Business/PTZ 14.PNG" },
  { id: 13, image: "/images/Website/Business/PTZ 15.PNG" },
  { id: 14, image: "/images/Website/Business/PTZ 16.PNG" },
  { id: 15, image: "/images/Website/Business/PTZ 17.PNG" },
  { id: 16, image: "/images/Website/Business/PTZ 18.PNG" },
  { id: 17, image: "/images/Website/Business/PTZ 19.PNG" },
  { id: 18, image: "/images/Website/Business/PTZ 20.PNG" },
  { id: 19, image: "/images/Website/Business/PTZ 21.PNG" },
  { id: 20, image: "/images/Website/Business/PTZ 22.PNG" },
  { id: 21, image: "/images/Website/Business/PTZ 23.PNG" },
  { id: 22, image: "/images/Website/Business/PTZ 24.PNG" },
  { id: 23, image: "/images/Website/Business/PTZ 25.PNG" },
  { id: 24, image: "/images/Website/Business/PTZ 26.PNG" },
  { id: 25, image: "/images/Website/Business/PTZ 27.PNG" },
  { id: 26, image: "/images/Website/Business/PTZ 28.PNG" },
  { id: 27, image: "/images/Website/Business/PTZ 29.PNG" },
  { id: 28, image: "/images/Website/Business/PTZ 30.PNG" },
  { id: 29, image: "/images/Website/Business/PTZ 31.PNG" },
  { id: 30, image: "/images/Website/Business/PTZ 32.PNG" },
  { id: 31, image: "/images/Website/Business/PTZ 33.PNG" },
  { id: 32, image: "/images/Website/Business/PTZ 34.PNG" },
  { id: 33, image: "/images/Website/Business/PTZ 35.PNG" },
  { id: 35, image: "/images/Website/Business/PTZ 37.PNG" },
  { id: 36, image: "/images/Website/Business/PTZ 38.PNG" },
];

export default function CompanyJourney() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isManual, setIsManual] = useState(false);

  // Next / Prev handlers
  const nextSlide = () => {
    setIsManual(true);
    setCurrent((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setIsManual(true);
    setCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIsManual(false);
      setCurrent((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16">
      {/* Heading */}
      <div className="flex container mx-auto px-6 items-center gap-4 mb-10">
        <h2 className="text-black font-ital text-3xl md:text-6xl mb-10 font-extrabold">
          {t("Company")}
        </h2>
        <div className="flex-grow h-px bg-zinc-900 mb-10"></div>
      </div>

      {/* Carousel */}
      <div
        className="relative flex items-center justify-center overflow-hidden w-full"
        style={{
          background:
            "radial-gradient(circle at center, #FFF5D1 0%, white 40%)",
        }}
      >
        {/* Slides */}
        <motion.div
          className="flex"
          animate={{ x: `-${current * 100}%` }}
          transition={{
            duration: isManual ? 0.25 : 0.8, // faster for manual
            ease: "easeInOut",
          }}
          style={{ width: `${products.length * 100}%` }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="flex-shrink-0 w-full flex items-center justify-center"
              initial={{ opacity: 0.3, scale: 0.9 }}
              animate={{
                opacity: index === current ? 1 : 0.5,
                scale: index === current ? 1 : 0.9,
              }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={product.image}
                alt={`Product ${product.id}`}
                className="w-[90%] md:w-[75%] lg:w-[60%] h-[350px] md:h-[450px] object-cover rounded-3xl "
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Left Button */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          whileHover={{ scale: 1.1 }}
          onClick={prevSlide}
          className="absolute left-4 md:left-10 bg-white/80 hover:bg-white text-black p-3 rounded-full shadow-lg transition"
        >
          <ChevronLeft size={28} />
        </motion.button>

        {/* Right Button */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          whileHover={{ scale: 1.1 }}
          onClick={nextSlide}
          className="absolute right-4 md:right-10 bg-white/80 hover:bg-white text-black p-3 rounded-full shadow-lg transition"
        >
          <ChevronRight size={28} />
        </motion.button>
      </div>
    </section>
  );
}
