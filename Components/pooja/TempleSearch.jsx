"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function TempleSearch({ temples,
    selectedTemple,
    setSelectedTemple, }) {
    const [search, setSearch] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    const filteredTemples = temples.filter((temple) =>
        temple.TempleName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="mb-6 relative">

            <div className="relative">
                <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                />

                <input
                    type="text"
                    placeholder="Search temples..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setShowDropdown(true);
                    }}
                    className="w-full pl-12 pr-4 py-4 border rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>

            {showDropdown && search && (
                <div className="absolute w-full bg-white rounded-xl shadow-lg mt-2 z-50">

                    {filteredTemples.map((temple) => (
                        <div
                            key={temple.id}
                            onClick={() => {
                                setSelectedTemple(temple);
                                setSearch(temple.TempleName);
                                setShowDropdown(false);
                            }}
                            className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
                        >
                            {temple.TempleName}
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}