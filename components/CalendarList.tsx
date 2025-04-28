import EventCard from "./EventCard";

const events = [
  {
    title: "BIMknow: Digitalizzazione in cantiere",
    date: "12 Maggio 2025",
    description:
      "Un evento dedicato all’innovazione digitale nei processi di cantiere. Ospiti speciali e casi studio.",
  },
  {
    title: "BIMknow: OpenBIM e interoperabilità",
    date: "30 Giugno 2025",
    description:
      "Approfondimento sulle soluzioni OpenBIM e sulle strategie per una progettazione collaborativa.",
  },
];

export default function CalendarList() {
  return (
    <div className="space-y-4">
      {events.map((ev, i) => (
        <EventCard key={i} {...ev} />
      ))}
    </div>
  );
}
