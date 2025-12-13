import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-12">
      <div className="flex items-center gap-3 bg-white/40 backdrop-blur-md px-5 py-3 rounded-xl shadow-md">
        
        {/* Previous */}
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className={`px-3 py-2 rounded-lg shadow bg-white hover:bg-gray-100 ${
            currentPage === 1 && "opacity-40 cursor-not-allowed"
          }`}
        >
          &lt;
        </button>

        {/* Page Numbers */}
        {pages.map((num) => (
          <button
            key={num}
            onClick={() => onPageChange(num)}
            className={`px-4 py-2 text-sm font-semibold rounded-lg shadow 
              ${currentPage === num ? "bg-blue-600 text-white" : "bg-white hover:bg-gray-100"}
            `}
          >
            {num}
          </button>
        ))}

        {/* Next */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className={`px-3 py-2 rounded-lg shadow bg-white hover:bg-gray-100 ${
            currentPage === totalPages && "opacity-40 cursor-not-allowed"
          }`}
        >
          &gt;
        </button>

      </div>
    </div>
  );
}
