"use client";

import CalendarSelector from "@/components/CalendarSelector";
import "react-calendar/dist/Calendar.css"; // Importa lo stile base

export default function BimEventsCalendar() {
  return (
    <div className="font-bim-medium">
      <div className="flex flex-col h-screen text-gray-700">
        <div className="flex justify-center mx-4 mt-4 font-bold">
          <h1 className="text-4xl mb-6">
            Calendario eventi <strong className="text-teal-600">BIM</strong>
          </h1>
        </div>

        <div className="flex justify-center px-4">
          <CalendarSelector />
        </div>
      </div>
    </div>
  );
}
