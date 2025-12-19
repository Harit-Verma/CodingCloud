import React from 'react';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 

export default function InstructorPage() {
  const instructors = [
    {
      id: 1,
      name: "Zohaib Oneill",
      role: "Math Teacher",
      location: "CO Miego, AD, USA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Alvin Rivera",
      role: "Department Head",
      location: "CO Miego, AD, USA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Joao Lloyd",
      role: "Math Teacher",
      location: "CO Miego, AD, USA",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Bella",
      role: "Math Teacher",
      location: "CO Miego, AD, USA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      name: "Claudia Pruitt",
      role: "Teacher",
      location: "CO Miego, AD, USA",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      id: 6,
      name: "Judy Oneill",
      role: "Teacher",
      location: "CO Miego, AD, USA",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
    },
    {
      id: 7,
      name: "Levi Arm",
      role: "Teacher",
      location: "CO Miego, AD, USA",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      id: 8,
      name: "Fred Guer",
      role: "Economic",
      location: "CO Miego, AD, USA",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ============================================ */}
      {/* INSERT NAVBAR COMPONENT HERE */}
      <Navbar />
      {/* ============================================ */}

      {/* Breadcrumb Area */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Instructor</h2>
            <div className="flex items-center justify-center gap-2 text-sm">
              <a href="/" className="hover:underline">Home</a>
              <ChevronRight className="w-4 h-4" />
              <span className="opacity-90">Instructor</span>
            </div>
          </div>
        </div>
      </div>

      {/* Instructor Grid Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {instructor.name}
                  </h4>
                  <h6 className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
                    {instructor.role}
                  </h6>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{instructor.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16">
            <nav>
              <ul className="flex items-center justify-center gap-2">
                <li>
                  <button
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                </li>
                <li>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors">
                    1
                  </button>
                </li>
                <li>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-600 text-white border border-purple-600">
                    2
                  </button>
                </li>
                <li>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors">
                    3
                  </button>
                </li>
                <li>
                  <button
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* INSERT FOOTER COMPONENT HERE */}
      <Footer />
      {/* ============================================ */}
    </div>
  );
}