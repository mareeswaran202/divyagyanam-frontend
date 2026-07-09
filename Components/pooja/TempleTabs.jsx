"use client";

import {
  Clock3,
  HandCoins,
  Sparkles,
  CalendarDays,
  Images,
  Info,
} from "lucide-react";
const tabs = [
  { id: 'pooja', label: 'Pooja Timings', icon: Clock3 },
  { id: 'seva', label: 'Seva Services', icon: HandCoins },
  { id: 'specialpoojas', label: 'Special Poojas', icon: Sparkles },
  { id: 'booking', label: 'Booking', icon: CalendarDays },
  { id: 'gallerytab', label: 'Gallery', icon: Images },
  { id: 'abouttemple', label: 'About Temple', icon: Info },

]
export default function TempleTabs({activeTab, setActiveTab}) {
  
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-8 overflow-hidden">
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide">

        {
          tabs.map((tab) => {
            const Icon = tab.icon;
           return(
             <button key={tab.id}  onClick={()=>{setActiveTab(tab.id)}}  className={`flex items-center gap-2 px-6 py-4 transition ${activeTab == tab.id ? "border-b-2 border-purple-600 text-purple-600 bg-purple-50 font-semibold" : "text-gray-600 hover:text-purple-600 hover:bg-gray-50"}}`}
             id={tab.id} >
             <Icon size={18}/> 
             {tab.label}
              </button>
           )
          })
        }

      </div>
    </div>
  );
}