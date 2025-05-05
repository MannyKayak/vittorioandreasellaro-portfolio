import Navbar from "@/components/Navbar";
import CalendarList from "@/components/CalendarList";

export default function BIMknow() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto py-12 px-4">
        <div className="flex flex-row gap-2">
          <h2 className="flex text-2xl font-bold mb-4 text-gray-800">
            Tutti gli eventi{" "}
          </h2>
          <h2 className="flex text-2xl font-bold mb-4 text-teal-600">
            {" "}
            BIM(k)now!
          </h2>
        </div>

        <CalendarList />
      </main>
    </>
  );
}
