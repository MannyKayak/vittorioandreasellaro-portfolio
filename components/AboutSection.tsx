// components/AboutMe.tsx
import Image from "next/image";

interface AboutMeProps {
  portraitUrl: string;
  conferenceUrl: string;
}

export default function AboutSection({
  portraitUrl,
  conferenceUrl,
}: AboutMeProps) {
  return (
    <section
      id="about-me-section"
      className="w-full max-w-6xl mx-auto px-4 py-20 bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Testo principale - in alto a sinistra */}
        <div className="md:col-span-7 space-y-5">
          <h2 className="text-4xl font-bold text-teal-600 dark:text-white">
            Su di me...
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            <strong style={{ color: "#00897b" }}>
              Vittorio Andrea Sellaro
            </strong>{" "}
            è un Ingegnere Civile Ambientale, Dottore in Ingegneria
            Edile-Architettura e Docente universitario. Con un’esperienza
            pluriennale nella formazione, è specializzato in{" "}
            <strong style={{ color: "#00897b" }}>
              Building Information Modeling (BIM)
            </strong>{" "}
            e relatore del ciclo di conferenze{" "}
            <em style={{ color: "#00897b" }}>“BIM (K)now!”</em>.
          </p>
          <p className="text-md text-gray-600 dark:text-gray-400">
            Attivo presso l’Università di Pavia come docente a contratto, è
            promotore della cultura digitale applicata al progetto edilizio
            integrato. Le sue competenze spaziano dalla progettazione al
            rilievo, con particolare attenzione all’innovazione e alla
            didattica.
          </p>
          <p className="italic text-sm text-gray-500 dark:text-gray-400">
            “L'innovazione passa dalla conoscenza condivisa.”
          </p>
        </div>

        {/* Foto principale - in alto a destra */}
        <div className="md:col-span-5">
          <div className="w-full h-80 relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src={portraitUrl}
              alt="Vittorio Andrea Sellaro"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Foto secondaria - in basso a sinistra */}
        <div className="md:col-start-2 md:col-span-5 mt-8 md:mt-0">
          <div className="w-full h-64 relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src={conferenceUrl}
              alt="BIM Know Conference"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Riquadro aggiuntivo - può essere per citazione o altro */}
        <div className="md:col-span-5 space-y-3">
          <h3 className="text-xl font-semibold text-teal-600 dark:text-white">
            Conferenze & Divulgazione
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Dal 2020 promuove il ciclo{" "}
            <strong style={{ color: "#00897b" }}>"BIM (K)now!"</strong>, evento
            annuale che coinvolge accademici, professionisti ed enti pubblici,
            diventato punto di riferimento nella diffusione del BIM in Italia.
          </p>
        </div>
      </div>
    </section>
  );
}
