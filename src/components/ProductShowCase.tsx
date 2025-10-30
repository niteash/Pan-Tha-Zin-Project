import { useLanguage } from "../context/LanguageContext";

function ProductShowCase() {
  const { t } = useLanguage();
  return (
    <section className="relative bg-white py-16">
      {/* Background faded image */}
      <div className="absolute inset-0 opacity-15">
        <img
          src="./images/faded.png"
          alt="Faded Background"
          className="w-full h-full object-cover opacity-23"
        />
      </div>

      {/* Showcase Content */}
      <div className="relative container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-ital-heading font-extrabold mb-10  text-gray-900">
          {t("ProductShowcaseTitle")}
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-lg font-bold ">
          {t("ProductShowcaseDesc")}
        </p>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            "-1.jpg",
            "-2.jpg",
            "-3.jpg",
            "-16.jpg",
            "-5.jpg",
            "-6.jpg",
            "-7.jpg",
            "-8.jpg",
            "-9.jpg",
            "-10.jpg",
            "-13.jpg",
            "-12.jpg",
          ].map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={`./images/${img}`}
                alt={`Product ${index + 1}`}
                className="w-full h-56 md:h-64 lg:h-72 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductShowCase;
