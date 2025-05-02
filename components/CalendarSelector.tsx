"use client";

import React, { useState } from "react";
import PreviousIcon from "./icons/PreviousIcon";
import NextIcon from "./icons/NextIcon";
import NextYearIcon from "./icons/NextYearIcon";
import PreviousYearIcon from "./icons/PreviousYearIcon";

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

export default function CalendarSelector() {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

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

    return (
      <div
        key={index}
        className={`aspect-square flex items-center justify-center border rounded 
          duration-500 text-sm
          ${isCurrentMonth ? "bg-gray-50" : "opacity-0"}
          ${isToday ? "text-green-600 font-bold" : ""}
          hover:rotate-y-10 hover:rotate-x-15 hover:-rotate-z-1  hover:-translate-y-2 hover:translate-x-1 hover:z-10 hover:text-shadow-xs hover:text-shadow-teal-500 hover:shadow-md shadow-red-900`}
      >
        {isCurrentMonth ? dayNum : null}
      </div>
    );
  });

  return (
    <div className="max-w-md border-6 rounded-4xl border-red-800 bg-gray-200 hover:rotate-y-10 hover:rotate-x-15 hover:-rotate-z-1 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-950 duration-700">
      {/* Intestazione */}
      <div className="flex justify-between items-center px-4 py-2 bg-red-500 text-amber-50 rounded-t-3xl border-b-4 border-red-800">
        <button onClick={() => setYear(year - 1)} title="Anno precedente">
          <PreviousYearIcon />
        </button>
        <button onClick={() => changeMonth(-1)}>
          <PreviousIcon />
        </button>
        <div className="text-xl font-semibold">
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
