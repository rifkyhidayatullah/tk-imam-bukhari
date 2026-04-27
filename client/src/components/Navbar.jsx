import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 40);
    });
  }, []);

  const menu = [
    { name: "Home", id: "home" },
    { name: "Tentang", id: "about" },
    { name: "Akademik", id: "academic" },
    { name: "Program", id: "program" },
    { name: "Event", id: "event" },
    { name: "Galeri", id: "gallery" },
    { name: "Kontak", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 px-6 md:px-12 py-4 transition-all duration-500 ${
        scroll
          ? "bg-primary/90 backdrop-blur-xl shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
  <img
    src={logo}
    alt="Logo TK Imam Bukhori"
    className="w-20 h-20 object-contain"
  />

  <div>
    <h1 className="text-lg font-bold text-gold leading-none">
      TK Imam Bukhari
    </h1>
    <p className="text-xs text-white/70">
      Islamic Kindergarten
    </p>
  </div>
</div>

        <ul className="hidden md:flex gap-8 text-white font-medium">
          {menu.map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.id}`}
                className="hover:text-gold duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-6 bg-primary rounded-2xl p-5 space-y-4 text-white">
          {menu.map((item, i) => (
            <a
              key={i}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;