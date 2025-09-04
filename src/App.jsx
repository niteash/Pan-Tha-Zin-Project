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

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
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
    </Router>
  );
}

export default App;
