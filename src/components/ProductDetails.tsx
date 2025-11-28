import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../data/Products";
import { FaArrowLeft, FaPhone, FaTimes } from "react-icons/fa";
import { SiWechat } from "react-icons/si";

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
    (p) => p.category === product.category && p.id !== product.id
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
            type="button"
            onClick={() => setIsWeChatQROpen(true)}
            className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
          >
            <SiWechat className="text-xl" />
            Scan WeChat QR to contact
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
            className="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsWeChatQROpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <FaTimes />
            </button>

            <div className="flex flex-col items-center gap-3 mt-2">
              <SiWechat className="text-3xl text-green-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Scan WeChat QR
              </h3>
              <p className="text-xs text-gray-500 mb-2">
                Open WeChat, tap “+” → “Scan” and scan this code to connect.
              </p>

              <img
                src="https://the-qrcode-generator.com/wp-content/themes/tqrcg/new_widget/assets/templates-with-watermark/watermark-template-1.svg"
                alt="WeChat QR Code"
                className="w-48 h-48 object-contain border rounded-lg"
              />

              {/* WeChat ID display */}
              <p className="text-xs text-gray-600 mt-2">
                Or add ID:{" "}
                <span className="font-semibold text-gray-800">@panthazin</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;
