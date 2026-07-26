import { fetchAPI } from "@/lib/api"
import TempleCard from "@/Components/TempleCard"
export default async function TempleSection(){
    const data = await fetchAPI("/templecollections?populate=*&sort=createdAt:desc")
    const temples = data.data
    return(
    <section className="py-20 bg-primary-brown">
        <div className="max-w-8xl mx-auto px-5">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-gold"> Famous Temples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
                {
                    temples.map((temple)=>(
                        <TempleCard key={temple.id} temple={temple}/>
                    ))
                }

            </div>

        </div>

    </section>
    )
}

 