import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../data/Products";
import { FaArrowLeft, FaPhone, FaTimes } from "react-icons/fa";
import { SiViber, SiWechat } from "react-icons/si";

import { FaWhatsapp, FaTelegramPlane, FaGlobe } from "react-icons/fa";

const phoneNumbers = [
  "09750777260",
  "09750545775",
  "09750545778",
  "09787979377",
  "09256647406",
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isImageLightboxOpen, setIsImageLightboxOpen] = useState(false);
  const [isWeChatQROpen, setIsWeChatQROpen] = useState(false);

  const qrOptions = [
    {
      id: "1",
      name: "WeChat Muse Shop 3",
      color: "green",
      icon: SiWechat,
      qr: "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto,w_600/v1768040570/WeChat_Muse_Shop_3_xgzqqp.jpg",
      label: "Muse Shop 3",
    },
    {
      id: "2",
      name: "WeChat Muse Shop 1",
      color: "green",
      icon: SiWechat,
      qr: "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto,w_600/v1768040568/WeChat_Muse_Shop_1_rdo667.jpg",
      label: "Muse Shop 1",
    },
    {
      id: "3",
      name: "WeChat MDY Shop",
      color: "green",
      icon: SiWechat,
      qr: "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto,w_600/v1768040562/WeChat_MDY_shop_ilw2bq.jpg",
      label: "MDY Shop",
    },
    {
      id: "4",
      name: "Viber",
      color: "amber",
      icon: SiViber,
      qr: "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto,w_600/v1768040558/Viber_09750777260_po4yoy.jpg",
      label: "+95 09750777260",
    },
    {
      id: "5",
      name: "Viber",
      color: "amber",
      icon: SiViber,
      qr: "https://res.cloudinary.com/dcdc4hj6v/image/upload/f_auto,q_auto,w_600/v1768040022/Viber_09750545778_kcbg1t.jpg",
      label: "09750545778",
    },
  ];

  const [selectedQR, setSelectedQR] = useState(qrOptions[0]);

  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return (
      <section className="max-w-5xl mx-auto px-4 pt-32 pb-16 text-center">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex gap-2 items-center text-gray-700 hover:text-black transition"
        >
          <FaArrowLeft className="text-lg" />
          Back
        </button>
        <p className="py-10 text-gray-600 text-xl font-semibold">
          🚫 Product Not Found
        </p>
      </section>
    );
  }

  const rating = product.rating || 4.6;
  const reviewsCount = product.reviewsCount || 18;

  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id,
  );

  return (
    <section className="min-h-screen mt-20 bg-gray-50 pt-28 pb-24">
      {/* BACK + HEADER */}
      <div className="max-w-7xl mx-auto px-4 mb-4 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="p-3 bg-white border border-gray-200 rounded-full shadow hover:shadow-md transition"
        >
          <FaArrowLeft className="text-xl text-gray-800" />
        </button>
        <h1 className="text-2xl font-semibold text-black font-jaro">
          Product Details
        </h1>
      </div>

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 mb-8 text-sm text-gray-500">
        <Link to="/" className="hover:underline hover:text-black">
          Home
        </Link>{" "}
        /{" "}
        <Link to="/product" className="hover:underline hover:text-black">
          Products
        </Link>{" "}
        / <span className="text-gray-800 font-medium">{product.name}</span>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* IMAGE */}
        <div
          className="rounded-2xl bg-white border shadow-sm p-6 flex items-center justify-center cursor-zoom-in"
          onClick={() => setIsImageLightboxOpen(true)}
        >
          <img
            src={product.img}
            alt={product.name}
            loading="lazy"
            style={(product as any).style || {}}
            className="max-h-full object-contain hover:scale-105 transition"
          />
        </div>

        {/* DETAILS */}
        <div className="rounded-2xl bg-white border shadow-sm p-8 space-y-5">
          {/* Name */}
          <h2 className="text-3xl font-bold font-jaro text-gray-900">
            {product.name}
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-lg ${
                  i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
            <span className="text-gray-700 text-sm">
              {rating} • {reviewsCount} reviews
            </span>
          </div>

          {/* Brand */}
          <p className="text-gray-600">
            <span className="font-semibold">Brand: </span> {product.brand}
          </p>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">
            {product.description ||
              "Premium quality item available for wholesale purchase."}
          </p>

          {/* CALL SECTION */}
          <div className="mt-4 pt-4 border-t space-y-3">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              Direct Call Inquiry
            </h3>
            <p className="text-gray-500 text-sm">
              Contact any available number below:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {phoneNumbers.map((num) => (
                <a
                  key={num}
                  href={`tel:${num}`}
                  className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md hover:bg-amber-100 transition text-gray-800 font-medium"
                >
                  <FaPhone className="text-amber-600 rotate-90" />
                  {num}
                </a>
              ))}
            </div>
          </div>

          {/* WECHAT QR BUTTON */}
          <button
            onClick={() => setIsWeChatQROpen(true)}
            className="mt-4 w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:opacity-90 text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2"
          >
            <SiWechat className="text-xl" />
            Connect via QR Codes
          </button>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      {related.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 mt-16">
          <h2 className="text-xl font-bold font-jaro text-black mb-4">
            Related Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {related.map((r) => (
              <div key={r.id} className="group">
                <Link
                  to={`/product/${r.id}`}
                  className="bg-white border rounded-xl shadow-sm hover:shadow-xl transition block overflow-hidden"
                >
                  {/* Image Section (Half Height / Centered) */}
                  <div className="h-52 flex justify-center items-center border-b overflow-hidden">
                    <img
                      src={r.img}
                      alt={r.name}
                      loading="lazy"
                      style={(r as any).style || {}}
                      className="h-full w-auto object-contain transition duration-300 group-hover:scale-110"
                    />
                  </div>
                </Link>

                {/* Content Outside the Image Card */}
                <div className="mt-3 px-1">
                  <h3 className="text-lg font-jaro text-gray-900 group-hover:text-amber-600 transition">
                    {r.name}
                  </h3>
                  <p className="text-sm text-gray-500">{r.brand}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PRODUCT IMAGE LIGHTBOX */}
      {isImageLightboxOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setIsImageLightboxOpen(false)}
        >
          <button
            onClick={() => setIsImageLightboxOpen(false)}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            <FaTimes />
          </button>
          <img
            src={product.img}
            loading="lazy"
            className="max-h-[80vh] rounded-lg shadow-xl bg-black"
            alt={product.name}
          />
        </div>
      )}

      {/* WECHAT QR LIGHTBOX */}
      {isWeChatQROpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
          onClick={() => setIsWeChatQROpen(false)}
        >
          <div
            className="bg-white rounded-3xl p-6 max-w-3xl w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setIsWeChatQROpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <FaTimes size={18} />
            </button>

            {/* Header */}
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
              Connect With Us
            </h3>
            <p className="text-center text-sm text-gray-500 mb-6">
              Scan any QR code below to contact our business instantly
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* LEFT – QR OPTIONS */}
              <div className="space-y-3">
                {qrOptions.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedQR(item)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl border transition
                ${
                  selectedQR.id === item.id
                    ? "bg-gray-100 border-gray-400"
                    : "hover:bg-gray-50"
                }
              `}
                  >
                    <item.icon className={`text-${item.color}-600 text-xl`} />
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>

              {/* RIGHT – QR DISPLAY */}
              <div className="md:col-span-2 flex flex-col items-center justify-center">
                <img
                  src={selectedQR.qr}
                  alt={selectedQR.name}
                  loading="lazy"
                  className="w-56 h-56 border rounded-xl shadow-sm object-contain"
                />
                <p className="mt-3 text-sm text-gray-600">{selectedQR.name}</p>
                <p className="text-xs font-semibold text-gray-800">
                  {selectedQR.label}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;
