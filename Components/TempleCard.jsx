import Link from "next/link"
function TempleCard({temple}){
    const imageUrl =
  process.env.NEXT_PUBLIC_STRAPI_URL + temple.TempleImage.url;
    return(
        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
          <img src={imageUrl} alt="" className="w-full h-64 object-cover" />
           <div className="p-6">
            <h2 className="text-2xl font-bold mb-3 decoration-[#50d71e]">{temple.TempleName}</h2>
            <p className="text-gray-600 mb-5 decoration-[#50d71e]">{temple.ShortDescription}</p>
            <Link href={`/temple/${temple.Slug}`}>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg" style={{cursor:'pointer'}}>Know More</button>
            </Link>
           </div>
        </div>
    )
}

export default TempleCard