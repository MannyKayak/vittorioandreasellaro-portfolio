import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow">
      <span className="font-bold text-xl text-gray-800">Marco Rossi</span>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <Link href="/about">Chi sono</Link>
        </li>
        <li>
          <Link href="/bimknow">BIMknow</Link>
        </li>
        <li>
          <Link href="/calendar">Calendario</Link>
        </li>
        <li>
          <Link href="/contact">Contatti</Link>
        </li>
      </ul>
    </nav>
  );
}
