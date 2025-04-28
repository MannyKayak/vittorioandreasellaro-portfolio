import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="max-w-md mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Contatti</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nome"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <textarea
            placeholder="Messaggio"
            className="w-full border px-3 py-2 rounded"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-teal-400 text-white px-6 py-2 rounded-full hover:bg-teal-500 transition"
          >
            Invia
          </button>
        </form>
        <div className="mt-6 flex gap-6">
          <a
            href="mailto:marco.rossi@email.com"
            className="text-teal-700 hover:underline"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/marcorossi"
            className="text-teal-700 hover:underline"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </main>
    </>
  );
}
