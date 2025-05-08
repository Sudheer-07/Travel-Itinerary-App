import { CiLocationOn } from "react-icons/ci";
import { FiCalendar, FiChevronDown, FiSearch, FiClock } from "react-icons/fi";
import { FaUser, FaUserFriends, FaUsers, FaUserAlt } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const TravelPlanner = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedDuration, setSelectedDuration] = useState("");
    const [showDestinationInput, setShowDestinationInput] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [travelGroup, setTravelGroup] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const searchRef = useRef(null);
    const datePickerRef = useRef(null);
    const debouncedSearch = useDebounce(searchQuery, 300);

    const durations = [
        "1 day",
        "2 days",
        "3 days",
        "1 week",
        "2 weeks",
        "1 month"
    ];
    const travelGroups = [
        { key: "solo", label: "Solo", icon: <FaUser size={32} /> },
        { key: "couple", label: "Couple", icon: <FaUserFriends size={32} /> },
        { key: "family", label: "Family", icon: <FaUsers size={32} /> },
        { key: "friends", label: "Friends", icon: <FaUserAlt size={32} /> },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowDestinationInput(false);
            }
            if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
                setShowDatePicker(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const searchLocations = async () => {
            if (!debouncedSearch) {
                setSearchResults([]);
                return;
            }

            setIsLoading(true);
            try {
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${debouncedSearch}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&types=(cities)`
                );
                const data = await response.json();
                setSearchResults(data.predictions || []);
            } catch (error) {
                console.error("Error fetching locations:", error);
                setSearchResults([]);
            }
            setIsLoading(false);
        };

        searchLocations();
    }, [debouncedSearch]);

    const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelectedIndex((prev) => 
                prev < searchResults.length - 1 ? prev + 1 : prev
            );
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        } else if (e.key === "Enter" && selectedIndex >= 0) {
            e.preventDefault();
            handleSelectLocation(searchResults[selectedIndex]);
        } else if (e.key === "Escape") {
            setShowDestinationInput(false);
        }
    };

    const handleSelectLocation = (location) => {
        setSearchQuery(location.description);
        setShowDestinationInput(false);
        setSearchResults([]);
        setSelectedIndex(-1);
    };

    const formatDateRange = () => {
        if (!startDate && !endDate) return "Select dates";
        if (!endDate) return startDate.toLocaleDateString();
        return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
    };

    return (
        <div className="flex flex-col w-full max-w-[480px] mx-auto px-6 py-8 sm:px-8 sm:py-12">
            <div className="flex flex-col items-start justify-center space-y-8">
                {/* Destination Search */}
                <div className="w-full space-y-3">
                    <label className="text-xl font-bold text-gray-900 dark:text-white">Where would you like to go?</label>
                    <div className="relative w-full" ref={searchRef}>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Enter destination..."
                                className="w-full h-14 pl-12 pr-4 rounded-xl bg-white dark:bg-neutral-900 text-stone-950 dark:text-white border border-gray-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-gray-400 dark:placeholder:text-neutral-400 text-lg"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setShowDestinationInput(true);
                                }}
                                onFocus={() => setShowDestinationInput(true)}
                                onKeyDown={handleKeyDown}
                            />
                            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-neutral-400" size={24} />
                        </div>

                        {showDestinationInput && (searchQuery || isLoading) && (
                            <div className="absolute left-0 right-0 mt-2 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-lg z-10 max-h-72 overflow-y-auto">
                                {isLoading ? (
                                    <div className="px-6 py-4 text-gray-500 dark:text-gray-400">Loading...</div>
                                ) : searchResults.length > 0 ? (
                                    searchResults.map((result, index) => (
                                        <div
                                            key={result.place_id}
                                            className={`px-6 py-4 cursor-pointer flex items-center space-x-3
                                                ${index === selectedIndex ? 'bg-gray-100 dark:bg-neutral-800' : 'hover:bg-gray-50 dark:hover:bg-neutral-800'}
                                                text-gray-900 dark:text-white`}
                                            onClick={() => handleSelectLocation(result)}
                                        >
                                            <CiLocationOn className="text-gray-400 dark:text-neutral-400" size={24} />
                                            <span className="text-lg">{result.description}</span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="px-6 py-4 text-gray-500 dark:text-gray-400">No results found</div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Date Selection */}
                <div className="w-full space-y-3">
                    <label className="text-xl font-bold text-gray-900 dark:text-white">When are you traveling?</label>
                    <div className="relative w-full" ref={datePickerRef}>
                        <button
                            type="button"
                            className="flex items-center w-full h-14 px-6 rounded-xl bg-white dark:bg-neutral-900 text-gray-900 dark:text-white border border-gray-200 dark:border-neutral-700 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            onClick={() => setShowDatePicker(!showDatePicker)}
                        >
                            <FiCalendar className="mr-4 text-gray-400 dark:text-neutral-400" size={24} />
                            <span className={startDate ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-neutral-400"}>
                                {formatDateRange()}
                            </span>
                        </button>
                        {showDatePicker && (
                            <div className="absolute left-0 mt-2 z-20">
                                <DatePicker
                                    selected={startDate}
                                    onChange={(dates) => {
                                        const [start, end] = dates;
                                        setStartDate(start);
                                        setEndDate(end);
                                        if (end) setShowDatePicker(false);
                                    }}
                                    startDate={startDate}
                                    endDate={endDate}
                                    selectsRange
                                    inline
                                    minDate={new Date()}
                                    className="rounded-xl shadow-lg"
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Duration Selection */}
                <div className="w-full space-y-3">
                    <label className="text-xl font-bold text-gray-900 dark:text-white">How long will you stay?</label>
                    <div className="relative w-full">
                        <button
                            type="button"
                            className="flex items-center w-full h-14 px-6 rounded-xl bg-white dark:bg-neutral-900 text-gray-900 dark:text-white border border-gray-200 dark:border-neutral-700 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            onClick={() => setShowDropdown((prev) => !prev)}
                        >
                            <FiClock className="mr-4 text-gray-400 dark:text-neutral-400" size={24} />
                            <span className={selectedDuration ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-neutral-400"}>
                                {selectedDuration || "Select Duration"}
                            </span>
                            <FiChevronDown className="ml-auto text-gray-400 dark:text-neutral-400" size={24} />
                        </button>
                        {showDropdown && (
                            <div className="absolute left-0 right-0 mt-2 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-lg z-10">
                                {durations.map((duration) => (
                                    <div
                                        key={duration}
                                        className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-neutral-800 cursor-pointer text-gray-900 dark:text-white text-lg"
                                        onClick={() => {
                                            setSelectedDuration(duration);
                                            setShowDropdown(false);
                                        }}
                                    >
                                        {duration}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Travel Group Selection */}
                <div className="w-full space-y-3">
                    <label className="text-xl font-bold text-gray-900 dark:text-white">Who are you traveling with?</label>
                    <div className="grid grid-cols-2 gap-4 w-full">
                        {travelGroups.map(group => (
                            <button
                                key={group.key}
                                type="button"
                                className={`flex flex-row items-center h-20 rounded-xl border transition text-lg font-medium
                                    bg-white dark:bg-neutral-900 border-gray-300 dark:border-neutral-700 text-gray-900 dark:text-white
                                    ${travelGroup === group.key ? 'border-yellow-400' : ''}
                                    hover:border-blue-400`}
                                onClick={() => setTravelGroup(group.key)}
                            >
                                <span className={`flex items-center justify-center w-12 h-12 rounded ${travelGroup === group.key ? 'bg-yellow-200 border-2 border-yellow-400' : ''} mx-3`}>
                                    {group.icon}
                                </span>
                                <span className="text-lg">{group.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Continue Button */}
                <button
                    type="button"
                    className="w-full h-16 bg-[#3b5bfd] text-white text-xl font-semibold rounded-xl hover:bg-[#2741b6] transition border-2 border-[#3b5bfd] focus:outline-none focus:ring-2 focus:ring-yellow-400 mt-4"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};