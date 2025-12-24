import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { products } from "../data/Products";

function Product() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("All");
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const toggleFAQ = (index) => {
    setOpenFAQ((prev) => (prev === index ? null : index));
  };

  // Simulate loading (replace with real API loading if needed)
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  // Auto-generate categories based on products so no dead categories exist
  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(products.map((p) => p.category).filter(Boolean))
    );
    return ["All", ...unique];
  }, []);

  const faqs = [
    { key: "q1", q: t("q1"), a: t("a1") },
    { key: "q2", q: t("q2"), a: t("a2") },
    { key: "q3", q: t("q3"), a: t("a3") },
    { key: "q4", q: t("q4"), a: t("a4") },
  ];

  const filteredProducts = useMemo(() => {
    if (filter === "All") return products;
    return products.filter((p) => p.category === filter);
  }, [filter]);

  const ProductCard = ({ product: p }) => (
    <Link to={`/product/${p.id}`} className="block">
      <article
        className="group h-full bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        style={{ width: "300px" }} // Fixed width remains
      >
        {/* IMAGE SECTION */}
        <div className="relative w-full bg-gray-50 flex items-center justify-center overflow-hidden rounded-t-2xl">
          {/* 🔥 CATEGORY TAG ON IMAGE */}
          {p.category && (
            <span className="absolute top-3 left-3 text-[10px] px-3 py-1 rounded-full bg-black text-white uppercase tracking-wide z-10">
              {p.category}
            </span>
          )}

          <img
            src={p.img}
            className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
            alt={p.name}
            loading="lazy"
            decoding="async"
            style={p.style}
          />
        </div>

        {/* TEXT BLOCK */}
        <div className="p-4 flex flex-col">
          <h2 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
            {p.name}
          </h2>

          {p.brand && <p className="text-xs text-gray-500 mb-3">{p.brand}</p>}

          {/* CTA Appears on hover only */}
          <div className="mt-auto flex justify-start">
            <span className="text-xs font-medium text-amber-600 group-hover:text-amber-700 transition">
              {t("ViewDetails") || "View Details"}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );

  // Skeleton card matching new layout (no price)
  const SkeletonCard = () => (
    <div className="h-full">
      <div className="h-full bg-white rounded-2xl border shadow-sm overflow-hidden animate-pulse flex flex-col">
        <div className="h-64 md:h-72 bg-gray-200" />
        <div className="p-4 md:p-5 space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-3 bg-gray-200 rounded w-1/2" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70vh] md:min-h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto:good,w_1600,dpr_auto,c_fill,g_center/v1761812260/nikola-johnny-mirkovic-exrmAazn6wA-unsplash_1_bgsjm0.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 flex flex-col justify-center items-center min-h-[70vh] md:min-h-screen text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl leading-[1.4]  lg:text-7xl mb-4 font-bold uppercase">
            {t("ProductTitleOne")} <br /> {t("ProductTitleTwo")}
          </h1>
          <p className="text-sm md:text-base text-white/80 mt-10 max-w-xl mb-6">
            {t("Welcome to the Pan Tha Zin Shop") ||
              "Browse all hardware and building products easily."}
          </p>
          <Link
            to="/product/1"
            className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-white/80 transition"
          >
            {t("BUYNOW")}
          </Link>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="relative z-20 max-w-6xl mx-auto px-4 -mt-10 md:-mt-14 pb-6">
        <div className="bg-white/90 backdrop-blur border border-gray-200 rounded-2xl shadow-md px-5 py-6">
          <p className="text-lg md:text-xl font-semibold text-gray-900 mb-10">
            Choose your product
          </p>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex gap-2 flex-wrap overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              {categories.map((category) => {
                const isActive = filter === category;
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setFilter(category);
                      setIsLoading(true);
                      setTimeout(() => setIsLoading(false), 300);
                    }}
                    className={`select-none whitespace-nowrap cursor-pointer rounded-full px-5 py-2.5 text-sm border transition-all
                    ${
                      isActive
                        ? "bg-black text-white border-black shadow-md scale-[1.03]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:shadow-sm hover:scale-[1.02]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="max-w-6xl mx-auto px-4 pb-16 min-h-[300px]">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg py-10">
            {t("NoProductInCategory") ||
              "No products available in this category"}
          </p>
        ) : (
          <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold font-jaro text-gray-900">
            {t("FAQ")}
          </h2>
          <p className="mt-2 text-xs md:text-sm text-gray-500 max-w-xl mx-auto">
            {t("Know your all quaries") ||
              "Find answers to common questions about our products, ordering and support."}
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur rounded-2xl border border-gray-200 shadow-sm p-3 md:p-5 space-y-2 md:space-y-3">
          {faqs.map((item, index) => {
            const open = openFAQ === index;
            const contentId = `faq-${item.key}`;

            return (
              <div
                key={item.key}
                className={`rounded-xl border transition-all ${
                  open
                    ? "border-amber-500 bg-amber-50/40"
                    : "border-gray-200 bg-white"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-3 px-4 py-3 md:px-5 md:py-4 text-left"
                  aria-expanded={open}
                  aria-controls={contentId}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-[3px] h-5 w-5 flex items-center justify-center rounded-full border border-gray-300 text-[11px] text-gray-500">
                      Q
                    </span>
                    <span className="text-sm md:text-base font-medium text-gray-900">
                      {item.q}
                    </span>
                  </div>

                  {/* Icon */}
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs transition-all
                ${
                  open
                    ? "bg-amber-500 border-amber-500 text-white rotate-180"
                    : "bg-white border-gray-300 text-gray-700"
                }`}
                  >
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 8L10 13L15 8"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  id={contentId}
                  className={`overflow-hidden transition-all duration-300 ${
                    open ? "max-h-40 md:max-h-48" : "max-h-0"
                  }`}
                >
                  <div className="px-4 pb-4 md:px-5 md:pb-5 pt-0 md:pt-0">
                    <div className="flex items-start gap-3">
                      <span className="mt-[3px] h-5 w-5 flex items-center justify-center rounded-full border border-transparent text-[11px] text-amber-500">
                        A
                      </span>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Product;
