import { libraryItems, mediaItems } from "@/data/utilityjs"
import { Clock, MapPinCheckInside, Locate, Building, TramFront } from "lucide-react"
import Link from "next/link"
function MediaSection(){
    return(
        <section className="py-12 bg-primary-brown">
  <div className="container mx-auto px-5">

    <div className="grid lg:grid-cols-3 gap-6">

      {/* Digital Library */}
      <div className="relative rounded-2xl border border-[#8b5a16] bg-[#120904] overflow-hidden">

        <div className="p-5">

          <h3 className="text-center text-white text-sm uppercase tracking-wider mb-5">
            Digital Devotional Library
          </h3>

          <div className="grid grid-cols-3 gap-3">

            {libraryItems.map((item) => (
              <div
                key={item.title}
                className="bg-[#1a0f07] border border-[#3d250a] rounded-xl p-4 text-center hover:border-primary-gold transition"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="w-10 h-10 mx-auto mb-2"
                />

                <h4 className="text-white text-sm">
                  {item.title}
                </h4>

                <Link href={item.url} className="text-primary-gold text-xs mt-1">{item.subtitle}</Link>

                 
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
           <Link href="/coming-soon" className="bg-primary-gold text-black px-6 py-2 rounded-lg font-medium"> 
              View All Library →
             </Link>
          </div>

        </div>
      </div>

      {/* Devotional Media */}
      <div className="relative rounded-2xl border border-[#8b5a16] bg-[#120904] overflow-hidden">

        <div className="p-5">

          <h3 className="text-center text-white text-sm uppercase tracking-wider mb-5">
            Devotional Media
          </h3>

          <div className="grid grid-cols-3 gap-3">

            {mediaItems.map((item) => (
              <div
                key={item.title}
                className="bg-[#1a0f07] border border-[#3d250a] rounded-xl p-4 text-center hover:border-primary-gold transition"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="w-10 h-10 mx-auto mb-2"
                />

                <h4 className="text-white text-sm">
                  {item.title}
                </h4>
                
                <Link href={item.url} className="text-primary-gold text-xs mt-1">{item.subtitle}</Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
        
             <Link href="/coming-soon" className="bg-primary-gold text-black px-6 py-2 rounded-lg font-medium"> 
              View All Media →
             </Link>
          </div>

        </div>
      </div>

      {/* Plan Visit */}
      <div className="relative rounded-2xl border border-[#8b5a16] bg-[#120904] overflow-hidden">

        <div className="grid md:grid-cols-2 h-full">

          <div className="p-5">

            <h3 className="text-white uppercase text-sm tracking-wider mb-6">
              Plan Your Visit
            </h3>

            <ul className="space-y-4">

              <li className="flex items-center gap-3 text-white">
                <Clock color="#d4af37" size={20}/>
                Temple Timings
              </li>

              <li className="flex items-center gap-3 text-white">
                <MapPinCheckInside color="#d4af37" size={20}/>
                How to Reach
              </li>

              <li className="flex items-center gap-3 text-white">
                <Locate color="#d4af37" size={20}/>
                Nearby Places
              </li>

              <li className="flex items-center gap-3 text-white">
                <Building color="#d4af37" size={20}/>
                Accommodation
              </li>

              <li className="flex items-center gap-3 text-white">
                <TramFront color="#d4af37" size={20}/>
                Travel Services
              </li>

            </ul>

            
            <Link style={{display:'block'}} href="/coming-soon" className="mt-6 bg-primary-gold text-black px-6 py-2 rounded-lg font-medium"> 
               Plan Your Trip →
             </Link>

          </div>

          <div className="relative p-3">

           
           <div className="rounded-xl overflow-hidden h-[350px]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1894498.6644711473!2d77.16265087171405!3d12.66075584448267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf677ebfd8c89%3A0xc57d350aa60b4c6c!2sSri%20Ranganatha%20Swamy%20Temple!5e1!3m2!1sen!2sin!4v1782213752415!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

          

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
    )
}

export default MediaSection