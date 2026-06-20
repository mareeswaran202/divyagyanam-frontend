import { fetchAPI } from "@/lib/api"
import Link from "next/link"
export default async function ServiceCard(){
    const servicecard = await fetchAPI('/quick-access-card?populate[HomeCard][populate]=*')
    const cardres = servicecard.data.HomeCard
    return(
       <section className="bg-primary-brown container mx-auto">
        <div className="max-w-full mx-auto px-5">
           <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-9 gap-3 border border-b-gray-50" style={{borderBottom:'none'}}>
{
             cardres.map((card)=>
              <div className="flex flex-col items-center border border-primary-gold justify-center py-3 rounded-xl">
                 <img src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${card.Image.url}`} alt="" />
                <h1 className="text-white mt-3">{card.Title}</h1>
               
            <Link href={card.URLLink} className="text-primary-gold">{card.URLText}
              
            </Link>
              </div>
        )
        }
        </div>
        </div>
       
        
       </section>
    )
}