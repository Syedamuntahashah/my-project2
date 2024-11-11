import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
 

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-fixed" style={{ backgroundImage: "url('./images/images.jpg')" }}>
    <Header />

    <div className="w-full md:w-2/3 flex flex-col space-y-6 p-4"></div>
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
   </div>
  );
}
