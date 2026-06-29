import FestivalCalendar from "@/Components/Festival/FestivalCalendar";
import { fetchAPI } from "@/lib/api";
import todayPanchang from "@/lib/panchang";
export default async function Festivals() {

  const templeEvents = await fetchAPI("/temple-events?populate=*");
  const temples = await fetchAPI("/templecollections?populate=*");
  // const panchang = await fetch("http://localhost:3000/api/panchang", {
  //   cache: "no-store",
  // }).then((res) => res.json());

  return (
    <FestivalCalendar
      events={templeEvents.data}
      panchang={todayPanchang}
      temples={temples.data}
    />
  );
}