import {
  MapPin,
  Landmark,
  Clock3,
  Phone,
  BadgeCheck,
} from "lucide-react";

 

export default function TempleHeaderCard({ temple }) {
    const image = process.env.NEXT_PUBLIC_STRAPI_URL + temple.TempleImage.url
  

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">

      <div className="flex flex-col lg:flex-row justify-between gap-6">

        {/* Left */}

        <div className="flex gap-5">

          <div className="relative w-32 h-32 rounded-xl overflow-hidden">
            
            <img
              src={image}
              alt={temple.TempleName}
              fill
              className="object-cover"
            />

          </div>

          <div>

            <div className="flex items-center gap-3">

              <h2 className="text-2xl font-bold">
                {temple.TempleName}
              </h2>

              {temple.Featured && (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <BadgeCheck size={15} />
                  Active
                </span>
              )}

            </div>

            <div className="mt-3 space-y-2 text-gray-600">

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                {temple.Location}, {temple.District}, {temple.State}
              </div>

              <div className="flex items-center gap-2">
                <Landmark size={16} />
                {temple.Deity} Temple
              </div>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="space-y-4">

          <div className="flex items-start gap-3">

            <Clock3 className="text-purple-600" size={18} />

            <div>

              <p className="font-semibold">
                Temple Timings
              </p>

              <p className="text-gray-500">
                {temple.TempleTiming}
              </p>

            </div>

          </div>

          <div className="flex items-start gap-3">

            <Phone className="text-purple-600" size={18} />

            <div>

              <p className="font-semibold">
                Contact
              </p>

              <p className="text-gray-500">
                {temple.ContactNumber}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}