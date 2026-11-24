
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#30251F]/10 bg-[#F8F5F0]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-20">

        {/* Logo */}
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-serif text-2xl tracking-[0.18em] text-[#30251F] transition-colors duration-500 group-hover:text-[#A17B5B]">
            GLOW<span className="text-[#A17B5B]">.</span>
          </span>
          <span className="mt-1 text-[9px] tracking-[0.35em] text-[#76675B]">
            BEAUTY STUDIO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="relative text-[13px] tracking-wide text-[#30251F] transition-colors duration-300 hover:text-[#A17B5B] after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-[#A17B5B] after:transition-all after:duration-500 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Booking Button */}
        <Link
          to="/book-appointment"
          className="hidden md:inline-flex items-center justify-center bg-[#30251F] px-6 py-3 text-xs tracking-wider text-white transition-all duration-500 hover:bg-[#A17B5B] hover:tracking-[0.16em]"
        >
          BOOK AN APPOINTMENT
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-[6px] p-2 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`h-[1.5px] w-6 bg-[#30251F] transition-all duration-500 ease-in-out ${
              menuOpen ? "translate-y-[3.75px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-[#30251F] transition-all duration-500 ease-in-out ${
              menuOpen ? "-translate-y-[3.75px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute left-0 top-[80px] w-full overflow-hidden border-b border-[#30251F]/10 bg-[#F8F5F0] transition-all duration-500 ease-in-out md:hidden ${
          menuOpen
            ? "visible max-h-[450px] translate-y-0 opacity-100"
            : "invisible max-h-0 -translate-y-3 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 px-6 py-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                transitionDelay: menuOpen ? `${index * 90}ms` : "0ms",
              }}
              className={`text-sm tracking-wide text-[#30251F] transition-all duration-500 ease-out hover:text-[#A17B5B] ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-3 opacity-0"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/book-appointment"
            onClick={() => setMenuOpen(false)}
            style={{
              transitionDelay: menuOpen ? "450ms" : "0ms",
            }}
            className={`mt-2 w-full max-w-[250px] bg-[#30251F] px-6 py-3.5 text-center text-xs tracking-wider text-white transition-all duration-500 hover:bg-[#A17B5B] ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }`}
          >
            BOOK AN APPOINTMENT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
