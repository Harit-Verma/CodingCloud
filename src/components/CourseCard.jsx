import React from 'react';

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 max-w-md">
      {/* Hero Image Section */}
      <div className="relative overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-72 object-cover object-center"
        />
      </div>

      {/* Content Section */}
      <div className="p-8">
        {/* Rating & Bookmark */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="flex text-orange-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-500 text-sm font-medium">({course.reviews || 0} Reviews)</span>
          </div>
          <button className="text-gray-400 hover:text-indigo-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>

        {/* Course Title */}
        <h3 className="text-3xl font-bold text-gray-900 mb-5">
          {course.title}
        </h3>

        {/* Lessons & Students */}
        <div className="flex items-center gap-6 text-gray-600 text-base mb-5">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>{course.lessons} Lessons</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>{course.students} Students</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-base mb-6 leading-relaxed">
          {course.description || "It is a long established fact that a reader will be distracted."}
        </p>

        {/* Instructor & Price */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <img 
              src={course.instructorImage || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"}
              alt={course.instructor || "Instructor"}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-base text-gray-700">
                By <span className="font-semibold text-gray-900">{course.instructor || "Instructor"}</span>
              </p>
              <p className="text-sm text-gray-500">
                In {course.category}
              </p>
            </div>
          </div>

          <div className="text-right">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-gray-900">{course.price}</span>
              {course.oldPrice && (
                <span className="text-xl text-gray-400 line-through">{course.oldPrice}</span>
              )}
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <button className="w-full bg-white border border-gray-300 text-gray-700 font-semibold py-4 px-6 rounded-xl hover:border-gray-400 transition-all flex items-center justify-center gap-2 group text-base">
          Learn More
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}