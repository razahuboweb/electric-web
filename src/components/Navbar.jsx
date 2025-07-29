import { useState } from "react";
import { Linkedin, Facebook, Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-[#04182B] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Left - Logo Image and Tagline */}
        <div className="flex items-center gap-6">
          <Link to="/">
            <img
              src="../../public/image/nexphase1.png"
              alt="Logo"
              className="h-50 w-52 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500"
                  : "text-white hover:text-orange-500"
              }
            >
              {name}
            </NavLink>
          ))}
          <div className="flex gap-2 ml-4">
            <a
              href="https://linkedin.com"
              className="bg-[#1DB7B2] p-1.5 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} className="text-[#04182B]" />
            </a>
            <a
              href="https://facebook.com"
              className="bg-[#1DB7B2] p-1.5 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={18} className="text-[#04182B]" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#04182B] px-4 pb-4 space-y-3 text-sm font-medium">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-orange-500"
                  : "block text-white hover:text-orange-500"
              }
            >
              {name}
            </NavLink>
          ))}
          <div className="flex gap-2 mt-2">
            <a
              href="https://www.linkedin.com/company/nexphase-electrical-co-ltd/"
              className="bg-[#1DB7B2] p-1.5 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} className="text-[#04182B]" />
            </a>
            <a
              href="https://www.facebook.com/share/16ksfHxL7q/?mibextid=wwXIfr"
              className="bg-[#1DB7B2] p-1.5 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={18} className="text-[#04182B]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
