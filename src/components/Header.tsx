import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="px-3 bg-black">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            className="w-20 h-20 object-contain md:w-25 md:h-25"
            src="./images/logo.png"
            alt="logo"
          />
          {/* Pan Tha Zin */}
        </Link>
        <button
          onClick={isOpenHandler}
          className="text-amber-300 text-3xl block lg:hidden"
        >
          &#8801;
        </button>

        {/* navigation desktop */}
        <ul className="hidden font-bold  capitalize gap-6 lg:flex ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-amber-300" : "hover:text-zinc-600"
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-amber-300" : "hover:text-zinc-600"
              }
            >
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive ? "text-amber-300" : "hover:text-zinc-600"
              }
            >
              PRODUCT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                isActive ? "text-amber-300" : "hover:text-zinc-600"
              }
            >
              REVIEWS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? "text-amber-300" : "hover:text-zinc-600"
              }
            >
              CONTACT US
            </NavLink>
          </li>
        </ul>

        {/* mobile navigation */}
        <div
          className={`fixed inset-0 z-50 bg-zinc-800 opacity-90 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <div className="flex flex-col items-center h-full justify-center gap-8">
            <Link to="/" className="text-3xl " onClick={isOpenHandler}>
              HOME
            </Link>
            <Link to="/about" className="text-3xl" onClick={isOpenHandler}>
              ABOUT
            </Link>
            <Link to="/product" className="text-3xl" onClick={isOpenHandler}>
              PRODUCT
            </Link>
            <Link to="/reviews" className="text-3xl" onClick={isOpenHandler}>
              REVIEWS
            </Link>
            <Link to="/contact" className="text-3xl" onClick={isOpenHandler}>
              CONTACT US
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
