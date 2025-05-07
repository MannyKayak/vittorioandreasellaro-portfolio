"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0  z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/bimknow_image.png"
                width={120}
                height={40}
                alt="Bim(k)now"
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-gray-700 font-semibold">
            <Link
              href="/bimknow/bimEventsCalendar"
              className="hover:text-teal-600 active:text-teal-600 transition"
            >
              Calendario
            </Link>
            <Link
              href="/bimknow"
              className="hover:text-teal-600 active:text-teal-600 transition"
            >
              Eventi
            </Link>
            <Link
              href="/articles"
              className="hover:text-teal-600 active:text-teal-600 transition"
            >
              Articoli
            </Link>
            <Link
              href="/bimknow"
              className="hover:text-teal-600 active:text-teal-600 transition"
            >
              Contatti
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-teal-600 active:text-teal-600 transition"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner px-6 pb-4 pt-2">
          <Link
            href="/bimknow/bimEventsCalendar"
            className="block py-2 text-gray-700 hover:text-teal-600 active:text-teal-600"
          >
            Calendario
          </Link>
          <Link
            href="/bimknow"
            className="block py-2 text-gray-700 hover:text-teal-600 active:text-teal-600"
          >
            Eventi
          </Link>
          <Link
            href="/articles"
            className="block py-2 text-gray-700 hover:text-teal-600 active:text-teal-600"
          >
            Articoli
          </Link>
          <Link
            href="/bimknow"
            className="block py-2 text-gray-700 hover:text-teal-600 active:text-teal-600"
          >
            Contatti
          </Link>
        </div>
      )}
    </nav>
  );
}
