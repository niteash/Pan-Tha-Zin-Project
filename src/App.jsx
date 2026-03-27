import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Error = lazy(() => import("./pages/404"));
import Header from "./components/Header";
import Footer from "./components/Footer";
const Product = lazy(() => import("./pages/Product"));
const Reviews = lazy(() => import("./pages/Reviews"));
const ProductDetails = lazy(() => import("./components/ProductDetails"));
import { useLanguage } from "./context/LanguageContext";
import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { language } = useLanguage();

  useEffect(() => {
    // Reveal-up animation for elements with .reveal-up class
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
      <ReactLenis root>
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
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/product" element={<Product />}></Route>
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/reviews" element={<Reviews />}></Route>
                <Route path="*" element={<Error />}></Route>
              </Routes>
            </Suspense>
          </main>
          <Footer className="font-color-purple py-12 bg-footer min-h-[300px] flex flex-col justify-center" />
        </div>
      </ReactLenis>
    </Router>
  );
}

export default App;
