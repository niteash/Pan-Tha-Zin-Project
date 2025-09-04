import { useState } from "react";
import { Link } from "react-router";

function Product() {
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
      img: "./images/Website/Stocks/N&N Exterior putty.jpg",
      category: "ပတ်တီး",
    },
    {
      id: 6,
      name: "N&N Exterior putty",
      brand: "Local",
      price: "200,000 MMK",
      img: "./images/Website/Stocks/N&N Interior putty.jpg",
      category: "ပတ်တီး",
    },
    {
      id: 7,
      name: "N&N plywood",
      brand: "Local",
      price: "200,000 MMK",
      img: "./images/Website/Stocks/N&N plywood.png",
      category: "Plywood",
    },
    {
      id: 8,
      name: "plywood car",
      brand: "Local",
      price: "200,000 MMK",
      img: "./images/Website/Stocks/plywood car.png",
      category: "Plywood",
    },
    {
      id: 9,
      name: "pvc water tank",
      brand: "Local",
      price: "200,000 MMK",
      img: "./images/Website/Stocks/pvc water tank.jpg",
      category: "Water Tank",
    },
    {
      id: 10,
      name: "shower set",
      brand: "Local",
      price: "200,000 MMK",
      img: "./images/Website/Stocks/shower set.png",
      category: "ရေချိုးခန်းသုံးပစ္စည်းများ",
    },
    {
      id: 11,
      name: "Steel Water Tank",
      brand: "Local",
      price: "200,000 MMK",
      img: "./images/Website/Stocks/Steel Water Tank.jpg",
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
      q: "ပစ္စည်းတွေကို အိမ်အရောက် ပို့ဆောင်ပေးပါသလား?",
      a: "ဟုတ်ပါတယ်၊ သင့်အော်ဒါထားသည့် ပစ္စည်းတွေကို အိမ်အရောက် အဆင်ပြေပြေ ပို့ဆောင်ပေးပါတယ်။ နေရာပေါ်မူတည်ပြီး သယ်ယူပို့ဆောင်ခ အနည်းငယ် ကွာခြားနိုင်ပါတယ်နော်။",
    },
    {
      q: "ငွေပေးချေမှု နည်းလမ်းတွေ ဘယ်လိုတွေရှိပါသလဲ? (ငွေသား/ဘဏ်လွှဲ/KBZ Pay စသည်)",
      a: "ကျွန်တော်တို့ဆိုင်တွင် ငွေပေးချေမှု နည်းလမ်းများစွာ ကိုယ်ပိုင်ရွေးချယ်နိုင်ပါသည်။ ငွေသား၊ ဘဏ်လွှဲ၊ KBZ Pay, WavePay စသည့် e-wallet များကိုလည်း လက်ခံဆောင်ရွက်ပေးပါသည်။ အတိအကျ အသေးစိတ်ကို အော်ဒါတင်ချိန်တွင် သေချာစွာ ပြန်လည်အတည်ပြုပေးပါမည်။",
    },
    {
      q: "အော်ဒါတင်ပြီးနောက် ဘယ်လောက်ကြာမှ ပစ္စည်းရပါမလဲ?",
      a: "သင့်အော်ဒါရောက်တဲ့နေရာပေါ် မူတည်ပြီး ပို့ဆောင်ချိန် ကွာခြားနိုင်ပါတယ်နော်  မြို့တွင်းဆိုရင် တစ်ရက်လောက် သို့မဟုတ် ၂ ရက်အတွင်း ရနိုင်ပြီး၊ မြို့ပြင်အော်ဒါတွေကတော့ ၃ ရက်မှ ၅ ရက်ခန့် ကြာနိုင်ပါတယ်။ အော်ဒါတင်ပြီးချိန်မှာ သေချာပြီးချိန်ကြိုပေးထားပါမယ်။",
    },
    {
      q: "အရည်အသွေး အာမခံ ပေးပါသလား?",
      a: "ဟုတ်ပါတယ်။ ကျွန်တော်တို့ဆိုင်မှာ ရောင်းတဲ့ ပစ္စည်းတွေ အားလုံး အရည်အသွေး အာမခံပါပြီးသားပါ။ ပစ္စည်းအလိုက် အာမခံစာတမ်းလည်း ထည့်သွင်းပေးထားပါတယ်၊ စိတ်ချစွာ ဝယ်ယူနိုင်ပါတယ်နော် ",
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
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-jaro tracking-wide font-bold uppercase leading-snug">
            Find Your Best <br /> Products at One Place
          </h1>
          <button className="mt-6 bg-white font-jaro px-6 py-3 text-base md:text-xl rounded-lg text-black font-semibold hover:bg-white/70 transition">
            BUY NOW
          </button>
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
        <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 pb-16">
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

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition"></div>

                {/* Link to details */}
                <Link
                  to={`/product/${p.id}`}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-5 py-2 text-sm font-semibold rounded-full shadow-md opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-500"
                >
                  View Details
                </Link>
              </div>

              {/* Content */}
              <div className="p-5 grid grid-cols-2 justify-between items-start">
                {/* Left Side - Name & Brand */}
                <div className="text-left">
                  <h2 className=" text-md font-jaro sm:text-xl text-gray-900 group-hover:text-amber-600 transition">
                    {p.name}
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">{p.brand}</p>
                </div>

                {/* Right Side - Price */}
                <div className="text-right">
                  <p className="text-md  text-gray-900">{p.price}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
        {/* FAQ SECTION */}
        <section className="max-w-4xl mx-auto px-4 pb-16">
          <h2 className="text-2xl text-black font-jaro md:text-3xl font-bold text-center mb-8">
            FAQ
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
