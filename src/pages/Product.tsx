import { useState } from "react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";

function Product() {
  const { t } = useLanguage();

  const [filter, setFilter] = useState("All");
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (i) => {
    setOpenFAQ(openFAQ === i ? null : i);
  };

  const products = [
    {
      id: 1,
      name: "Boda ေဖာက်စက်နှင့်ဖြတ်စက်များ",
      brand: "Toshiba",
      price: "600,000 MMK",
      img: "./images/Website/Stocks/Boda.jpg",
      category: "Electronics",
    },
    {
      id: 2,
      name: "Coil",
      brand: "Sony",
      price: "450,000 MMK",
      img: "./images/Website/Stocks/Coil.png",
      category: "သံချောင်း",
    },
    {
      id: 3,
      name: "Dong cheng စက်ပစ္စည်းများ",
      brand: "Local",
      price: "200,000 MMK",
      img: "./images/Website/Stocks/Dongcheng1.jpg",
      category: "ဖောက်စက်များ",
    },
    {
      id: 4,
      name: "Dong cheng စက်ပစ္စည်းများ",
      brand: "Local",
      price: "200,000 MMK",
      img: "./images/Website/Stocks/Dong2.jpg",
      category: "ဖောက်စက်များ",
    },
    {
      id: 5,
      name: "N&N Exterior putty",
      brand: "Local",
      price: "200,000 MMK",
      img: "./images/Website/Stocks/N&N_Exterior_putty.jpg",
      category: "ပတ်တီး",
    },
    {
      id: 6,
      name: "N&N Exterior putty",
      brand: "Local",
      price: "200,000 MMK",
      img: "./images/Website/Stocks/N&N_Interior_putty.jpg",
      category: "ပတ်တီး",
    },
    {
      id: 7,
      name: "N&N plywood",
      brand: "Local",
      price: "200,000 MMK",
      img: "./images/Website/Stocks/N&N_plywood.png",
      category: "Plywood",
    },
    {
      id: 8,
      name: "plywood car",
      brand: "Local",
      price: "200,000 MMK",
      img: "./images/Website/Stocks/plywood_car.png",
      category: "Plywood",
    },
    {
      id: 9,
      name: "pvc water tank",
      brand: "Local",
      price: "200,000 MMK",
      img: "./images/Website/Stocks/pvc_water_tank.jpg",
      category: "Water Tank",
    },
    {
      id: 10,
      name: "shower set",
      brand: "Local",
      price: "200,000 MMK",
      img: "./images/Website/Stocks/shower_set.png",
      category: "ရေချိုးခန်းသုံးပစ္စည်းများ",
    },
    {
      id: 11,
      name: "Steel Water Tank",
      brand: "Local",
      price: "200,000 MMK",
      img: "./images/Website/Stocks/Steel_Water_Tank.jpg",
      category: "Steel Water Tank",
    },
    {
      id: 12,
      name: "ဖောက်စက်များ",
      brand: "Local",
      price: "200,000 MMK",
      img: "./images/Website/Stocks/ဖောက်စက်များ.png",
      category: "ဖောက်စက်များ",
    },
    {
      id: 13,
      name: "ရေချိုးခန်းသုံးပစ္စည်းများ",
      brand: "Local",
      price: "200,000 MMK",
      img: "./images/Website/Stocks/ရေချိုးခန်းသုံးပစ္စည်းများ.png",
      category: "ရေချိုးခန်းသုံးပစ္စည်းများ",
    },
    {
      id: 14,
      name: "သံချောင်း",
      brand: "Local",
      price: "200,000 MMK",
      img: "./images/Website/Stocks/သံချောင်း.png",
      category: "သံချောင်း",
    },
    {
      id: 15,
      name: "သွပ်စက်",
      brand: "Local",
      price: "200,000 MMK",
      img: "./images/Website/Stocks/သွပ်စက်.png",
      category: "သွပ်စက်",
    },
    {
      id: 16,
      name: "သွပ်စက်လိုင်းများ",
      brand: "Local",
      price: "200,000 MMK",
      img: "./images/Website/Stocks/သွပ်စက်လိုင်းများ.png",
      category: "သွပ်စက်",
    },
    {
      id: 17,
      name: "သွပ်လိတ်ခွေများ",
      brand: "Local",
      price: "200,000 MMK",
      img: "./images/Website/Stocks/သွပ်လိတ်ခွေများ.png",
      category: "သွပ်စက်",
    },
    {
      id: 18,
      name: "အထပ်သားများ",
      brand: "Local",
      price: "200,000 MMK",
      img: "./images/Website/Stocks/အထပ်သားများ.png",
      category: "သွပ်စက်",
    },
  ];

  const faqs = [
    {
      q: t("q1"),
      a: t("a1"),
    },
    {
      q: t("q2"),
      a: t("a2"),
    },
    {
      q: t("q3"),
      a: t("a3"),
    },
    {
      q: t("q4"),
      a: t("a4"),
    },
  ];

  const filteredProducts =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70vh] md:min-h-screen w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: "url('./images/productHero.png')" }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-black/80 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center min-h-[70vh] md:min-h-screen text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-10 font-jaro tracking-wide font-bold uppercase leading-snug">
            {t("ProductTitleOne")} <br /> {t("ProductTitleTwo")}
          </h1>
          <Link
            to="/product/1"
            className="mt-6 bg-white font-jaro px-6 py-3 text-base md:text-xl rounded-lg text-black font-semibold hover:bg-white/70 transition"
          >
            {t("BUYNOW")}
          </Link>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-white">
        {/* FILTER */}
        <section className="max-w-6xl mx-auto px-4 py-6 md:py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex gap-3 flex-wrap md:flex-nowrap overflow-x-auto pb-2">
              {[
                "All",
                "Electronics",
                "Media",
                "သတ္တုဆိုင်ပစ္စည်းများ",
                "ပတ်တီး",
                "Plywood",
                "Water Tank",
                "ရေချိုးခန်းသုံးပစ္စည်းများ",
                "Steel Water Tank",
                "ဖောက်စက်များ",
                "သံချောင်း",
                "သွပ်စက်",
              ].map((x) => (
                <button
                  key={x}
                  onClick={() => setFilter(x)}
                  aria-pressed={filter === x}
                  className={`px-4 py-2 border rounded-lg text-sm sm:text-base flex-shrink-0 ${
                    filter === x
                      ? "bg-black text-white"
                      : "bg-white hover:bg-gray-100 text-black"
                  } transition`}
                >
                  {x}
                </button>
              ))}
            </div>
          </div>
        </section>
        {/* PRODUCT GRID */}
        <section className="max-w-6xl mx-auto px-4 pb-16">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500 text-lg font-medium py-10">
              No product is listed in this category!
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="group border relative overflow-hidden bg-white transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Image with overlay */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition"></div>
                    <Link
                      to={`/product/${p.id}`}
                      className="absolute text-center bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-5 py-2 text-sm font-semibold rounded-full shadow-md opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-500"
                    >
                      View Details
                    </Link>
                  </div>

                  {/* Content */}
                  <div className="p-5 grid grid-cols-2 justify-between items-start">
                    <div className="text-left">
                      <h2 className="text-md font-jaro sm:text-xl text-gray-900 group-hover:text-amber-600 transition">
                        {p.name}
                      </h2>
                      <p className="text-gray-400 text-sm mt-1">{p.brand}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-md text-gray-900">{p.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        {/* FAQ SECTION */}
        <section className="max-w-4xl mx-auto px-4 pb-16">
          <h2 className="text-2xl text-black font-jaro md:text-3xl font-bold text-center mb-8">
            {t("FAQ")}
          </h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="border-b">
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between items-center px-4 py-3 font-medium text-left"
                >
                  <span className="text-black">{item.q}</span>
                  <span className="text-black text-lg">
                    {openFAQ === i ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`px-4 overflow-hidden transition-all duration-300 ${
                    openFAQ === i ? "max-h-40 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

export default Product;
