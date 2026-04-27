import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaMosque,
  FaGlobe,
  FaPalette,
  FaRunning,
  FaHeart
} from "react-icons/fa";

function Programs() {
  const items = [
    {
      title: "Tahfidz Anak",
      desc: "Menghafal surat pendek dan doa harian sejak dini.",
      icon: <FaMosque />,
    },
    {
      title: "Belajar Membaca",
      desc: "Metode menyenangkan mengenal huruf dan kata.",
      icon: <FaBookOpen />,
    },
    {
      title: "English For Kids",
      desc: "Belajar bahasa Inggris dasar dengan fun activity.",
      icon: <FaGlobe />,
    },
    {
      title: "Seni & Kreativitas",
      desc: "Mewarnai, kerajinan tangan, dan eksplorasi bakat.",
      icon: <FaPalette />,
    },
    {
      title: "Motorik Halus & Kasar",
      desc: "Melatih gerak tubuh, keseimbangan, dan koordinasi.",
      icon: <FaRunning />,
    },
    {
      title: "Adab Islami Harian",
      desc: "Membiasakan salam, doa, sopan santun, dan akhlak.",
      icon: <FaHeart />,
    },
  ];

  return (
    <section
      id="program"
      className="relative py-28 px-6 md:px-14 bg-white text-white overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gold/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 text-center mb-16">
        <p className="uppercase tracking-[5px] text-primary">
          Pendidikan Berkualitas
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mt-3 text-primary">
          Program Unggulan
        </h2>

        <p className="text-gold mt-5 max-w-2xl mx-auto">
          Kurikulum terbaik untuk membentuk generasi
          cerdas, islami, kreatif, dan percaya diri.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity:0, y:60 }}
            whileInView={{ opacity:1, y:0 }}
            whileHover={{
              y:-10,
              scale:1.03
            }}
            transition={{
              duration:0.5,
              delay:i * 0.1
            }}
            viewport={{ once:true }}
            className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-[28px] p-8 shadow-2xl hover:border-gold/50 duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-gold text-primary text-2xl flex items-center justify-center mb-6 shadow-xl group-hover:rotate-12 duration-300">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold mb-4 text-primary">
              {item.title}
            </h3>

            <p className="text-gray-200 leading-8 text-primary">
              {item.desc}
            </p>

            <div className="mt-6 h-1 w-14 bg-gold rounded-full group-hover:w-24 duration-300"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Programs;