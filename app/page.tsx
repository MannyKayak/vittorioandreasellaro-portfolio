"use client";

import AboutSection from "@/components/AboutSection";
import BimSection from "@/components/BimSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="font-bim-medium">
      {/* hero section */}
      <HeroSection />
      <BimSection />
      <AboutSection portraitUrl="/foto1.jpg" conferenceUrl="/foto2.jpg" />
    </main>
  );
}
