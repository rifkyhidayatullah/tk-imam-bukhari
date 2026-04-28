import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#120724] text-white pt-20 pb-8 px-6 md:px-14">
      <div className="grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-gold">
            TK Imam Bukhari
          </h2>

          <p className="mt-5 text-gray-300 leading-8">
            Membentuk generasi Qurani sejak dini
            dengan pendidikan islami modern,
            aman, nyaman, dan menyenangkan.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-bold text-xl mb-5">
            Navigasi
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Tentang</a></li>
            <li><a href="#program">Program</a></li>
            <li><a href="#gallery">Galeri</a></li>
            <li><a href="#contact">Kontak</a></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="font-bold text-xl mb-5">
            Kontak
          </h3>

          <div className="space-y-4 text-gray-300">
            <p className="flex gap-3 items-center">
              <FaWhatsapp /> 08xxxxxxxxxx
            </p>

            <p className="flex gap-3 items-center">
              <FaEnvelope /> info@tkimambukhori.sch.id
            </p>

            <p className="flex gap-3 items-start">
              <FaMapMarkerAlt />
              Cifest
            </p>
          </div>
        </div>

        {/* Sosmed */}
        <div>
          <h3 className="font-bold text-xl mb-5">
            Ikuti Kami
          </h3>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-primary duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-primary duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-14 pt-8 text-center text-gray-400 text-sm">
        © 2026 TK Imam Bukhari.
      </div>
    </footer>
  );
}

export default Footer;