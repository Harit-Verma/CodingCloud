import { useState } from "react";
import { FiGrid, FiList, FiSearch, FiFilter } from "react-icons/fi";

const CoursesHeader = () => {
  const [view, setView] = useState("grid");

  return (
    <div className="w-full bg-gradient-to-b from-[#eef1ff] to-[#d9c7ff] p-10 rounded-xl shadow-sm">

      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-5">
        Home <span className="mx-1">›</span> <span className="text-black">All Courses</span>
      </div>

      {/* Title + Count */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-4xl font-extrabold text-gray-900">All Courses</h1>

        <div className="mt-3 md:mt-0 bg-white px-4 py-2 rounded-full shadow-sm text-blue-600 font-medium">
          🎓 50 Courses
        </div>
      </div>

      <p className="text-gray-600 mt-2 mb-6">
        Courses that help beginner designers become true unicorns.
      </p>

      {/* Grid / List Toggle + count + search box */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5 border-b pb-6">

        {/* Left section */}
        <div className="flex items-center gap-5">

          {/* Grid Button */}
          <button
            onClick={() => setView("grid")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full border transition
              ${view === "grid" ? "bg-white shadow text-blue-600" : "bg-transparent text-gray-600"}`}
          >
            <FiGrid /> Grid
          </button>

          {/* List Button */}
          <button
            onClick={() => setView("list")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full border transition
              ${view === "list" ? "bg-white shadow text-blue-600" : "bg-transparent text-gray-600"}`}
          >
            <FiList /> List
          </button>

          <span className="text-gray-600 ml-3">
            Showing 1–9 of 19 results
          </span>
        </div>

        {/* Search + Filter Button */}
        <div className="flex items-center gap-3 w-full lg:w-auto">

          {/* Search */}
          <div className="flex items-center bg-white shadow px-4 py-2 rounded-full w-full lg:w-80">
            <input
              type="text"
              placeholder="Search Your Course.."
              className="flex-1 outline-none"
            />
            <FiSearch className="text-gray-600" />
          </div>

          {/* Filter */}
          <button className="flex items-center gap-2 bg-white shadow px-6 py-3 rounded-full">
            <FiFilter /> Filter
          </button>
        </div>
      </div>

      {/* Below Sorting & Filters Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-6">

        {/* Sort by */}
        <select className="p-3 rounded-lg shadow bg-white text-gray-700">
          <option>Default</option>
        </select>

        {/* Author */}
        <select className="p-3 rounded-lg shadow bg-white text-gray-700">
          <option>Select Author</option>
        </select>

        {/* Offer */}
        <select className="p-3 rounded-lg shadow bg-white text-gray-700">
          <option>Free</option>
          <option>Paid</option>
        </select>

        {/* Category */}
        <select className="p-3 rounded-lg shadow bg-white text-gray-700">
          <option>Graphic</option>
          <option>Development</option>
          <option>Marketing</option>
        </select>

        {/* Price Range */}
        <div className="flex flex-col">
          <input type="range" className="accent-blue-600" />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>Price:</span>
            <span>$130 - $300</span>
          </div>

          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
            FILTER
          </button>
        </div>

      </div>

    </div>
  );
};

export default CoursesHeader;
