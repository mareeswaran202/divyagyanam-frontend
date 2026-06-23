function Donate(){
    return(
        <section className="py-8 bg-primary-brown">
  <div className="container mx-auto px-5">

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

      {/* Donate */}
      <div className="group border border-[#7c5415] rounded-xl bg-[#120904] p-5 hover:border-primary-gold transition-all">

        <div className="flex gap-4 items-start">

          <img
            src="/icons/indian-rupee.svg"
            alt="Donate"
            className="w-16 h-16 object-contain"
          />

          <div>

            <h3 className="text-white uppercase text-sm font-semibold mb-2">
              Donate To Temples
            </h3>

            <p className="text-gray-300 text-sm leading-6">
              Support Annadhanam, Festivals,
              Renovation & other Sevas
            </p>

            <a
              href="/coming-soon"
              className="inline-flex items-center gap-2 mt-3 text-primary-gold text-sm"
            >
              Donate Now
              <span>→</span>
            </a>

          </div>

        </div>

      </div>

      {/* Member */}
      <div className="group border border-[#7c5415] rounded-xl bg-[#120904] p-5 hover:border-primary-gold transition-all">

        <div className="flex gap-4 items-start">

          <img
            src="/icons/users-round.svg"
            alt="Member"
            className="w-16 h-16 object-contain"
          />

          <div>

            <h3 className="text-white uppercase text-sm font-semibold mb-2">
              Become A Member
            </h3>

            <p className="text-gray-300 text-sm leading-6">
              Get alerts on Festivals,
              Pujas, Live Darshan & more
            </p>

            <a
              href="/coming-soon"
              className="inline-flex items-center gap-2 mt-3 text-primary-gold text-sm"
            >
              Register Free
              <span>→</span>
            </a>

          </div>

        </div>

      </div>

      {/* Advertise */}
      <div className="group border border-[#7c5415] rounded-xl bg-[#120904] p-5 hover:border-primary-gold transition-all">

        <div className="flex gap-4 items-start">

          <img
            src="/icons/megaphone.svg"
            alt="Advertise"
            className="w-16 h-16 object-contain"
          />

          <div>

            <h3 className="text-white uppercase text-sm font-semibold mb-2">
              Advertise With Us
            </h3>

            <p className="text-gray-300 text-sm leading-6">
              Hotels, Travel, Pooja Services
              & More Business
            </p>

            <a
              href="/coming-soon"
              className="inline-flex items-center gap-2 mt-3 text-primary-gold text-sm"
            >
              Know More
              <span>→</span>
            </a>

          </div>

        </div>

      </div>

      {/* Review */}
      <div className="group border border-[#7c5415] rounded-xl bg-[#120904] p-5 hover:border-primary-gold transition-all">

        <div className="flex gap-4 items-start">

          <img
            src="/icons/square-pen.svg"
            alt="Review"
            className="w-16 h-16 object-contain"
          />

          <div>

            <h3 className="text-white uppercase text-sm font-semibold mb-2">
              Write A Review
            </h3>

            <p className="text-gray-300 text-sm leading-6">
              Share your experience that will help others
            </p>

            <a
              href="/coming-soon"
              className="inline-flex items-center gap-2 mt-3 text-primary-gold text-sm"
            >
              Write Review
              <span>→</span>
            </a>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
    )
}

export default Donate