import { fetchAPI } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function FestivalDetails({ params }) {

  const { slug } = await params;

  const response = await fetchAPI(
    `/temple-events?filters[Slug][$eq]=${slug}&populate=*`
  );

  const festival = response.data[0];

  if (!festival) {
    notFound();
  }

  return (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-5">

      {/* Festival Header */}
      <div className="bg-white rounded-2xl shadow-md p-10 mb-8">

        <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold mb-4">
          {festival.EventType}
        </span>

        <h1 className="text-5xl font-bold mb-4">
          {festival.EventName}
        </h1>

        <p className="text-gray-500">
          Festival Date :
          <span className="font-semibold ml-2">
            {festival.EventDate}
          </span>
        </p>

      </div>

      {/* Description */}
      <div className="bg-white rounded-2xl shadow-md p-10 mb-8">

        <h2 className="text-3xl font-bold mb-6">
          About the Festival
        </h2>

        {festival.Description?.map((block, index) => (
          <p
            key={index}
            className="text-gray-700 leading-8 mb-5"
          >
            {block.children?.map(child => child.text)}
          </p>
        ))}

      </div>

      {/* Related Temples */}
      <div className="bg-white rounded-2xl shadow-md p-10">

        <h2 className="text-3xl font-bold mb-6">
          Associated Temples
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {festival.Temple?.map((temple) => (

            <div
              key={temple.id}
              className="border rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-2">
                {temple.TempleName}
              </h3>

              <p className="text-gray-600 mb-2">
                {temple.Location}, {temple.State}
              </p>

              <p className="text-gray-700">
                {temple.ShortDescription}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  </section>
);

}