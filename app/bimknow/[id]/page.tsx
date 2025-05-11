"use client";

import React, { useEffect, useState } from "react";
import { BimEvent } from "@/app/types";
import Navbar from "@/components/Navbar";

export default function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [event, setEvent] = useState<BimEvent | null>(null);
  const [id, setId] = useState<string | null>(null);

  const getParams = async () => {
    const { id } = await params;
    setId(id);
  };

  useEffect(() => {
    getParams();
  }, [params]);

  useEffect(() => {
    if (id) {
      async function fetchEvent() {
        const res = await fetch("/data/events.json");
        const events: BimEvent[] = await res.json();
        const selectedEvent = events.find((e) => e.id.toString() === id);
        setEvent(selectedEvent || null);
      }

      fetchEvent();
    }
  }, [id]);

  if (!event) {
    return (
      <div className="flex h-screen justify-center items-center bg-gradient-to-r from-teal-200 to-teal-800 text-white">
        <div className="text-center text-lg font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen text-black font-bim-medium gap-4">
      <div className="flex container justify-center">
        <div className="bg-white p-4 rounded-3xl shadow-lg max-w-4xl mx-2 justify-center">
          <h1 className="text-3xl font-bold text-center text-teal-600 mb-4">
            {event.title}
          </h1>
          <p className="text-lg text-gray-700 mb-6">{event.description}</p>
          <div className="flex flex-col space-y-4">
            <div className="text-gray-600">
              <span className="font-bold">Location:</span> {event.location}
            </div>
            <div className="text-gray-600">
              <span className="font-bold">Date:</span>{" "}
              {new Date(event.date).toLocaleDateString()}
            </div>
            <div className="text-gray-600">
              <span className="font-bold">Schedule:</span>{" "}
              {event.schedule.map((time, id) => (
                <div key={id}>{time}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
