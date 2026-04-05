import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useLanguage } from "./context/LanguageContext";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Error = lazy(() => import("./pages/404"));
const Product = lazy(() => import("./pages/Product"));
const Reviews = lazy(() => import("./pages/Reviews"));
const ProductDetails = lazy(() => import("./components/ProductDetails"));

// ✅ Register ONCE outside component — not on every render
gsap.registerPlugin(ScrollTrigger);

function App() {
  const { language } = useLanguage();

  useEffect(() => {
    gsap.utils.toArray(".reveal-up").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }, []);

  return (
    <Router>
      <ReactLenis
        root
        options={{
          duration: 1.4,
          smoothWheel: true,
          smoothTouch: false,
          easing: (t) => 1 - Math.pow(1 - t, 3),
        }}
      >
        <div
          className={`flex flex-col min-h-screen bg-white ${
            language === "mm" ? "font-myanmar" : "font-jaro"
          }`}
        >
          <Header />
          <main className="flex-grow">
            <Suspense
              fallback={
                <div className="min-h-[60vh] flex items-center justify-center">
                  Loading...
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </Suspense>
          </main>
          <Footer
            className="font-color-purple py-12 bg-footer"
            style={{ minHeight: "420px" }}
          />
        </div>
      </ReactLenis>
    </Router>
  );
}

export default App;
