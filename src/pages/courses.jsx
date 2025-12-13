import React, { useState } from "react";
import courses from "../Data/coursesData";
import CourseCard from "../components/CourseCard";
import CoursesHeader from "./CoursesHeader";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Courses() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedCourses = courses.slice(startIndex, startIndex + itemsPerPage);

  return (
      <>
      <Navbar/>
      
    <div className="px-6 md:px-12 lg:px-20 py-16 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Our Courses
      </h1>

      {/* Header with search / filters / toggles */}
      <CoursesHeader />

      {/* Responsive Grid */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-10
          mt-10
        "
      >
        {displayedCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 200, behavior: "smooth" }); // optional: scroll up when page changes
        }}
      />
    </div>
    <Footer/>
    </>
  );
}
