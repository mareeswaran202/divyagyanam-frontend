import { fetchAPI } from "@/lib/api"
import TempleCard from "./TempleCard"
export default async function TempleSection(){
    const data = await fetchAPI("/templecollections?populate=*")
    const temples = data.data
    return(
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
            <h2 className="text-4xl font-bold text-center mb-12"> Famous Temples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

 