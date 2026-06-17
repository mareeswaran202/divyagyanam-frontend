import Slider from "@/Components/Slider";
import { fetchAPI } from "@/lib/api";
import TempleSection from "@/Components/TempleSection";
import LiveDarshanSection from "@/Components/LiveDarshanSection";
 
export default async function Home() {
  const data = await fetchAPI("/hero-sliders?populate=*");
  return (
    <>
    <Slider slides={data.data}/>
    <TempleSection/>
    <LiveDarshanSection/>
    
    </>
  );
}
