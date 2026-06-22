import { fetchAPI } from "@/lib/api";
import Link from "next/link";
export default async function TempleSearchPage({
  searchParams,
}) {

  const params = await searchParams;

  const search = params?.search || "";
  const state = params?.state || "";
  const district = params?.district || "";
  const deity = params?.deity || "";

  console.log("search =", search);
  console.log("state =", state);
  console.log("district =", district);
  console.log("deity =", deity);

  const data = await fetchAPI(
    "/templecollections?populate=*"
  );

  let temples = data.data;

  if (search) {
    temples = temples.filter(
      (item) =>
        item.TempleName?.toLowerCase().includes(search.toLowerCase()) ||
        item.Deity?.toLowerCase().includes(search.toLowerCase()) ||
        item.Location?.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (state) {
    temples = temples.filter(
      (item) => item.State === state
    );
  }

  if (district) {
    temples = temples.filter(
      (item) => item.District === district
    );
  }

  if (deity) {
    temples = temples.filter(
      (item) => item.Deity === deity
    );
  }

  console.log("Filtered Temples:", temples.length);
  return (
    <div className="max-w-7xl mx-auto px-5 mb-5">

      <h1 className="text-3xl font-bold mb-6 text-center mt-3">
        Found {temples.length} Temples
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {temples.map((temple) => (
          <div
            key={temple.id}
            className="bg-white rounded-xl overflow-hidden shadow"
          >

            <img
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${temple.TempleImage?.url}`}
              alt={temple.TempleName}
              className="w-full h-60 object-cover"
            />

            <div className="p-5">

              <h2 className="text-xl font-semibold">
                {temple.TempleName}
              </h2>

              <p>{temple.Location}</p>

              <p>{temple.Deity}</p>
              <Link
  href={`/temple/${temple.Slug}`}
  className="inline-flex items-center justify-center mt-4 bg-[#D4AF37] hover:bg-[#c59f28] text-black font-medium px-5 py-2 rounded-lg transition"
>
  Know More
</Link>

            </div>
             
          </div>
        ))}

      </div>

    </div>
  );
}