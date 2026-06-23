import { partners, testimonials } from "@/data/utilityjs"
function TestimonialSection(){
    return(
        <section className="py-10 bg-primary-brown">
  <div className="container mx-auto px-5">

    <div className="grid lg:grid-cols-2 gap-6">

      {/* Testimonials */}

      <div className="bg-[#120904] border border-[#8b5a16] rounded-2xl p-6">

        <div className="text-center mb-6">
          <h2 className="text-primary-gold uppercase tracking-wider">
            What Devotees Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">

          {testimonials.map((item) => (
            <div key={item.id}>

              <p className="text-gray-300 text-sm leading-7 mb-5">
                "{item.review}"
              </p>

              <div className="flex items-center gap-3">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>

                  <h4 className="text-white font-medium">
                    {item.name}
                  </h4>

                  <p className="text-xs text-gray-400">
                    {item.location}
                  </p>

                  <div className="text-primary-gold text-sm mt-1">
                    ★★★★★
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Partners */}

      <div className="bg-[#120904] border border-[#8b5a16] rounded-2xl p-6">

        <div className="text-center mb-6">
          <h2 className="text-primary-gold uppercase tracking-wider">
            Featured Partners
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6 items-center">

          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 object-contain"
              />
            </div>
          ))}

        </div>

      </div>

    </div>

  </div>
</section>
    )
}

export default TestimonialSection