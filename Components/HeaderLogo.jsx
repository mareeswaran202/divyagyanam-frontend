import { fetchAPI } from "@/lib/api"
import Header from "./Header"
export default async function HeaderLogo(){
    const logores = await fetchAPI('/site-setting?populate=*')
    const res = logores.data
    console.log(res)
    const logoimageurl = process.env.NEXT_PUBLIC_STRAPI_URL + res.logo.url
    console.log({logoimageurl})
    return <Header logoimg={logoimageurl}/>}