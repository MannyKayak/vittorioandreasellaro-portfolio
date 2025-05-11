import { BimEvent } from "@/app/types";
import LocationIcon from "./icons/LocationIcon";
import DetailsIcon from "./icons/DetailsIcon";
import { useRouter } from "next/navigation";

export default function EventCard(CardProps: BimEvent) {
  const router = useRouter();
  return (
    <div className="bg-white rounded-3xl shadow-md p-6 border-l-4 border-teal-600 hover:scale-105 transition-transform">
      <div className="flex flex-row justify-between items-center">
        <h2 className=" font-bold text-lg mb-1">{CardProps.title}</h2>
        <button
          onClick={() => router.push(`/bimknow/${CardProps.id}`)}
          className=""
        >
          <DetailsIcon />
        </button>
      </div>
      <div className="flex flex-row items-start gap-2">
        <span className="flex bg-teal-600 text-white text-md font-bold px-3 py-1 rounded-full mb-2 items-center">
          {CardProps.date.toString()}
        </span>
        <div className="flex flex-row items-center text-xl font-semibold">
          <LocationIcon />
          <h4>{CardProps.location}</h4>
        </div>
      </div>
      <p className="text-gray-700">{CardProps.description}</p>
    </div>
  );
}
