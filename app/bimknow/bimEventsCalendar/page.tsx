"use client";

import CalendarSelector from "@/components/CalendarSelector";
import Navbar from "@/components/Navbar";
import "react-calendar/dist/Calendar.css"; // Importa lo stile base

export default function BimEventsCalendar() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col h-screen text-black bg-white">
        <div className="flex justify-center">
          <h1 className=" flex text-5xl font-bim-medium mt-4 mb-2">
            Calendario eventi Bim
          </h1>
        </div>

        <div className="px-4">
          <CalendarSelector />
        </div>
      </div>
    </>
  );
}
