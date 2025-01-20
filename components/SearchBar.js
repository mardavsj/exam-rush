import { useState } from "react";
import { useRouter } from "next/router";
import { getRouteForSearchTerm } from "@/utils/searchRoutes";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchQuery.trim()) {
            const route = getRouteForSearchTerm(searchQuery.trim());

            if (route) {
                router.push(route);
            } else {
                const topic = searchQuery.toLowerCase();
                router.push(`/tutorials/${topic.split(" ")[0]}?topic=${encodeURIComponent(searchQuery)}`);
            }

            setSearchQuery("");
        }
    };

    return (
        <form onSubmit={handleSearch} className="flex relative gap-2">
            <div className="absolute inset-y-0 flex items-center ps-3">
                <svg
                    className="w-4 h-4 text-purple-900"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
            </div>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block p-2 ps-8 w-80 text-sm border border-gray-300 rounded"
                placeholder="Search Python/DBMS/Java + topic name"
                required
            />
            <button
                type="submit"
                className="text-white bg-purple-700 rounded hover:bg-[#963be5] text-sm px-4 hover:bg-gradient-to-tl"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;

