import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
  return (
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-5 rounded-full text-3xl shadow-2xl hover:scale-110 duration-300 z-50"
    >
      <FaWhatsapp />
    </a>
  );
}

export default Whatsapp;