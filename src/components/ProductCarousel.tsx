import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const products = [
  { id: 1, image: "/images/shop1.jpg" },
  { id: 2, image: "/images/shop2.jpg" },
  { id: 3, image: "/images/shop3.jpg" },
  { id: 4, image: "/images/shop4.jpg" },
  { id: 5, image: "/images/shop5.jpg" },
];

export default function ProductCarousel() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [imageWidth, setImageWidth] = useState(300); // Default for mobile
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [xPosition, setXPosition] = useState(0);

  // Measure image and container widths dynamically
  useEffect(() => {
    const updateWidths = () => {
      const container = containerRef.current;
      const image = imageRef.current;
      if (container && image) {
        const containerWidth = container.offsetWidth;
        const imgWidth = image.offsetWidth;
        setImageWidth(imgWidth);
        const centerX =
          containerWidth / 2 - imgWidth / 2 - current * (imgWidth + 24); // 24 = mx-3 * 2 (margin)
        setXPosition(centerX);
      }
    };

    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, [current]);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16">
      <div>
        {/* Heading */}
        <div className="flex container mx-auto px-6 items-center gap-4 mb-10">
          <h2 className="text-black font-jaro text-3xl md:text-5xl font-bold">
            {t("shopsTitle")}
          </h2>
          <div className="flex-grow h-px bg-zinc-900"></div>
        </div>

        {/* Carousel */}
        <div
          ref={containerRef}
          style={{
            background:
              "radial-gradient(circle at center, #FFF5D1 0%, white 30%)",
          }}
          className="relative gradient flex items-center justify-center overflow-hidden w-full"
        >
          <motion.div
            className="flex"
            animate={{ x: xPosition }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {products.map((product, index) => {
              const isActive = index === current;

              return (
                <motion.div
                  key={product.id}
                  animate={{
                    scale: isActive ? 1 : 0.8,
                    opacity: isActive ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="mx-3 flex-shrink-0"
                >
                  <img
                    ref={index === 0 ? imageRef : null} // Only the first image needs measuring
                    src={product.image}
                    alt={`Product ${product.id}`}
                    className="w-[300px] md:w-[400px] lg:w-[450px] h-[300px] md:h-[250px] lg:h-[320px] object-cover rounded-3xl shadow"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
