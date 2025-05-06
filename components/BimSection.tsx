import React from "react";
import Image from "next/image";
import CalendarSelector from "./CalendarSelector";
import ArticleShowList from "./ArticleShowList";
import Link from "next/link";

export default function BimSection() {
  return (
    <div
      id="bim-section"
      className="flex flex-col bg-white items-stretch h-full"
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
          <div className="flex flex-row">
            <h1 className="flex text-black">Non perderti gli</h1>
            <h1 className="flex text-teal-600 hover:text-teal-300">
              <Link href={"/bimknow"}>&nbsp;eventi</Link>
            </h1>
            <h1 className="text-black flex"> &nbsp;BIM (K)now!</h1>
          </div>

          <div className="flex justify-center rounded-4xl">
            <CalendarSelector />
          </div>
        </div>
        <div>
          <h1>
            <Link
              href={"/articles"}
              className="font-bold z-30 text-teal-600 hover:text-teal-300"
            >
              Qui
            </Link>{" "}
            trovi tutti gli articoli
          </h1>
          {/* qui deve venire fuori una s */}
          <ArticleShowList />
        </div>
      </div>
    </div>
  );
}
