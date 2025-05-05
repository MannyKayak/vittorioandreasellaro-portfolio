import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow">
      <Image src="/bimknow_image.png" width={200} height={20} alt="Bim(k)now" />
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <Link href="/bimknow">Calendario</Link>
        </li>
        <li>
          <Link href="/bimknow">Eventi</Link>
        </li>
        <li>
          <Link href="/bimknow">Articoli</Link>
        </li>
        <li>
          <Link href="/bimknow">Contatti</Link>
        </li>
      </ul>
    </nav>
  );
}
