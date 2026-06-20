import { fetchAPI } from "@/lib/api"
import { Headset, Globe } from "lucide-react"
export default async function TopHeader(){
   const res = await fetchAPI('/top-header?populate=*')
   const topheaderdata = res.data
   if(!topheaderdata) return null
    return(
  <div className="bg-primary-brown border-b border-primary-gold text-sm text-white">
  <div className="container mx-auto px-4 py-4 relative flex items-center">

    {/* Center Text */}
    <div className="absolute left-1/2 -translate-x-1/2 text-primary-gold font-semibold text-base">
      {topheaderdata.devotionalText}
    </div>

    {/* Right Side */}
    <div className="ml-auto flex items-center gap-4">

        <h1 className="topheadersupporttext"><Headset size={16} color="#d4af37"/>{topheaderdata.supportText}</h1>
      
      <div className="border border-primary-gold flex px-2 py-1 rounded-md items-center">
        <Globe size={16}/>
        <select className="bg-transparent outline-none cursor-pointer">
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

      <a
        href={topheaderdata.loginButtonUrl}
        className="border border-primary-gold flex px-2 py-1 rounded-md cursor-pointer"
      >
        {topheaderdata.loginButtonText}
      </a>

      <a
        href={topheaderdata.memberButtonUrl}
        className="bg-primary-gold text-black px-4 py-1.5 rounded-md font-semibold cursor-pointer text-base"
      >
        {topheaderdata.memberButtonText}
      </a>

    </div>
  </div>
</div>
    )
}

 