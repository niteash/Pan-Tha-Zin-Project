import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { ChevronDown } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage(); // use context

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  const navItems = [
    { path: "/", key: "nav.home" },
    { path: "/about", key: "nav.about" },
    { path: "/product", key: "nav.product" },
    { path: "/reviews", key: "nav.reviews" },
  ];

  const langs = [
    { code: "en", label: "ENG" },
    { code: "mm", label: "MM" },
    { code: "zh", label: "中文" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-100 bg-transparent flex justify-center mt-8">
      <nav className="flex items-center justify-between w-[90%] md:w-2/3 lg:w-3/4 rounded-full bg-black/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300">
        {/* LOGO */}
        <Link to="/" aria-label="Homepage">
          <img
            className="w-15 h-15 md:w-23 md:h-23 object-cover"
            src="/images/logo.png"
            alt="logo"
          />
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-10 font-ital text-[2.2vh] font-extrabold tracking-wide">
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

        {/* LANGUAGE SWITCHER (Desktop pill-style) */}
        <div className="relative hidden lg:block ml-4">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-2 px-5 py-2 me-10 bg-amber-300 rounded-full border border-black font-bold text-black hover:bg-amber-400 transition"
          >
            {langs.find((l) => l.code === language)?.label}
            <ChevronDown size={18} />
          </button>

          {langOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-black rounded-lg shadow-lg">
              {langs.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLanguage(l.code as "en" | "mm" | "zh");
                    setLangOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left text-black hover:bg-gray-100"
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="text-white text-3xl block lg:hidden me-10 hover:text-amber-300 transition-colors"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center 
    text-white font-semibold text-2xl bg-black/70 backdrop-blur-lg 
    transition-all duration-500 lg:hidden
    ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
  `}
      >
        <button
          onClick={toggleMenu}
          aria-label="Close menu"
          className="absolute top-6 right-6 text-4xl text-white hover:text-amber-300 transition"
        >
          ✕
        </button>

        <div
          className={`flex flex-col items-center gap-10 transform transition-transform duration-500 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={toggleMenu}
              className={`hover:text-amber-300 transition-colors transition-all duration-500 delay-${
                index * 100
              }`}
            >
              {t(item.key)}
            </Link>
          ))}

          {/* MOBILE LANGUAGE SWITCHER (pill-style) */}
          <div className="relative mt-6">
            <button
              onClick={() => setMobileLangOpen(!mobileLangOpen)}
              className="flex items-center justify-between w-35 px-7 py-2 bg-amber-300 rounded-full border border-black font-bold text-black hover:bg-amber-400 transition"
            >
              {langs.find((l) => l.code === language)?.label}
              <ChevronDown size={18} />
            </button>

            {mobileLangOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-35 bg-white border border-black rounded-lg shadow-lg animate-fade-in-down">
                {langs.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code as "en" | "mm" | "zh");
                      setMobileLangOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-black hover:bg-gray-100"
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
