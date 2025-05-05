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
    <div className="relative bg-white sm:h-screen overflow-hidden items-center min-h-screen w-full bg-gradient-to-b from-gray-200 to-transparent grid grid-cols-3 md:gap-2">
      {/* Titolo e contenuto a sinistra */}
      <div className="flex flex-col col-span-2 h-full z-30 lg:items-center pb-10">
        <motion.h1
          className="flex flex-col z-10 text-gray-600 md:text-7xl text-5xl font-bim-medium justify-center font-bold items-end-safe md:m-5 mt-4 mr-4 ml-5"
          initial={{ y: -400, x: 20, z: 50 }}
          animate={
            animateOut
              ? { y: 1000, rotate: 20, opacity: 0 }
              : { y: 0, rotate: 0, opacity: 1 }
          }
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Vittorio Andrea
        </motion.h1>

        <motion.h1
          className="flex text-6xl justify-center mt-0 ml-4cl font-extrabold md:justify-end md:text-8xl md:mr-8"
          initial={{ opacity: 0 }}
          animate={
            animateOut
              ? { y: 1000, rotate: -15, opacity: 0 }
              : { y: 0, rotate: 0, opacity: 1 }
          }
          transition={{ duration: 1.1, ease: "easeIn" }}
        >
          Sellaro
        </motion.h1>

        <motion.p
          className="md:w-fit w-full md:flex md:justify-end justify-center z-20 ml-5  mt-10 md:mt-12 md:mr-10 font-extralight text-gray-600 md:text-3xl text-xl"
          initial={{ y: -500, opacity: 0 }}
          animate={animateOut ? { y: 900, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
        >
          Un grandissimo... Esperto di BIM
        </motion.p>

        <div className="flex md:flex-row flex-col w-full justify-center gap-4 col-span-2 mb-4 md:mt-20 mt-0">
          {/* bim-section button */}
          <motion.button
            initial={{ opacity: 0, x: -1000, rotate: -1440 }}
            animate={
              animateOut
                ? { opacity: 1, y: 800, x: 50, rotate: -70 }
                : { opacity: 1, x: 0, rotate: 360 }
            }
            transition={{ duration: 1, delay: 0.1 }}
            className="flex text-xl font-bold text-gray-100 rounded-full hover:scale-105 hover:shadow-4xl duration-800 hover:-translate-y-2 hover:rotate-1 p-2 active:translate-2"
            onClick={() => handleClick("bim-section")}
          >
            <Image
              src={"/BIM(k)now!.png"}
              width={200}
              height={20}
              alt="bimknow"
            />
          </motion.button>

          {/* About section button */}
          <motion.button
            initial={{ opacity: 0, x: -1000, rotate: -1440 }}
            animate={
              animateOut
                ? { opacity: 1, y: 1000, rotate: 30 }
                : { opacity: 1, x: 0, rotate: 360 }
            }
            transition={{ duration: 1, delay: 0.2 }}
            className="flex text-4xl font-bold text-gray-600 rounded-full hover:scale-105 hover:shadow-4xl duration-800 hover:-translate-y-2 hover:rotate-1 p-2 active:translate-2"
            onClick={() => handleClick("about-me-section")}
          >
            About me
          </motion.button>
        </div>
      </div>

      {/* Immagine a destra */}
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 100 }}
        animate={
          animateOut
            ? { y: 1000, rotate: 30, opacity: 0 }
            : { y: 0, rotate: 0, opacity: 1, scale: 1 }
        }
        transition={{ duration: 1.2, ease: "easeIn" }}
        className="flex absolute right-0 md:justify-start items-center perspective-1000 md:col-span-1 col-span-3 z-0"
      >
        <Image
          src={"/Screenshot.png"}
          alt="Image Sella"
          width={300}
          height={600}
          className="flex w-full sm:opacity-100 opacity-30 rounded-t-4xl mt-4 md:mr-10 ml-0  [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] transition-transform duration-[1500ms] ease-in-out hover:rotate-y-12 hover:rotate-3 hover:scale-105 hover:shadow-3xl"
        />
      </motion.div>

      <ScrollDownIndicator />
    </div>
  );
}
