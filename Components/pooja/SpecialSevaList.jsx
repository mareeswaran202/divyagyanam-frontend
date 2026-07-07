import SpecialSevaCard from "./SpecialSevaCard";

export default function SpecialSevaList({ sevas }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

      <h2 className="text-2xl font-bold mb-6">
        Book Pooja / Seva
      </h2>

      {sevas.map((seva) => (
        <SpecialSevaCard
          key={seva.id}
          seva={seva}
        />
      ))}

    </div>
  );
}