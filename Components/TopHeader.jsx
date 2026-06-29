import { fetchAPI } from "@/lib/api"
import { Headset, Globe } from "lucide-react"
export default async function TopHeader(){
   const res = await fetchAPI('/top-header?populate=*')
   const topheaderdata = res.data
   if(!topheaderdata) return null
    return(
   <div className="bg-primary-brown border-b border-primary-gold text-sm text-white">
  <div className="container mx-auto px-4 py-3 relative flex items-center">

    {/* Center Text - Desktop Only */}
    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 text-primary-gold font-semibold text-base">
      {topheaderdata.devotionalText}
    </div>

    {/* Right Side */}
    <div className="ml-auto flex items-center gap-2 md:gap-4">

      {/* Hide on Mobile */}
      <h1 className="hidden md:flex topheadersupporttext">
        <Headset size={16} color="#d4af37" />
        {topheaderdata.supportText}
      </h1>

      {/* Language */}
      <div className="border border-primary-gold flex items-center px-2 py-1 rounded-md">
        <Globe size={15} />
        <select className="bg-transparent outline-none cursor-pointer text-xs md:text-sm">
          {topheaderdata.Language.map((lang) => (
            <option
              key={lang.LanguageCode}
              value={lang.LanguageCode}
              className="text-black"
            >
              {lang.LanguageName}
            </option>
          ))}
        </select>
      </div>

      {/* Login */}
      <a
        href={topheaderdata.loginButtonUrl}
        className="border border-primary-gold px-3 py-1 rounded-md text-xs md:text-sm"
      >
        {topheaderdata.loginButtonText}
      </a>

      {/* Become Member */}
      <a
        href={topheaderdata.memberButtonUrl}
        className="bg-primary-gold text-black px-3 md:px-4 py-1.5 rounded-md font-semibold text-xs md:text-base"
      >
        {topheaderdata.memberButtonText}
      </a>

    </div>
  </div>
</div>
    )
}

 