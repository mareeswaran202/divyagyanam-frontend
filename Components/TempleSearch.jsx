'use client'
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";

function TempleSearch() {
    const router = useRouter();
    const [searchText, setSearchText] = useState("");
    const [states, setStates] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [deities, setDeities] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [allTemples, setAllTemples] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedState, setSelectedState] = useState("");
const [selectedDistrict, setSelectedDistrict] = useState("");
const [selectedDeity, setSelectedDeity] = useState("");

const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        loadTempleData();
    }, []);

    useEffect(() => {
        if (searchText.trim() === "") {
            setSuggestions([]);
            return;
        }

        const results = allTemples.filter(
            (item) =>
                item.TempleName?.toLowerCase().includes(searchText.toLowerCase()) ||
                item.Deity?.toLowerCase().includes(searchText.toLowerCase()) ||
                item.Location?.toLowerCase().includes(searchText.toLowerCase())
        );

        setSuggestions(results.slice(0, 5));
    }, [searchText, allTemples]);
    useEffect(() => {
  if (!showSuggestions) return;

  if (searchText.trim() === "") {
    setSuggestions([]);
    return;
  }

  const results = allTemples.filter(
    (item) =>
      item.TempleName?.toLowerCase().includes(searchText.toLowerCase()) ||
      item.Deity?.toLowerCase().includes(searchText.toLowerCase()) ||
      item.Location?.toLowerCase().includes(searchText.toLowerCase())
  );

  setSuggestions(results.slice(0, 5));

}, [searchText, allTemples, showSuggestions]);
    const loadTempleData = async () => {
        try {
            const res = await fetch(
                "http://localhost:1337/api/templecollections?pagination[pageSize]=1000"
            );

            const data = await res.json();

            const temples = data.data;
            setAllTemples(temples);

            const uniqueStates = [
                ...new Set(temples.map(item => item.State))
            ];

            const uniqueDistricts = [
                ...new Set(temples.map(item => item.District))
            ];

            const uniqueDeities = [
                ...new Set(temples.map(item => item.Deity))
            ];

            setStates(uniqueStates);
            setDistricts(uniqueDistricts);
            setDeities(uniqueDeities);

        } catch (error) {
            console.log(error);
        }
    };
 const handleSearch = () => {

  const params = new URLSearchParams();

  if (searchText)
    params.append("search", searchText);

  if (selectedState)
    params.append("state", selectedState);

  if (selectedDistrict)
    params.append("district", selectedDistrict);

  if (selectedDeity)
    params.append("deity", selectedDeity);

  router.push(`/temple-search?${params.toString()}`);
};
    return (
        <section className="bg-primary-brown py-6">
            <div className="container mx-auto px-5">
                <div className="bg-[#1a0f07]/90 border border-[#6b4a1b] rounded-xl p-4">
                    <form className="grid grid-cols-1 md:grid-cols-5 gap-3">

                        {/* Search */}
                        <div className="relative md:col-span-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                                />
                            </svg>

                            <input
                                type="text" value={searchText} onChange={(e) => { setSearchText(e.target.value); setShowSuggestions(true); }}
                                placeholder="Search Temple, Deity, Place..."
                                className="w-full h-14 bg-transparent border border-[#6b4a1b] rounded-lg pl-12 pr-4 text-white placeholder:text-gray-400 focus:outline-none"
                            />
                            {showSuggestions && suggestions.length > 0 && (
                                <div className="absolute top-full left-0 w-full bg-white rounded-lg mt-1 shadow-lg z-50">
                                    {suggestions.map((item) => (
                                        <div
                                            key={item.id}
                                            onClick={() => {
                                                setSearchText(item.TempleName);
                                                setSuggestions([]);
                                                setShowSuggestions(false);
                                            }}
                                            className="px-4 py-3 cursor-pointer hover:bg-gray-100 text-black border-b"
                                        >
                                            <div className="font-medium">
                                                {item.TempleName}
                                            </div>

                                            <div className="text-xs text-gray-500">
                                                {item.Location} • {item.Deity}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>

                        {/* State */}
                        <select className="h-14 bg-transparent border border-[#6b4a1b] rounded-lg px-4 text-white outline-none" value={selectedState} onChange={(e)=>setSelectedState(e.target.value)}>
                            <option value="" className="text-black">
                                Select State
                            </option>
                            {
                                states.map((state) => <option className="text-black" key={state.state} value={state.State}>{state}</option>)
                            }
                        </select>

                        {/* Deity */}
                        <select className="h-14 bg-transparent border border-[#6b4a1b] rounded-lg px-4 text-white outline-none" value={selectedDeity} onChange={(e)=>setSelectedDeity(e.target.value)}>
                            <option value="" className="text-black">
                                Select Deity
                            </option>
                            {
                                deities.map((deitie) => <option className="text-black" key={deitie.deities}>{deitie}</option>)
                            }
                        </select>

                        {/* District */}
                        <select className="h-14 bg-transparent border border-[#6b4a1b] rounded-lg px-4 text-white outline-none" value={selectedDistrict} onChange={(e)=>setSelectedDistrict(e.target.value)}>
                            <option value="" className="text-black">
                                Select District
                            </option>
                            {districts.map((dist) => <option className="text-black" key={dist.District}>{dist}</option>)}
                        </select>
                        <div>
                            <button
                                className="bg-primary-gold hover:bg-[#c59f28] text-black font-medium px-10 py-3 
                                rounded-lg flex items-center gap-2" type="button" onClick={handleSearch}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                                    />
                                </svg>
                                Search
                            </button>
                        </div>

                    </form>

                    {/* Search Button */}

         

                </div>
            </div>
            <div className="container mx-auto px-5 mt-5 text-white">
  Found {searchResults.length} Temples
</div>
        </section>
        
    )
}

export default TempleSearch