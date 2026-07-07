import { HandCoins } from "lucide-react";

function getDescription(description) {
  if (!description || !description.length) return "";

  return description[0]?.children?.[0]?.text || "";
}

export default function SpecialSevaCard({ seva }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-5 last:border-0">

      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
          <HandCoins className="w-5 h-5 text-purple-600" />
        </div>

        <div>
          <h3 className="font-semibold text-lg">
            {seva.special_seva.SevaName}
          </h3>

          <p className="text-sm text-gray-500">
            {getDescription(seva.special_seva.Description)}
          </p>
        </div>

      </div>

      <div className="text-right">

        <p className="text-lg font-bold text-purple-600">
          ₹ {seva.price}
        </p>

        <button className="mt-2 px-4 py-2 rounded-lg bg-purple-600 text-white text-sm">
          Book Now
        </button>

      </div>

    </div>
  );
}