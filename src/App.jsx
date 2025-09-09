import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/404";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Reviews from "./pages/Reviews";
import ProductDetails from "./components/ProductDetails";
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
        }
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
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/reviews" element={<Reviews />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
          <Footer />
        </div>
      </ReactLenis>
    </Router>
  );
}

export default App;
