import { fetchAPI } from "@/lib/api"
import Header from "./Header"
export default async function HeaderLogo(){
    const logores = await fetchAPI('/site-setting?populate=*')
    const res = logores.data
    
    const logoimageurl = process.env.NEXT_PUBLIC_STRAPI_URL + res.logo.url
     
    return <Header logoimg={logoimageurl}/>}