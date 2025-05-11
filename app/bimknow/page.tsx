import CalendarList from "@/components/CalendarList";

export default function BIMknow() {
  return (
    <>
      <main className="max-w-3xl mx-auto mt-4 px-4 min-h-screen h-full justify-center font-bim-medium text-black">
        <div className="flex gap-2 justify-center">
          <h1 className=" text-4xl font-bold mb-4 text-gray-700">
            Tutti gli eventi{" "}
            <strong className="text-4xl font-bold mb-4 text-teal-600">
              BIM(k)now!
            </strong>{" "}
          </h1>
        </div>

        <CalendarList />
      </main>
    </>
  );
}
