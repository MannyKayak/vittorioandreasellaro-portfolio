"use client";

import React, { useEffect, useState } from "react";
import PreviousIcon from "./icons/PreviousIcon";
import NextIcon from "./icons/NextIcon";
import NextYearIcon from "./icons/NextYearIcon";
import PreviousYearIcon from "./icons/PreviousYearIcon";
import { toDateObject } from "@/functions/utils";
import LocationIcon from "./icons/LocationIcon";
import { BimEvent } from "@/app/types";

const daysOfWeek = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];

const months = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getDaysInMonth(month: number, year: number): number {
  return [
    31,
    isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ][month];
}

type CalendarSelectorProps = {
  size?: "small" | "large";
};

export default function CalendarSelector({
  size = "small",
}: CalendarSelectorProps) {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [allEventsData, setAllEventsData] = useState<BimEvent[]>([]);
  const [EventsOfTheMonth, setEventsOfTheMonth] = useState<BimEvent[]>([]);

  const sizeClasses = size === "large" ? "w-[30vw]" : "scale-100";

  const firstDay = new Date(year, month, 1).getDay(); // 0 (Sun) – 6 (Sat)
  const daysInMonth = getDaysInMonth(month, year);

  const startDay = (firstDay + 6) % 7; // per iniziare da lunedì
  const totalCells = 42;

  const changeMonth = (offset: number) => {
    let newMonth = month + offset;
    let newYear = year;

    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }

    setMonth(newMonth);
    setYear(newYear);
  };

  const days = Array.from({ length: totalCells }, (_, index) => {
    const dayNum = index - startDay + 1;
    const isCurrentMonth = dayNum > 0 && dayNum <= daysInMonth;
    const isToday =
      isCurrentMonth &&
      dayNum === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    // Calcola la data corrente per il giorno specifico
    const currentDate = new Date(year, month, dayNum);
    // Controlla se ci sono eventi in quel giorno
    const dayEvents = EventsOfTheMonth.filter(
      (event) =>
        event.date.getDate() === currentDate.getDate() &&
        event.date.getMonth() === currentDate.getMonth() &&
        event.date.getFullYear() === currentDate.getFullYear()
    );

    return (
      <div key={index} className="relative group font-bim-medium">
        <div
          className={`aspect-square flex items-center justify-center border rounded
          duration-500 text-sm cursor-default
          ${isCurrentMonth ? "bg-gray-50" : "opacity-0"}
          ${isToday ? "text-green-600 font-bold" : ""}
          ${dayEvents.length > 0 ? "text-red-600 font-semibold" : ""}
          hover:rotate-y-10 hover:rotate-x-15 hover:-rotate-z-1 hover:-translate-y-2 hover:translate-x-1 hover:z-10 hover:text-shadow-xs hover:text-shadow-teal-500 hover:shadow-md shadow-red-900`}
        >
          {isCurrentMonth ? dayNum : null}
        </div>

        {/* Tooltip con eventi */}
        {isCurrentMonth && dayEvents.length > 0 && (
          <div className="absolute top-full left-1/2 text-inherit -translate-x-1/2 mt-1 w-52 p-1 rounded-lg bg-teal-700 shadow-xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {dayEvents.map((event) => (
              <div key={event.id} className="border-2 rounded-xl bg-white p-1">
                <div className="text-sm font-bold">{event.title}</div>
                <div className="flex flex-row justify-center items-center">
                  <LocationIcon />
                  <div className="text-xs text-gray-600 ">{event.location}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  });

  useEffect(() => {
    async function fetchEvents() {
      const res = await fetch("/data/events.json");
      const allEvents: BimEvent[] = await res.json();
      const allEventParsed = allEvents.map((item) => ({
        ...item,
        date: toDateObject(item.date.toString()),
      }));
      setAllEventsData(allEventParsed);
    }

    fetchEvents();
  }, []); // Solo al primo montaggio

  useEffect(() => {
    const filtered = allEventsData.filter(
      (e) => e.date.getMonth() === month && e.date.getFullYear() === year
    );
    setEventsOfTheMonth(filtered);
  }, [month, year, allEventsData]); // Si aggiorna ogni volta che cambia mese o arrivano nuovi dati

  return (
    <div
      className={`max-w-md font-bim-medium border-6 rounded-4xl border-red-800 bg-gray-200 hover:rotate-y-10 hover:rotate-x-15 hover:-rotate-z-1 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-950 duration-700 ${sizeClasses}`}
    >
      {/* Intestazione */}
      <div className="flex justify-between items-center px-4 py-2 bg-red-500 text-amber-50 rounded-t-3xl border-b-4 border-red-800">
        <button onClick={() => setYear(year - 1)} title="Anno precedente">
          <PreviousYearIcon />
        </button>
        <button onClick={() => changeMonth(-1)}>
          <PreviousIcon />
        </button>
        <div className="text-xl font-semibold ">
          {months[month]} {year}
        </div>
        <button onClick={() => changeMonth(1)}>
          <NextIcon />
        </button>
        <button onClick={() => setYear(year + 1)} title="Anno successivo">
          <NextYearIcon />
        </button>
      </div>

      {/* Giorni della settimana */}
      <div className="grid grid-cols-7 gap-2 px-2 text-center text-sm font-medium text-gray-600 mb-2 mt-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="font-bold">
            {day}
          </div>
        ))}
      </div>

      {/* Giorni del mese */}
      <div className="grid grid-cols-7 gap-1 text-center px-2 pb-4">{days}</div>
    </div>
  );
}
