type Props = {
  title: string;
  date: string;
  description: string;
};

export default function EventCard({ title, date, description }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-400 hover:scale-105 transition-transform">
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <span className="inline-block bg-teal-400 text-white text-xs px-3 py-1 rounded-full mb-2">
        {date}
      </span>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
