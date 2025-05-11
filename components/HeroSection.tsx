"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollDownIndicator from "./ScrollDownIndicator";

const variants = {
  // --- Testi
  nameHidden: { y: -400, opacity: 1 },
  nameEntry: { y: 0, rotate: 0, opacity: 1 },
  nameExit: { y: 1000, rotate: 20, opacity: 0 },
  sellaroHidden: { y: 0, opacity: 0 },
  sellaroEntry: { y: 0, rotate: 0, opacity: 1 },
  sellaroExit: { y: 1000, rotate: -15, opacity: 0 },

  // --- Bottoni
  btnHidden: { x: -1000, rotate: -1440, opacity: 0 },
  btnEntry: { x: 0, rotate: 360, opacity: 1 },
  btnExit1: { x: 50, y: 800, rotate: -70, opacity: 0 },
  btnExit2: { y: 1000, rotate: 30, opacity: 0 },

  // --- Immagine
  imgHidden: { scale: 0, y: 100, opacity: 0 },
  imgEntry: { scale: 1, y: 0, rotate: 0, opacity: 1 },
  imgExit: { scale: 0, y: 1000, rotate: 30, opacity: 0 },
};

export default function HeroSection() {
  const [animateOut, setAnimateOut] = useState(false);

  // Observe quando la Hero-section rientra in vista, per resettare animateOut
  useEffect(() => {
    const hero = document.getElementById("hero-section");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateOut(false);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = (id: string) => {
    // scatta l’animazione di exit
    setAnimateOut(true);
    // scrolla subito, senza resettare animateOut
    scrollToSection(id);
  };

  return (
    <div
      id="hero-section"
      className="bg-white min-h-screen w-full bg-gradient-to-b from-gray-200 to-transparent flex flex-col md:grid md:grid-cols-3 px-4 py-8 md:py-0"
    >
      {/* TESTI */}
      <div className="flex flex-col w-full md:col-span-2 items-center justify-center z-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-6">
          <motion.h1
            className="text-5xl md:text-8xl text-gray-600"
            initial="nameHidden"
            animate={animateOut ? "nameExit" : "nameEntry"}
            variants={variants}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            VITTORIO ANDREA
          </motion.h1>

          <motion.h1
            className="text-6xl md:text-9xl font-extrabold text-black"
            initial="sellaroHidden"
            animate={animateOut ? "sellaroExit" : "sellaroEntry"}
            variants={variants}
            transition={{ duration: 1.1, ease: "easeIn" }}
          >
            SELLARO
          </motion.h1>

          {/* BOTTONI */}
          <div className="flex flex-col md:flex-row w-full items-center md:items-start gap-4">
            <motion.button
              className="text-lg md:text-xl font-bold text-gray-100 rounded-full p-2 hover:scale-105 hover:shadow-4xl duration-800 hover:-translate-y-2 hover:rotate-1 active:translate-2"
              initial="btnHidden"
              animate={animateOut ? "btnExit1" : "btnEntry"}
              variants={variants}
              transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
              onClick={() => handleClick("bim-section")}
            >
              <Image
                src="/bimknow_image.png"
                width={160}
                height={20}
                alt="bimknow"
              />
            </motion.button>

            <motion.button
              className="text-2xl md:text-4xl font-bold text-gray-600 rounded-full p-2 hover:scale-105 hover:shadow-4xl duration-800 hover:-translate-y-2 hover:rotate-1 active:translate-2"
              initial="btnHidden"
              animate={animateOut ? "btnExit2" : "btnEntry"}
              variants={variants}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
              onClick={() => handleClick("about-me-section")}
            >
              About me
            </motion.button>
          </div>
        </div>
      </div>

      {/* IMMAGINE */}
      <motion.div
        className="flex justify-center md:justify-start items-center mt-8 md:mt-0 md:col-span-1"
        initial="imgHidden"
        animate={animateOut ? "imgExit" : "imgEntry"}
        variants={variants}
        transition={{ duration: 1.2, ease: "easeIn" }}
      >
        <Image
          src="/profile.jpg"
          alt="Image Sella"
          width={300}
          height={450}
          className="w-64 md:w-full max-w-xs md:max-w-sm rounded-t-4xl object-cover [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] transition-transform duration-[1500ms] ease-in-out hover:rotate-y-12 hover:rotate-3 hover:scale-105 hover:shadow-3xl"
        />
      </motion.div>

      <ScrollDownIndicator />
    </div>
  );
}
