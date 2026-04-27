import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaAward,
  FaMosque
} from "react-icons/fa";

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const stepTime = 20;
    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function Stats() {
  const data = [
    {
      number: 250,
      suffix: "+",
      label: "Siswa Aktif",
      icon: <FaUserGraduate />,
    },
    {
      number: 15,
      suffix: "+",
      label: "Guru Profesional",
      icon: <FaChalkboardTeacher />,
    },
    {
      number: 10,
      suffix: "+",
      label: "Tahun Berdiri",
      icon: <FaAward />,
    },
    {
      number: 100,
      suffix: "%",
      label: "Nilai Islami",
      icon: <FaMosque />,
    },
  ];

  return (
    <section className="py-28 px-6 md:px-14 bg-gradient-to-r from-primary via-[#32115f] to-[#14082f] text-white">
      <div className="text-center mb-16">
        <p className="uppercase tracking-[5px] text-gold font-semibold">
          Prestasi Kami
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Statistik Sekolah
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity:0, y:50 }}
            whileInView={{ opacity:1, y:0 }}
            whileHover={{ y:-8, scale:1.03 }}
            transition={{ delay:i * 0.1 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[28px] p-8 text-center shadow-2xl"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gold text-primary text-2xl flex items-center justify-center mb-6">
              {item.icon}
            </div>

            <h3 className="text-5xl font-bold text-gold">
              <Counter
                end={item.number}
                suffix={item.suffix}
              />
            </h3>

            <p className="mt-4 text-gray-200">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;