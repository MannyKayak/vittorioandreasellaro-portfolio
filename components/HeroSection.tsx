"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollDownIndicator from "./ScrollDownIndicator";

export default function HeroSection() {
  const [animateOut, setAnimateOut] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (id: string) => {
    setAnimateOut(true);
    setTimeout(() => {
      scrollToSection(id);
      setAnimateOut(false);
    }, 1000);
  };

  return (
    <div className="bg-white min-h-screen w-full bg-gradient-to-b from-gray-200 to-transparent flex flex-col md:grid md:grid-cols-3 px-4 py-8 md:py-0">
      {/* Testo */}
      <div className="flex flex-col w-full md:col-span-2 items-center justify-center z-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-6">
          <div>
            <motion.h1
              className="text-5xl md:text-8xl text-gray-600"
              initial={{ y: -400 }}
              animate={
                animateOut
                  ? { y: 1000, rotate: 20, opacity: 0 }
                  : { y: 0, rotate: 0, opacity: 1 }
              }
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              VITTORIO ANDREA
            </motion.h1>

            <motion.h1
              className="text-6xl md:text-9xl font-extrabold"
              initial={{ opacity: 0 }}
              animate={
                animateOut
                  ? { y: 1000, rotate: -15, opacity: 0 }
                  : { y: 0, rotate: 0, opacity: 1 }
              }
              transition={{ duration: 1.1, ease: "easeIn" }}
            >
              SELLARO
            </motion.h1>
          </div>

          {/* Bottoni */}
          <div className="flex flex-col md:flex-row w-full items-center md:items-start gap-4">
            <motion.button
              initial={{ opacity: 0, x: -1000, rotate: -1440 }}
              animate={
                animateOut
                  ? { opacity: 1, y: 800, x: 50, rotate: -70 }
                  : { opacity: 1, x: 0, rotate: 360 }
              }
              transition={{ duration: 1, delay: 0.1 }}
              className="text-lg md:text-xl font-bold text-gray-100 rounded-full hover:scale-105 hover:shadow-4xl duration-800 hover:-translate-y-2 hover:rotate-1 p-2 active:translate-2"
              onClick={() => handleClick("bim-section")}
            >
              <Image
                src={"/bimknow_image.png"}
                width={160}
                height={20}
                alt="bimknow"
              />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: -1000, rotate: -1440 }}
              animate={
                animateOut
                  ? { opacity: 1, y: 1000, rotate: 30 }
                  : { opacity: 1, x: 0, rotate: 360 }
              }
              transition={{ duration: 1, delay: 0.2 }}
              className="text-2xl md:text-4xl font-bold text-gray-600 rounded-full hover:scale-105 hover:shadow-4xl duration-800 hover:-translate-y-2 hover:rotate-1 p-2 active:translate-2"
              onClick={() => handleClick("about-me-section")}
            >
              About me
            </motion.button>
          </div>
        </div>
      </div>

      {/* Immagine */}
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 100 }}
        animate={
          animateOut
            ? { y: 1000, rotate: 30, opacity: 0 }
            : { y: 0, rotate: 0, opacity: 1, scale: 1 }
        }
        transition={{ duration: 1.2, ease: "easeIn" }}
        className="flex justify-center md:justify-start items-center mt-8 md:mt-0 md:col-span-1"
      >
        <Image
          src={"/profile.jpg"}
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
