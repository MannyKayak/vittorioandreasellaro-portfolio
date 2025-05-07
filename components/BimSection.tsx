import React from "react";
import Image from "next/image";
import CalendarSelector from "./CalendarSelector";
import ArticleShowList from "./ArticleShowList";
import Link from "next/link";

export default function BimSection() {
  return (
    <div
      id="bim-section"
      className="flex flex-col bg-white items-stretch h-full px-4"
    >
      <div className="flex justify-center ">
        <Image
          src={"/bimknow_image.png"}
          width={500}
          height={20}
          alt="bimknow"
        />
      </div>
      <div className="flex md:flex-row flex-col md:justify-evenly items-stretch justify-center mt-2 text-3xl h-full">
        <div className="flex flex-col justify-center items-center gap-2 mb-4">
          <div className="flex justify-center">
            <h1>
              Non perderti gli{" "}
              <Link
                className="text-teal-600 hover:text-teal-300 active:text-teal-300"
                href={"/bimknow"}
              >
                EVENTI
              </Link>{" "}
              di BIM (k)now!
            </h1>
          </div>

          <div>
            <CalendarSelector />
          </div>
        </div>
        <div className=" flex flex-col justify-center gap-4">
          <div className="flex justify-center">
            <h1>
              <Link
                href={"/articles"}
                className="font-bold z-30 text-teal-600 hover:text-teal-300"
              >
                Qui
              </Link>{" "}
              trovi tutti gli articoli
            </h1>
          </div>

          {/* qui deve venire fuori una s */}
          <ArticleShowList />
        </div>
      </div>
    </div>
  );
}
