"use client";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { BimEvent } from "@/app/types";

export default function CalendarList() {
  const [events, setEvents] = useState<BimEvent[]>([]);
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("/data/events.json");
      const eventsList = await res.json();
      setEvents(eventsList);
    };

    fetchEvents();
  }, []);
  return (
    <div className="space-y-4">
      {events.map((ev, i) => (
        <EventCard key={i} {...ev} />
      ))}
    </div>
  );
}
