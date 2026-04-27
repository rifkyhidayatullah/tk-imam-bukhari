import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import aboutImg from "../assets/images/6.jpeg";

function About() {
  const items = [
    "Guru Ramah & Profesional",
    "Lingkungan Aman dan Bersih",
    "Metode Belajar Menyenangkan",
    "Pembelajaran Islami Sejak Dini",
  ];

  return (
    <section
      id="about"
      className="py-28 px-6 md:px-14 bg-gradient-to-b from-white to-gray-100 overflow-hidden"
    >
      <div className="text-center mb-16">
        <p className="uppercase tracking-[5px] text-gold font-semibold">
          Mengenal Kami
        </p>

        <h2 className="text-5xl md:text-6xl font-bold text-primary mt-3">
          Tentang Sekolah
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* CARD FOTO */}
        <motion.div
          initial={{ opacity:0, x:-80 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
          className="relative group"
        >
          <div className="absolute -top-6 -left-6 w-full h-full rounded-[35px] bg-gold/20"></div>

          <img
            src={aboutImg}
            alt=""
            className="relative rounded-[35px] shadow-2xl w-full h-[520px] object-cover group-hover:scale-[1.02] duration-500"
          />

          {/* Floating Badge */}
          {/* <div className="absolute bottom-6 left-6 bg-white shadow-xl px-6 py-4 rounded-2xl">
            <h3 className="text-3xl font-bold text-primary">
              10+
            </h3>
            <p className="text-gray-500 text-sm">
              Tahun Pengalaman
            </p>
          </div> */}
        </motion.div>

        {/* CARD TEXT */}
        <motion.div
          initial={{ opacity:0, x:80 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
          className="bg-white rounded-[35px] shadow-2xl p-10 md:p-14"
        >
          <p className="text-gold font-semibold tracking-[4px] uppercase">
            TK Imam Bukhori
          </p>

          <h3 className="text-4xl md:text-5xl font-bold text-primary mt-3 leading-tight">
            Membangun Generasi Hebat Sejak Dini
          </h3>

          <p className="text-gray-600 mt-6 leading-8 text-lg">
            TK Imam Bukhori hadir sebagai lembaga pendidikan anak usia dini
            yang mengutamakan akhlak, ilmu, kreativitas, dan keceriaan.
            Kami percaya bahwa masa emas anak harus diisi dengan pengalaman
            belajar terbaik dalam lingkungan islami dan penuh kasih sayang.
          </p>

          <div className="grid gap-4 mt-8">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ delay:i * 0.1 }}
                className="flex items-center gap-4"
              >
                <FaCheckCircle className="text-gold text-xl" />
                <span className="text-gray-700 font-medium">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-3 gap-4 mt-10">
            {[
              ["250+", "Siswa"],
              ["15+", "Guru"],
              ["100%", "Islami"],
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-2xl p-4 text-center"
              >
                <h4 className="text-2xl font-bold text-primary">
                  {item[0]}
                </h4>
                <p className="text-sm text-gray-500">
                  {item[1]}
                </p>
              </div>
            ))}
          </div> */}
        </motion.div>

      </div>
    </section>
  );
}

export default About;