import { fetchAPI } from "@/lib/api";
import PoojaScheduleClient from "@/Components/pooja/PoojaScheduleClient";

export const metadata = {
  title: "Pooja Schedule | DivyaGyanam",
};

export default async function PoojaSchedulePage() {  

const temples = await fetchAPI("/templecollections?populate=*");

// const dailyPoojas = await fetchAPI("/daily-poojas?populate=*");

// const specialSevas = await fetchAPI("/special-sevas?populate=*");
const dailySchedules = await fetchAPI(
  "/daily-pooja-schedules?populate=*"
);

const sevaSchedules = await fetchAPI(
  "/special-seva-schedules?populate=*"
);
// const templeId = dailySchedules.data[0].temple.id;

// const selectedTemple = temples.data.find(
//   (temple) => temple.id === templeId
// );
  return (
   <>
    
    <PoojaScheduleClient temples={temples.data} poojas={dailySchedules.data} sevas={sevaSchedules.data}/>
  
   </>
  );
}