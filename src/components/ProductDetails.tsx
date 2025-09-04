import { useParams } from "react-router-dom";
import { products } from "../data/Products";
import ZoomImage from "./ZoomImage";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <p className="text-center py-10">Product not found</p>;

  // Related products (same category, excluding current product)
  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <section className="max-w-7xl bg-white mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Image */}

        <div className="w-full">
          <ZoomImage src={product.img} alt={product.name} />
        </div>

        {/* Right - Details */}
        <div className="space-y-5">
          <h1 className="text-3xl font-jaro md:text-4xl font-bold text-gray-900">
            {product.name}
          </h1>
          <p className="text-gray-500">Brand : {product.brand}</p>
          <p className="text-2xl font-bold font-color-purple">
            {product.price}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {product.description ||
              "This is a high-quality product with premium features. Perfect for your needs."}
          </p>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl  font-bold mb-6 font-jaro text-black">
            RELATED PRODUCTS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {related.map((r) => (
              <div key={r.id} className="hover:shadow-xl transition">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg font-jaro text-black">
                      {r.name}
                    </h3>
                    <p className="text-sm text-gray-500">Brand : {r.brand}</p>
                  </div>
                  <p className="font-bold">{r.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;
