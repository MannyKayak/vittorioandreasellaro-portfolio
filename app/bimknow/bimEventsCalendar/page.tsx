"use client";

import CalendarSelector from "@/components/CalendarSelector";
import Navbar from "@/components/Navbar";
import "react-calendar/dist/Calendar.css"; // Importa lo stile base

export default function BimEventsCalendar() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen bg-white">
        <h1 className="text-5xl font-bim-medium mt-4 mb-2">
          Calendario eventi Bim
        </h1>
        <div>
          <CalendarSelector size="large" />
        </div>
      </div>
    </>
  );
}
