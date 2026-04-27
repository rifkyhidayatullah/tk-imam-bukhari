import { motion } from "framer-motion";
import {
  FaBook,
  FaClock,
  FaChalkboardTeacher,
  FaStar
} from "react-icons/fa";

function Academic() {
  const data = [
    {
      icon: <FaBook />,
      title: "Kurikulum Islami",
      desc: "Belajar akademik dan nilai agama seimbang."
    },
    {
      icon: <FaClock />,
      title: "Jadwal Teratur",
      desc: "Waktu belajar, bermain, dan ibadah tersusun baik."
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Guru Profesional",
      desc: "Tenaga pengajar sabar dan berpengalaman."
    },
    {
      icon: <FaStar />,
      title: "Metode Menyenangkan",
      desc: "Belajar sambil bermain dengan aktivitas kreatif."
    }
  ];

  return (
    <section
      id="academic"
      className="py-28 px-6 md:px-14 bg-white"
    >
      <div className="text-center mb-16">
        <p className="text-gold uppercase tracking-[5px] font-semibold">
          Sistem Pembelajaran
        </p>

        <h2 className="text-5xl font-bold text-primary mt-3">
          Akademik
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity:0, y:50 }}
            whileInView={{ opacity:1, y:0 }}
            whileHover={{ y:-10 }}
            transition={{ delay:i*0.1 }}
            className="bg-gray-50 p-8 rounded-3xl shadow-xl text-center"
          >
            <div className="w-16 h-16 bg-primary text-gold text-2xl rounded-2xl mx-auto flex items-center justify-center mb-5">
              {item.icon}
            </div>

            <h3 className="font-bold text-xl text-primary">
              {item.title}
            </h3>

            <p className="text-gray-600 mt-3">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Academic;