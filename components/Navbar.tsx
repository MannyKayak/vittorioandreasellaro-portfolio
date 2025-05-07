import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow">
      <div className="flex">
        <Link href={"/"} className="flex w-20">
          <Image
            src="/bimknow_image.png"
            width={200}
            height={20}
            alt="Bim(k)now"
          />
        </Link>
      </div>

      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <Link href="/bimknow/bimEventsCalendar">Calendario</Link>
        </li>
        <li>
          <Link href="/bimknow">Eventi</Link>
        </li>
        <li>
          <Link href="/articles">Articoli</Link>
        </li>
        <li>
          <Link href="/bimknow">Contatti</Link>
        </li>
      </ul>
    </nav>
  );
}
