"use client";

import CalendarSelector from "@/components/CalendarSelector";
import Navbar from "@/components/Navbar";
import "react-calendar/dist/Calendar.css"; // Importa lo stile base

export default function BimEventsCalendar() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="flex flex-col h-screen text-black bg-white gap-4">
        <div className="flex justify-center mx-4 mt-4">
          <h1 className=" flex text-5xl font-bim-medium mt-4 mb-2">
            Calendario eventi Bim
          </h1>
        </div>

        <div className="flex justify-center px-4">
          <CalendarSelector />
        </div>
      </div>
    </div>
  );
}
