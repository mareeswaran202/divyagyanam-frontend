import Slider from "@/Components/Slider";
import { fetchAPI } from "@/lib/api"; 
import ServiceCard from "@/Components/ServiceCard";
import LiveSection from "@/Components/LiveSection";
 
export default async function Home() {
  const data = await fetchAPI("/hero-sliders?populate=*");
  return (
    <>
    <Slider slides={data.data}/>
    <ServiceCard/>    
    <LiveSection/>
  
    
    </>
  );
}
