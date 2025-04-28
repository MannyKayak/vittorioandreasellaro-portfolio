import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="w-full h-screen relative flex items-center justify-center bg-gray-100">
        <div className="absolute inset-0">
          <Image
            src="/Screenshot.png"
            alt="Architectural Concept"
            layout="fill"
            objectFit="cover"
            className="opacity-60"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            SVA un Grandissimo Arch(k)itetto
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Se non conosci la krikkia è perchè sei un qualunque
          </p>
        </div>
      </section>

      {/* BIM(K)now Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-8">BIM(K)now</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">2024</h3>
            <ul className="list-disc list-inside">
              <li>Introduction to BIM Workflows</li>
              <li>Advanced Modeling Techniques</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2023</h3>
            <ul className="list-disc list-inside">
              <li>What is BIM?</li>
              <li>BIM Tools Overview</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ARCH(K)now Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">ARCH(K)now</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">2024</h3>
            <ul className="list-disc list-inside">
              <li>Creative Design Approaches</li>
              <li>Futuristic Architecture Trends</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2023</h3>
            <ul className="list-disc list-inside">
              <li>Architectural Storytelling</li>
              <li>From Concept to Construction</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
