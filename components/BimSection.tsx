import React from "react";
import Image from "next/image";
import CalendarSelector from "./CalendarSelector";
import CalendarList from "./CalendarList";
import ArticleShowList from "./ArticleShowList";

export default function BimSection() {
  return (
    <div id="bim-section" className="flex flex-col bg-white h-screen">
      <div className="flex justify-center ">
        <Image src={"/BIM(k)now!.png"} width={500} height={20} alt="bimknow" />
      </div>
      <div className="flex md:flex-row flex-col md:justify-evenly justify-center mt-2 text-3xl h-full">
        <div className="flex flex-col justify-center items-center gap-2 mb-4">
          <h1 className="">Non perderti gli eventi BIM (K)now!</h1>
          <div className="flex justify-center rounded-4xl">
            <CalendarSelector />
          </div>
          <div>tutti gli eventi</div>
        </div>
        <div>
          <h1>Qui trovi tutti gli articoli</h1>
          {/* qui deve venire fuori una s */}
          <ArticleShowList />
        </div>
      </div>
    </div>
  );
}
