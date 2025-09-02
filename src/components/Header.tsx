import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/product", label: "Product" },
    { path: "/reviews", label: "Reviews" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent flex justify-center mt-8">
      <nav
        className="flex items-center justify-between w-[90%] md:w-4/5 lg:w-3/4 
        px-6 py-3 rounded-full 
        bg-black/10 backdrop-blur-md border border-white/20 
        shadow-lg transition-all duration-300"
      >
        {/* ===== LOGO ===== */}
        <Link to="/" aria-label="Homepage">
          <img
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
            src="./images/logo.png"
            alt="logo"
          />
        </Link>

        {/* ===== DESKTOP NAVIGATION ===== */}
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
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ===== MOBILE MENU BUTTON ===== */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="text-white text-3xl block lg:hidden hover:text-amber-300 transition-colors"
        >
          ☰
        </button>
      </nav>

      {/* ===== FULLSCREEN MOBILE NAVIGATION ===== */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center 
        gap-10 text-white font-semibold text-2xl 
        bg-black/70 backdrop-blur-lg transition-opacity duration-300 lg:hidden
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {/* Close button (X) */}
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
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;
