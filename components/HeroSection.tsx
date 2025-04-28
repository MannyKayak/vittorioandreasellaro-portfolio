import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollDownIndicator from "./ScrollDownIndicator";

export default function HeroSection() {
  return (
    <div className="grid relative sm:h-screen overflow-hidden items-center min-h-screen w-full bg-gradient-to-b from-gray-200 to-transparent grid-cols-3 col-span-3 md:gap-2">
      {/* l'hero section è divisa in due parti a sinistra il titolo con nome descrizione e call to action a destra la foto */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=" flex flex-col col-span-2 h-full z-30 mt-30 items-center"
      >
        <h1 className="flex flex-col z-10 text-gray-600 md:text-7xl text-5xl font-mono justify-center font-bold items-end-safe md:m-5 mt-4 mr-4 ml-5">
          Vittorio Andrea
        </h1>
        <h1 className="flex text-6xl font-mono justify-center mt-0 ml-4 font-extrabold md:justify-end md:text-8xl md:mr-8 duration-[1500ms] ease-in-out hover:-rotate-y-12 hover:-rotate-3 hover:scale-105 hover:shadow-3xl">
          Sellaro
        </h1>
        <p className="md:w-fit w-full md:flex md:justify-end justify-center z-20 ml-5 lg:pl-40 mt-10 md:mt-12 md:mr-10 font-mono font-extralight text-gray-600 md:text-3xl text-xl ">
          Un grandissimo... Esperto di BIM
        </p>
        <div className="flex md:flex-row flex-col w-full justify-center gap-4 col-span-2 md:mt-20 mt-5">
          <motion.button
            initial={{ opacity: 0, x: -1000, rotate: -4 * 360 }}
            animate={{ opacity: 1, x: 0, rotate: 360 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="flex text-xl font-bold text-gray-100 rounded-full hover:scale-105 hover:shadow-4xl duration-800 hover:-translate-y-2 hover:rotate-1 p-2 active:translate-2"
          >
            <Image
              src={"/bimknow-title.png"}
              width={200}
              height={20}
              alt="bimknow"
              className=""
            />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: -1000, rotate: -4 * 360 }}
            animate={{ opacity: 1, x: 0, rotate: 360 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex text-4xl font-bold font-mono text-gray-600 rounded-full hover:scale-105 hover:shadow-4xl duration-800 hover:-translate-y-2 hover:rotate-1 p-2 active:translate-2 items-baseline-last"
          >
            Progetti
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex absolute right-0 md:justify-start items-center perspective-1000 md:col-span-1 col-span-3 z-0"
      >
        <Image
          src={"/Screenshot.png"}
          alt="Image Sella"
          className="flex w-full sm:opacity-100 opacity-30 rounded-t-4xl mt-4 md:mr-10 ml-0  [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] transition-transform duration-[1500ms] ease-in-out hover:rotate-y-12 hover:rotate-3 hover:scale-105 hover:shadow-3xl"
          width={300}
          height={600}
        />
      </motion.div>
      <ScrollDownIndicator />
    </div>
  );
}
