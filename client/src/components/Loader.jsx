import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 bg-primary z-[9999] flex items-center justify-center">
      <motion.h1
        initial={{opacity:0, scale:0.8}}
        animate={{opacity:1, scale:1}}
        transition={{duration:1}}
        className="text-5xl font-bold text-gold tracking-widest"
      >
        TK IMAM BUKHARI
      </motion.h1>
    </div>
  );
}

export default Loader;