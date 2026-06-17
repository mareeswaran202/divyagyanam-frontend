import { fetchAPI } from "@/lib/api";

export default async function LiveDarshanSection() {
  const data = await fetchAPI(
    "/live-darshans?populate=*"
  );

  const live = data.data[0];

  if (!live) return null;
const embedUrl = live.LiveVideoUrl.replace(
  "watch?v=",
  "embed/"
);
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-4xl font-bold text-center mb-12">
          Live Darshan
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <iframe
              width="100%"
              height="450"
              src={embedUrl}
              title={live.TempleName}
              allowFullScreen
              className="rounded-xl"
            />
          </div>

          <div>
            <span className="inline-block bg-red-600 px-4 py-1 rounded-full mb-4">
              🔴 LIVE
            </span>

            <h3 className="text-3xl font-bold mb-4">
              {live.TempleName}
            </h3>

            <p className="text-gray-300">
              {live.Description}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}