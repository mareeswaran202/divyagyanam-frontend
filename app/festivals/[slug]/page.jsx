import { fetchAPI } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function FestivalDetails({ params }) {

  const { slug } = await params;

  const response = await fetchAPI(
    `/temple-events?filters[Slug][$eq]=${slug}&populate[temples][populate]=*`
  );

  const festival = response.data[0];

  if (!festival) {
    notFound();
  }

  return (
<section className="bg-primary-brown py-16">

  <div className="max-w-7xl mx-auto px-5">

    {/* ================= Hero ================= */}

    <div className="relative rounded-3xl overflow-hidden h-[450px] shadow-2xl">

      <img
        src={
          festival.Banner?.url
            ? process.env.NEXT_PUBLIC_STRAPI_URL + festival.Banner.url
            : festival.temples?.[0]?.TempleImage?.url
            ? process.env.NEXT_PUBLIC_STRAPI_URL +
              festival.temples[0].TempleImage.url
            : "/images/default-festival.jpg"
        }
        className="w-full h-full object-cover"
        alt={festival.EventName}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute bottom-10 left-10 text-white">

        <span className="bg-primary-gold text-black px-4 py-2 rounded-full font-semibold">
          {festival.EventType}
        </span>

        <h1 className="text-6xl font-bold mt-5">
          {festival.EventName}
        </h1>

        <p className="text-xl mt-4 text-gray-200">
          📅 {new Date(festival.EventDate).toLocaleDateString("en-IN",{
            day:"numeric",
            month:"long",
            year:"numeric"
          })}
        </p>

      </div>

    </div>

    {/* ================= Info Strip ================= */}

    <div className="bg-[#181208] rounded-3xl border border-[#4b3817] mt-10 overflow-hidden">

      <div className="grid grid-cols-2 lg:grid-cols-4">

        <div className="p-8 text-center border-r border-[#4b3817]">
          <p className="text-gray-400 uppercase text-sm">
            Festival Date
          </p>

          <h3 className="text-white text-2xl font-bold mt-2">
            {new Date(festival.EventDate).toLocaleDateString("en-IN")}
          </h3>
        </div>

        <div className="p-8 text-center border-r border-[#4b3817]">

          <p className="text-gray-400 uppercase text-sm">
            Festival Type
          </p>

          <h3 className="text-primary-gold text-2xl font-bold mt-2">
            {festival.EventType}
          </h3>

        </div>

        <div className="p-8 text-center border-r border-[#4b3817]">

          <p className="text-gray-400 uppercase text-sm">
            Temples
          </p>

          <h3 className="text-white text-2xl font-bold mt-2">
            {festival.temples?.length || 0}
          </h3>

        </div>

        <div className="p-8 text-center">

          <p className="text-gray-400 uppercase text-sm">
            Recurring
          </p>

          <h3 className="text-white text-2xl font-bold mt-2">
            {festival.IsRecurring ? "Yes" : "No"}
          </h3>

        </div>

      </div>

    </div>

    {/* ================= About ================= */}

    <div className="bg-[#1A160E] rounded-3xl p-10 shadow-xl mt-12">

      <h2 className="text-4xl font-bold mb-8 text-primary-gold">
        About the Festival
      </h2>

      <div className="space-y-6 text-lg leading-9 text-[#B3AB7C]">

        {festival.Description?.map((block,index)=>(

          <p key={index}>
            {block.children?.map(child=>child.text)}
          </p>

        ))}

      </div>

    </div>

    {/* ================= Associated Temples ================= */}

    <div className="mt-14">

      <h2 className="text-4xl text-white font-bold mb-8">
        Associated Temples
      </h2>

      {festival.temples?.length > 0 ? (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {festival.temples.map((temple)=>{

            const image =
              temple.TempleImage?.url
                ? process.env.NEXT_PUBLIC_STRAPI_URL +
                  temple.TempleImage.url
                : "/images/default-temple.jpg";

            return(

              <a
                key={temple.id}
                href={`/temple/${temple.Slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300"
              >

                <img
                  src={image}
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
                  alt={temple.TempleName}
                />

                <div className="p-6 bg-[#1A160E]">

                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {temple.TempleName}
                  </h3>

                  <p className="text-primary-gold  mb-3">
                     {temple.Location}, {temple.State}
                  </p>

                  <p className="text-[#B3AB7C]  line-clamp-3">
                    {temple.ShortDescription}
                  </p>

                  <span className="inline-block mt-6 text-primary-gold font-semibold">
                    View Temple →
                  </span>

                </div>

              </a>

            )

          })}

        </div>

      ) : (

        <div className="bg-white rounded-2xl p-10">
          No associated temples found.
        </div>

      )}

    </div>

  </div>

</section>
);

}