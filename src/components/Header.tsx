import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../context/languageContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage(); // use context

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  // Navigation items with translation keys
  const navItems = [
    { path: "/", key: "nav.home" },
    { path: "/about", key: "nav.about" },
    { path: "/product", key: "nav.product" },
    { path: "/reviews", key: "nav.reviews" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent flex justify-center mt-8">
      <nav className="flex items-center justify-between w-[90%] md:w-4/5 lg:w-3/4 px-6 py-3 rounded-full bg-black/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300">
        {/* LOGO */}
        <Link to="/" aria-label="Homepage">
          <img
            className="w-15 h-15 md:w-18 md:h-18 object-contain"
            src="/images/logo.png"
            alt="logo"
          />
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-10 font-jaro text-[18px] font-medium tracking-wide">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? "text-amber-300"
                      : "text-white hover:text-amber-200"
                  }`
                }
              >
                {t(item.key)}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* LANGUAGE SWITCHER */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as "en" | "mm" | "zh")}
          className="ml-4 hidden lg:block px-2 py-1 rounded-md bg-black/30 text-white border border-white/20 focus:outline-none"
        >
          <option value="en">English</option>
          <option value="mm">မြန်မာ</option>
          <option value="zh">中文</option>
        </select>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="text-white text-3xl block lg:hidden hover:text-amber-300 transition-colors"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 text-white font-semibold text-2xl bg-black/70 backdrop-blur-lg transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          onClick={toggleMenu}
          aria-label="Close menu"
          className="absolute top-6 right-6 text-4xl text-white hover:text-amber-300"
        >
          ✕
        </button>

        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={toggleMenu}
            className="hover:text-amber-300 transition-colors"
          >
            {t(item.key)}
          </Link>
        ))}

        {/* Mobile Language Switcher */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as "en" | "mm" | "zh")}
          className="mt-6 px-3 py-2 rounded-md bg-black/50 text-white border border-white/30 focus:outline-none"
        >
          <option value="en">English</option>
          <option value="mm">မြန်မာ</option>
          <option value="zh">中文</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
