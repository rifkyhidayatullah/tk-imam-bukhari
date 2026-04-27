import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

function Event() {
  const [selected, setSelected] = useState(null);

  const data = [
    {
      title: "Lomba Mewarnai Anak",
      date: "15 Mei 2026",
      short: "Ajang kreativitas dan keberanian anak tampil.",
      desc:
        "Lomba mewarnai bertujuan melatih kreativitas, fokus, dan keberanian anak. Diikuti seluruh siswa TK Imam Bukhori dengan suasana ceria dan penuh semangat.",
    },
    {
      title: "Manasik Haji Cilik",
      date: "10 Juni 2026",
      short: "Belajar rukun Islam dengan praktik langsung.",
      desc:
        "Kegiatan manasik haji memberikan pengalaman belajar ibadah secara menyenangkan. Anak-anak dikenalkan tata cara haji sejak usia dini.",
    },
    {
      title: "Wisuda & Pentas Seni",
      date: "25 Juni 2026",
      short: "Momen kelulusan dan pertunjukan bakat siswa.",
      desc:
        "Acara wisuda disertai pentas seni menampilkan hafalan, tari, nyanyian islami, dan penampilan terbaik siswa sebagai penutup tahun ajaran.",
    },
  ];

  return (
    <section
      id="event"
      className="py-28 px-6 md:px-14 bg-gradient-to-br from-primary via-[#31105e] to-[#140628] text-white"
    >
      <div className="text-center mb-16">
        <p className="uppercase tracking-[5px] text-gold font-semibold">
          Agenda Sekolah
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mt-3">
          Event & Kegiatan
        </h2>

        <p className="mt-5 text-gray-200 max-w-2xl mx-auto">
          Berbagai kegiatan edukatif, islami, dan menyenangkan
          untuk tumbuh kembang anak.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity:0, y:50 }}
            whileInView={{ opacity:1, y:0 }}
            whileHover={{ y:-10 }}
            transition={{ delay:i * 0.1 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[30px] p-8 shadow-2xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-gold text-primary flex items-center justify-center text-xl mb-6">
              <FaCalendarAlt />
            </div>

            <h3 className="text-2xl font-bold">
              {item.title}
            </h3>

            <p className="text-gold mt-3 font-semibold">
              {item.date}
            </p>

            <p className="text-gray-200 mt-4 leading-8">
              {item.short}
            </p>

            <button
              onClick={() => setSelected(item)}
              className="mt-6 bg-gold text-primary px-6 py-3 rounded-full font-bold hover:scale-105 duration-300"
            >
              Read More
            </button>
          </motion.div>
        ))}
      </div>

      {/* MODAL DETAIL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale:0.8, opacity:0 }}
              animate={{ scale:1, opacity:1 }}
              exit={{ scale:0.8, opacity:0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-primary max-w-2xl w-full rounded-[30px] p-10 shadow-2xl"
            >
              <p className="uppercase tracking-[5px] text-gold font-semibold">
                Detail Event
              </p>

              <h2 className="text-4xl font-bold mt-3">
                {selected.title}
              </h2>

              <p className="mt-3 text-gold font-bold">
                {selected.date}
              </p>

              <p className="mt-6 text-gray-700 leading-8">
                {selected.desc}
              </p>

              <button
                onClick={() => setSelected(null)}
                className="mt-8 bg-primary text-white px-7 py-3 rounded-full"
              >
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Event;