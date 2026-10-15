
import { fetchAPI } from "@/lib/api";

function getEmbedUrl(url = "") {
  try {
    const parsedUrl = new URL(url);
    let videoId = "";

    if (
      parsedUrl.hostname === "www.youtube.com" ||
      parsedUrl.hostname === "youtube.com" ||
      parsedUrl.hostname === "m.youtube.com"
    ) {
      if (parsedUrl.pathname.startsWith("/live/")) {
        videoId = parsedUrl.pathname.split("/")[2];
      } else if (parsedUrl.pathname === "/watch") {
        videoId = parsedUrl.searchParams.get("v") || "";
      } else if (parsedUrl.pathname.startsWith("/embed/")) {
        return url;
      }
    } else if (parsedUrl.hostname === "youtu.be") {
      videoId = parsedUrl.pathname.split("/")[1] || "";
    }

    return videoId
      ? `https://www.youtube.com/embed/${videoId}`
      : "";
  } catch {
    return "";
  }
}

export default async function LiveDarshanSection() {
  const data = await fetchAPI("/live-darshans?populate=*", {
    cache: "no-store",
  });

  const live = data?.data?.[0];

  if (!live) return null;

  const embedUrl = getEmbedUrl(live.LiveVideoUrl);

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12">
          Live Darshan
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            {embedUrl ? (
              <iframe
                width="100%"
                height="450"
                src={embedUrl}
                title={live.TempleName || "Live Darshan"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full rounded-xl"
              />
            ) : (
              <p className="text-red-400">
                Invalid YouTube URL. Please check the Live Darshan URL in Strapi.
              </p>
            )}
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
 