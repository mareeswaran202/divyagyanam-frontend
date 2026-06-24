import { fetchAPI } from "@/lib/api";
import { notFound } from "next/navigation";
import TempleGallery from "@/Components/TempleGallery";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
export default async function TempleDetails({ params }) {
  const { slug } = await params;

  const data = await fetchAPI(
    `/templecollections?filters[Slug][$eq]=${slug}&populate=*`
  );

  const temple = data.data[0];

  if (!temple) {
    notFound();
  }

  const imageUrl =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    temple.TempleImage.url;

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      {/* Banner */}
      <img
        src={imageUrl}
        alt={temple.TempleName}
        className="w-full h-[500px] object-cover rounded-xl"
      />

      {/* Temple Name */}
      <h1 className="text-4xl font-bold mt-8">
        {temple.TempleName}
      </h1>

      {/* Description */}
        {/* <p className="mt-6 text-lg leading-8 text-gray-700">
        {temple.Description}
      </p> */}
      
      <div className="mt-6 prose prose-lg max-w-none prose-p:text-[17px]">
       <BlocksRenderer content={temple.DescriptionRich}/>
      </div>
     <section className="mt-16">
       <h2 className="text-3xl font-bold mb-8">
    Temple Gallery
  </h2>
       <TempleGallery gallery={temple.Gallery}/>
     </section>
    </div>
  );
}