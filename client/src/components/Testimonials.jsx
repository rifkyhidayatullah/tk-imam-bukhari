import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Testimonials() {
  const data = [
    {
      text: "Anak saya sekarang lebih mandiri, rajin berdoa, dan semangat belajar setiap hari.",
      name: "Ibu Siti Rahma",
      role: "Wali Murid",
    },
    {
      text: "Guru-gurunya sabar dan ramah. Lingkungan sekolah juga bersih dan nyaman.",
      name: "Bapak Andi Saputra",
      role: "Orang Tua Murid",
    },
    {
      text: "Saya senang memilih TK Imam Bukhori. Pendidikan islami dan karakter sangat bagus.",
      name: "Ibu Nurlaila",
      role: "Wali Murid",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 4000);

    return () => clearInterval(slide);
  }, []);

  return (
    <section className="py-28 px-6 bg-gradient-to-b from-white to-gray-100 text-center">
      <p className="uppercase tracking-[5px] text-gold font-semibold">
        Kepercayaan Orang Tua
      </p>

      <h2 className="text-5xl font-bold text-primary mt-3 mb-14">
        Testimoni Wali Murid
      </h2>

      <div className="max-w-4xl mx-auto relative min-h-[320px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity:0, y:40 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-40 }}
            transition={{ duration:0.5 }}
            className="bg-white shadow-2xl rounded-[30px] p-10 md:p-14 border"
          >
            <div className="text-6xl text-gold leading-none">
              “
            </div>

            <p className="text-xl md:text-2xl italic text-gray-700 leading-9 mt-4">
              {data[index].text}
            </p>

            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                {data[index].name.charAt(0)}
              </div>

              <div className="text-left">
                <h4 className="font-bold text-primary text-lg">
                  {data[index].name}
                </h4>
                <p className="text-sm text-gray-500">
                  {data[index].role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-gold w-8" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;