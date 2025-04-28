import Navbar from "@/components/Navbar";
import CalendarList from "@/components/CalendarList";

export default function Calendar() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Calendario Eventi
        </h2>
        <CalendarList />
      </main>
    </>
  );
}
