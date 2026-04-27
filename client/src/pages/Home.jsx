import { useState, useEffect } from "react";

import Loader from "../components/Loader";
import TopProgress from "../components/TopProgress";
import CursorGlow from "../components/CursorGlow";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import Programs from "../components/Programs";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import Academic from "../components/Academic";
import Event from "../components/Event";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },2000);
  },[]);

  if(loading) return <Loader />;

  return (
    <>
      <TopProgress />
      <CursorGlow />

      <Navbar />
      <Hero />
      <About />
      <Academic />
      <Stats />
      <Programs />
      <Event />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <Whatsapp />
    </>
  );
}

export default Home;