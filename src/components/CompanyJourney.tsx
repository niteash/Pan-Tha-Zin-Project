import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const products = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310629/PTZ_3_zraddy.png",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764308932/PTZ_4_cjqokq.png",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310093/PTZ_5_erdz06.png",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310107/PTZ_6_umuoox.png",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310091/PTZ_7_pjogzu.png",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310105/PTZ_8_vcieqn.png",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310104/PTZ_9_voueuf.png",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310129/PTZ_10_hdxoz0.png",
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764312102/PTZ_11_Medium_vvfmcw.jpg",
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764312115/PTZ_12_Medium_zjcfrc.jpg",
  },
  {
    id: 11,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764312130/PTZ_13_Medium_veoxvr.jpg",
  },
  {
    id: 12,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764312145/PTZ_14_Medium_buckwn.jpg",
  },
  {
    id: 13,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310135/PTZ_15_sqfo2m.png",
  },
  {
    id: 14,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310164/PTZ_16_i8kkl4.png",
  },
  {
    id: 15,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310150/PTZ_17_j6ywxz.png",
  },
  {
    id: 16,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310160/PTZ_18_ophp2b.png",
  },
  {
    id: 17,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310167/PTZ_19_apvc0i.png",
  },
  {
    id: 18,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310194/PTZ_20_ohd5nm.png",
  },
  {
    id: 19,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764312159/PTZ_21_Medium_rcr291.jpg",
  },
  {
    id: 20,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764312174/PTZ_22_Medium_dkxmsd.jpg",
  },
  {
    id: 21,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310189/PTZ_23_gcveep.png",
  },
  {
    id: 22,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310204/PTZ_24_p0kpvx.png",
  },
  {
    id: 23,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764312191/PTZ_25_Medium_gmo9zg.jpg",
  },
  {
    id: 24,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310381/PTZ_27_yuvxb8.png",
  },
  {
    id: 25,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310381/PTZ_27_yuvxb8.png",
  },
  {
    id: 26,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764312206/PTZ_28_Medium_isczrr.jpg",
  },
  {
    id: 27,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310410/PTZ_29_pd74bz.png",
  },
  {
    id: 28,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310436/PTZ_30_tksows.png",
  },
  {
    id: 29,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310541/PTZ_31_xnkco3.png",
  },
  {
    id: 30,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310547/PTZ_32_eaxvc5.png",
  },
  {
    id: 31,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310572/PTZ_33_eiwesh.png",
  },
  {
    id: 32,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764312228/PTZ_34_Medium_hatxsx.jpg",
  },
  {
    id: 33,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310584/PTZ_35_uqhkda.png",
  },
  {
    id: 35,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310597/PTZ_37_fvb1eu.png",
  },
  {
    id: 36,
    image:
      "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764310625/PTZ_38_mmnctn.png",
  },
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
        <h2 className="text-black font-ital-heading text-4xl md:text-6xl mb-10 font-extrabold">
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
