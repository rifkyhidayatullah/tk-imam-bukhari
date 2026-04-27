import { motion } from "framer-motion";
import heroImg from "../assets/images/6.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* Background Image */}
      <img
        src={heroImg}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-[#291056]/70 to-black/40"></div>

      {/* Glow */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gold/20 blur-3xl rounded-full animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-14 max-w-4xl text-white">
        <motion.p
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          className="uppercase tracking-[6px] text-gold font-semibold"
        >
          
        </motion.p>

        <motion.h1
          initial={{ opacity:0, y:60 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:1 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight mt-4"
        >
          Tumbuh Ceria,  
          <span className="text-gold"> Cerdas </span>  
          dan Berakhlak
        </motion.h1>

        <motion.p
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl leading-8"
        >
          Membentuk generasi Qurani sejak dini dengan
          pendidikan menyenangkan, guru profesional,
          dan lingkungan terbaik.
        </motion.p>

        {/* Button */}
        <div className="mt-10 flex gap-4 flex-wrap">
          <a
            href="#contact"
            className="bg-gold text-primary px-8 py-4 rounded-full font-bold shadow-2xl hover:scale-105 duration-300"
          >
            Daftar Sekarang
          </a>

          <a
            href="#gallery"
            className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-primary duration-300"
          >
            Lihat Galeri
          </a>
        </div>

        {/* Floating Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["250+", "Siswa"],
            ["15+", "Guru"],
            ["10+", "Tahun"],
            ["100%", "Islami"],
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity:0, y:30 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:i * 0.2 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-gold">
                {item[0]}
              </h3>
              <p className="text-sm text-gray-200">
                {item[1]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        ↓
      </div>
    </section>
  );
}

export default Hero;