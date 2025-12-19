import React, { useState } from 'react';
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, 
  FaPhone, FaEnvelope, FaBook, FaUsers, FaStar, 
  FaBookmark, FaArrowRight, FaShoppingCart
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Profile = () => {
  const [activeCourse, setActiveCourse] = useState(null);

  // Sample courses data
  const courses = [
    {
      id: 1,
      title: "React Front To Back",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      lessons: 12,
      students: 50,
      rating: 5,
      reviews: 15,
      price: 60,
      oldPrice: 120,
      discount: "-40%",
      description: "It is a long established fact that a reader will be distracted.",
      instructor: "Angela",
      category: "Development",
      instructorImage: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      title: "PHP Beginner Advanced",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
      lessons: 12,
      students: 50,
      rating: 5,
      reviews: 15,
      progress: 90,
      description: "It is a long established fact that a reader will be distracted.",
      instructor: "Angela",
      category: "Development",
      instructorImage: "https://i.pravatar.cc/150?img=2"
    },
    {
      id: 3,
      title: "Angular Zero to Mastery",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
      lessons: 8,
      students: 30,
      rating: 5,
      reviews: 5,
      price: 80,
      oldPrice: 100,
      discount: "-10%",
      description: "Angular Js long fact that a reader will be distracted by the readable.",
      instructor: "Slaughter",
      category: "Languages",
      instructorImage: "https://i.pravatar.cc/150?img=3"
    },
    {
      id: 4,
      title: "Web Front To Back",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
      lessons: 20,
      students: 40,
      rating: 5,
      reviews: 15,
      discount: "-40%",
      progress: 45,
      description: "Web Js long fact that a reader will be distracted by the readable.",
      instructor: "Angela",
      category: "Development",
      instructorImage: "https://i.pravatar.cc/150?img=4"
    },
    {
      id: 5,
      title: "SQL Beginner Advanced",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
      lessons: 12,
      students: 50,
      rating: 5,
      reviews: 15,
      price: 60,
      oldPrice: 120,
      discount: "-20%",
      description: "It is a long established fact that a reader will be distracted by the readable.",
      instructor: "Angela",
      category: "Development",
      instructorImage: "https://i.pravatar.cc/150?img=5"
    },
    {
      id: 6,
      title: "JS Zero to Mastery",
      image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600",
      lessons: 8,
      students: 30,
      rating: 5,
      reviews: 5,
      price: 80,
      oldPrice: 100,
      description: "Angular Js long fact that a reader will be distracted by the readable.",
      instructor: "Slaughter",
      category: "Languages",
      instructorImage: "https://i.pravatar.cc/150?img=6"
    }
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="relative h-[350px] bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Profile Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="https://i.pravatar.cc/150?img=12" 
                alt="John Due" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">John Due</h1>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <FaStar key={i} className="w-4 h-4" />)}
                </div>
                <span className="text-gray-600 text-sm">(15 Reviews)</span>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <FaBook className="text-purple-600" />
                  <span>20 Courses</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-blue-600" />
                  <span>40 Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Biography Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Biography</h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm the Front-End Developer for #Pixcels IT in India, OR. I have serious passion for UI effects, 
                animations and creating intuitive, dynamic user experiences.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-4 mb-6">
                <a href="#" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition">
                  <FaFacebookF />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition">
                  <FaTwitter />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center hover:bg-pink-700 transition">
                  <FaInstagram />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition">
                  <FaLinkedinIn />
                </a>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <a href="tel:+12025550174" className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition">
                  <FaPhone className="text-purple-600" />
                  <span>+1-202-555-0174</span>
                </a>
                <a href="mailto:example@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition">
                  <FaEnvelope className="text-purple-600" />
                  <span>example@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="bg-gradient-to-br from-orange-400 to-pink-500 text-white rounded-2xl p-6 text-center w-full">
                <div className="mb-4">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/128/2225/2225433.png" 
                    alt="Badge" 
                    className="w-16 h-16 mx-auto"
                  />
                </div>
                <span className="text-xl font-bold">Bestseller</span>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  {course.discount && (
                    <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 shadow-md">
                      <span className="text-red-600 font-bold text-sm">{course.discount}</span>
                      <span className="text-gray-600 text-xs block">Off</span>
                    </div>
                  )}
                </div>

                {/* Course Content */}
                <div className="p-6">
                  {/* Rating & Bookmark */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-400">
                        {[...Array(course.rating)].map((_, i) => (
                          <FaStar key={i} className="w-3 h-3" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">({course.reviews} Reviews)</span>
                    </div>
                    <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-purple-600 hover:text-purple-600 transition">
                      <FaBookmark className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 cursor-pointer transition">
                    {course.title}
                  </h3>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <FaBook className="w-4 h-4" />
                      <span>{course.lessons} Lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUsers className="w-4 h-4" />
                      <span>{course.students} Students</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Progress Bar (if exists) */}
                  {course.progress && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">Complete</span>
                        <span className="text-sm font-semibold text-gray-700">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Instructor */}
                  {!course.progress && (
                    <div className="flex items-center gap-3 mb-4">
                      <img 
                        src={course.instructorImage} 
                        alt={course.instructor}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="text-sm">
                        <span className="text-gray-600">By </span>
                        <a href="#" className="text-purple-600 font-semibold hover:underline">{course.instructor}</a>
                        <span className="text-gray-600"> In </span>
                        <a href="#" className="text-gray-700 hover:text-purple-600">{course.category}</a>
                      </div>
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    {course.price ? (
                      <>
                        <div>
                          <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                          {course.oldPrice && (
                            <span className="text-sm text-gray-400 line-through ml-2">${course.oldPrice}</span>
                          )}
                        </div>
                        <button className="text-purple-600 font-semibold text-sm hover:text-purple-700 flex items-center gap-2 transition group">
                          Learn More
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </>
                    ) : (
                      <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                        Download Certificate
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mb-12">
          <nav className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition">
              ←
            </button>
            <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition">
              1
            </button>
            <button className="w-10 h-10 rounded-lg bg-purple-600 text-white flex items-center justify-center">
              2
            </button>
            <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition">
              3
            </button>
            <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition">
              →
            </button>
          </nav>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Profile;