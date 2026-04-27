import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

function Contact() {
  const [form, setForm] = useState({
    name:"",
    email:"",
    message:""
  });

  const submit = async(e)=>{
    e.preventDefault();

    await addDoc(collection(db,"contact"), form);

    alert("Pesan berhasil dikirim");

    setForm({
      name:"",
      email:"",
      message:""
    });
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 md:px-14 bg-white"
    >
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* FORM */}
        <form
          onSubmit={submit}
          className="bg-gray-50 shadow-2xl rounded-[30px] p-8"
        >
          <p className="uppercase tracking-[5px] text-gold font-semibold">
            Hubungi Kami
          </p>

          <h2 className="text-4xl font-bold text-primary mt-2 mb-8">
            Konsultasi & Pendaftaran
          </h2>

          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full p-4 border rounded-xl mb-4"
            value={form.name}
            onChange={(e)=>
              setForm({...form,name:e.target.value})
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 border rounded-xl mb-4"
            value={form.email}
            onChange={(e)=>
              setForm({...form,email:e.target.value})
            }
          />

          <textarea
            rows="5"
            placeholder="Tulis pesan..."
            className="w-full p-4 border rounded-xl mb-4"
            value={form.message}
            onChange={(e)=>
              setForm({...form,message:e.target.value})
            }
          />

          <button className="bg-primary text-white w-full py-4 rounded-xl hover:bg-[#3c1c74] duration-300">
            Kirim Pesan
          </button>

          <div className="mt-6 text-sm text-gray-500 space-y-2">
            <p>📍 Cifest</p>
            <p>📞 08xxxxxxxxxx</p>
            <p>✉️ info@tkimambukhori.sch.id</p>
          </div>
        </form>

        {/* MAP */}
        <div className="rounded-[30px] overflow-hidden shadow-2xl h-[560px]">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15330.927026898144!2d107.12257662270967!3d-6.343115371797996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699b770bd94fdb%3A0xa89f131be74285cb!2sTK-IT%20IMAM%20BUKHARI!5e1!3m2!1sid!2sid!4v1777289891546!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border:0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default Contact;