import { motion } from "framer-motion";

import g1 from "../assets/images/1.jpeg";
import g2 from "../assets/images/2.jpeg";
import g3 from "../assets/images/3.jpeg";
import g4 from "../assets/images/4.jpeg";
import g5 from "../assets/images/5.jpeg";
import g6 from "../assets/images/6.jpeg";

function Gallery() {
  const data = [
    { img: g1, title: "Belajar Bersama" },
    { img: g2, title: "Kegiatan Islami" },
    { img: g3, title: "Bermain Ceria" },
    { img: g4, title: "Lomba Anak Hebat" },
    { img: g5, title: "Belajar Kreatif" },
    { img: g6, title: "Wisuda TK" },
  ];

  return (
    <section
      id="gallery"
      className="py-24 px-6 md:px-14 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="text-center mb-14">
        <h2 className="text-5xl font-bold text-primary">
          Galeri Kegiatan
        </h2>

        <p className="mt-4 text-gray-600">
          Momen indah bersama anak-anak hebat TK Imam Bukhari
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 auto-rows-[280px]">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            whileHover={{ scale:1.03 }}
            transition={{ duration:0.5 }}
            className={`group relative overflow-hidden rounded-[30px] shadow-2xl cursor-pointer
              ${i === 0 || i === 4 ? "md:row-span-2 h-full" : ""}
            `}
          >
            <img
              src={item.img}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

            <div className="absolute bottom-5 left-5 text-white">
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;