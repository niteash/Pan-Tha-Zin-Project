import { useState } from "react";
import { Smile, Star } from "lucide-react";

function ReviewsHero() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    { src: "-1.jpg", name: "Aung Min Htet", place: "Mandalay" },
    { src: "-2.jpg", name: "Ko Ko Lwin", place: "Yangon" },
    { src: "-3.jpg", name: "Myo Zaw Oo", place: "Naypyidaw" },
    { src: "-4.jpg", name: "Soe Min Tun", place: "Taunggyi (Shan State)" },
    { src: "-5.jpg", name: "Htet Naing Kyaw", place: "Mawlamyine" },
    { src: "-6.png", name: "Su Su Hlaing", place: "Yangon" },
    {
      src: "-7.jpg",
      name: "Ei Mon Kyaing",
      place: "Pathein (Ayeyarwady Region)",
    },
    { src: "-8.jpg", name: "Thandar Hnin", place: "Bagan (Nyaung-U)" },
    { src: "-9.jpg", name: "Nandar Oo", place: "Pyin Oo Lwin" },
    { src: "-10.jpg", name: "Wutt Yi Htwe", place: "Hpa-An (Kayin State)" },
  ];

  return (
    <section className="relative min-h-screen   flex flex-col justify-center items-center bg-[#0a0a0a] text-white overflow-hidden px-4 sm:px-6 lg:px-12">
      {/* Background text */}
      <h1
        className="absolute inset-0 flex items-center justify-center text-center 
  text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] 
  font-extrabold text-white/5 leading-tight select-none pointer-events-none z-0"
      >
        What they say?
      </h1>

      {/* Review Images Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl w-full relative z-10 mt-50"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden transition-all duration-700 ease-out cursor-pointer group rounded-xl"
            onMouseEnter={() => setHoveredIndex(i)}
          >
            <img
              src={`/images/Website/Reviews/${img.src}`}
              alt={`${img.name} from ${img.place}`}
              className={`w-full h-64 sm:h-72 md:h-80 object-cover transition-all duration-700 ease-out rounded-xl
                ${
                  hoveredIndex === i
                    ? "scale-110 opacity-100 z-20 shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                    : hoveredIndex !== null
                    ? "opacity-40 scale-75 blur-[2px] rotate-1"
                    : "opacity-100 scale-100"
                }`}
            />

            {/* Caption */}
            {hoveredIndex === i && (
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white transition-all duration-500">
                <h3 className="text-base sm:text-lg font-semibold">
                  {img.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">{img.place}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="flex flex-col mb-10 sm:flex-row justify-center items-center gap-10 sm:gap-20 mt-16 text-center relative z-10">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">5,000+</h2>
          <div className="mt-2 w-12 h-1 bg-yellow-400 mx-auto rounded"></div>
          <p className="text-gray-400 mt-3 text-base">Happy Clients</p>
        </div>
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">1,200+</h2>
          <div className="mt-2 w-12 h-1 bg-purple-400 mx-auto rounded"></div>
          <p className="text-gray-400 mt-3 text-base">Reviews Collected</p>
        </div>
      </div>
    </section>
  );
}

export default ReviewsHero;
