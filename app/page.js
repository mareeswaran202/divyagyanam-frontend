import Slider from "@/Components/Slider";
import { fetchAPI } from "@/lib/api"; 
import ServiceCard from "@/Components/ServiceCard";
import LiveSection from "@/Components/LiveSection";
import TempleSearch from "@/Components/TempleSearch";
import MediaSection from "@/Components/media";
import Donate from "@/Components/Donate";
import HomeStats from "@/Components/HomeStats";
import TestimonialSection from "@/Components/TestimonialSection";
 
export default async function Home() {
  const data = await fetchAPI("/hero-sliders?populate=*");
  return (
    <>
    <Slider slides={data.data}/>
    <TempleSearch/>
    <ServiceCard/>    
    <LiveSection/>
    <MediaSection/>
    <Donate/>
    <HomeStats/>
    <TestimonialSection/>
  
    
    </>
  );
}
