import Link from "next/link"
function TempleCard({temple}){
    const imageUrl =
  process.env.NEXT_PUBLIC_STRAPI_URL + temple.TempleImage.url;
    return(
        <Link href={`/temple/${temple.Slug}`}>
        <div className="p-2 bg-[#1A160E] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300" style={{border: "1px solid rgb(129, 102, 48)"}}>
          <img src={imageUrl} alt="" className="w-full h-64 object-cover" />
           <div className="p-2">
            <h2 className="text-1xl font-bold mb-3 decoration-[#50d71e] text-white">{temple.TempleName}</h2>
            <p className="text-[#B3AB7C] mb-5 decoration-[#50d71e] line-clamp-2 text-sm">{temple.ShortDescription}</p>
           
            {/* <button className="bg-primary-gold text-white px-5 py-2 rounded-lg" style={{cursor:'pointer'}}>Know More</button> */}
             
           </div>
        </div>
        </Link>
    )
}

export default TempleCard