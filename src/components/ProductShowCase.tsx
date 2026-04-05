import { useLanguage } from "../context/LanguageContext";

// ✅ Cloudinary helper — adds w_600,q_auto:good to every product URL
// Products display at ~300px wide in the grid, 600px = 2x retina
// q_auto:good is more aggressive compression than q_auto (default = q_auto:eco equiv)
const optimizeUrl = (url: string) =>
  url.replace("/f_auto,q_auto/", "/f_auto,q_auto:good,w_600/");

const productImages = [
  "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764264105/IMG_20250815_155239_352_Medium_j2izzw.jpg",
  "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764264055/IMG_20250815_155211_503_Medium_stml1w.jpg",
  "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764264072/IMG_20250815_155211_612_Medium_v9pgmv.jpg",
  "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764264038/IMG_20250815_155211_438_Medium_w4kovj.jpg",
  "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764264021/IMG_20250815_155211_379_Medium_h6biue.jpg",
  "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764264089/IMG_20250815_155211_698_Medium_ifn0eo.jpg",
  "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764264141/IMG_20250815_155548_570_Medium_o1kn8q.jpg",
  "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764264123/IMG_20250815_155249_612_Medium_lhv5lj.jpg",
  "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764264377/IMG_20250815_155548_754_Medium_wyuzef.jpg",
  "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764264734/IMG_20250815_161334_136_Medium_srrwzq.jpg",
  "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764264788/IMG_20250815_161334_426_Medium_flebb2.jpg",
  "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto/v1764264713/IMG_20250815_160126_100_Medium_xkna8z.jpg",
];

function ProductShowCase() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-white py-16">
      {/* ✅ Faded background — add w_400 since it's a decorative full-bleed
          background at low opacity, full resolution is wasteful */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:low,w_400/v1764279928/faded_pkkcoj.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-23"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-7xl font-ital-heading mb-10 text-gray-900">
          {t("ProductShowcaseTitle")}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-lg font-bold">
          {t("ProductShowcaseDesc")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {productImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={optimizeUrl(img)}
                alt={`Product ${index + 1}`}
                className="w-full h-56 md:h-64 lg:h-72 object-cover hover:scale-105 transition-transform duration-300"
                // ✅ First 4 visible in viewport on load — eager, rest lazy
                loading={index < 4 ? "eager" : "lazy"}
                decoding="async"
                width="600"
                height="288"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductShowCase;
