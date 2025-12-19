import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Instructor = () => {
  const [activeTab, setActiveTab] = useState('instructor-rules');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    bio: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      username: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      bio: ''
    });
  };

  const tabs = [
    { id: 'become-instructor', label: 'Become an Instructor', content: 'Educational technology ipsum dolor sit amet consectetur, adipisicing elit. Tempora sequi doloremque dicta quia unde odio nam minus reiciendis ullam aliquam, dolorum ab quisquam cum numquam nemo iure cumque iste. Accusamus necessitatibus.' },
    { id: 'instructor-rules', label: 'Instructor Rules', content: 'Physical education ipsum dolor sit amet consectetur, adipisicing elit. Tempora sequi doloremque dicta quia unde odio nam minus reiciendis ullam aliquam, dolorum ab quisquam cum numquam nemo iure cumque iste. Accusamus necessitatibus.' },
    { id: 'start-courses', label: 'Start with courses', content: 'Experiencing music ipsum dolor sit amet consectetur, adipisicing elit. Tempora sequi doloremque dicta quia unde odio nam minus reiciendis ullam aliquam, dolorum ab quisquam cum numquam nemo iure cumque iste. Accusamus necessitatibus.' }
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ============================================ */}
      {/* ADD NAVBAR COMPONENT HERE */}
       <Navbar />
      {/* ============================================ */}

      {/* Breadcrumb Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Become a Teacher</h2>
            <div className="flex items-center justify-center gap-2 text-sm">
              <a href="/" className="hover:underline">Home</a>
              <span>/</span>
              <span>Become a Teacher</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              Instructor
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Apply As Instructor
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>

          {/* Tabs Section */}
          <div className="mb-16">
            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-gray-50 rounded-2xl p-8">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
                >
                  <p className="text-gray-600 leading-relaxed">{tab.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Image */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl sticky top-8">
                <img
                  src="https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Instructor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                <div className="mb-8">
                  <span className="inline-block px-6 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
                    For Become a Instructor
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Instructor Registration
                  </h3>
                  <hr className="border-gray-200" />
                </div>

                <div className="space-y-6">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border-b-2 border-gray-300 focus:border-purple-600 outline-none transition-colors bg-transparent peer"
                        placeholder=" "
                      />
                      <label className="absolute left-4 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-purple-600 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm pointer-events-none">
                        First Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border-b-2 border-gray-300 focus:border-purple-600 outline-none transition-colors bg-transparent peer"
                        placeholder=" "
                      />
                      <label className="absolute left-4 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-purple-600 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm pointer-events-none">
                        Last Name
                      </label>
                    </div>
                  </div>

                  {/* Username & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border-b-2 border-gray-300 focus:border-purple-600 outline-none transition-colors bg-transparent peer"
                        placeholder=" "
                      />
                      <label className="absolute left-4 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-purple-600 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm pointer-events-none">
                        User name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border-b-2 border-gray-300 focus:border-purple-600 outline-none transition-colors bg-transparent peer"
                        placeholder=" "
                      />
                      <label className="absolute left-4 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-purple-600 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm pointer-events-none">
                        Phone Number
                      </label>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border-b-2 border-gray-300 focus:border-purple-600 outline-none transition-colors bg-transparent peer"
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-purple-600 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm pointer-events-none">
                      Email
                    </label>
                  </div>

                  {/* Password & Confirm Password */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border-b-2 border-gray-300 focus:border-purple-600 outline-none transition-colors bg-transparent peer"
                        placeholder=" "
                      />
                      <label className="absolute left-4 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-purple-600 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm pointer-events-none">
                        Password
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border-b-2 border-gray-300 focus:border-purple-600 outline-none transition-colors bg-transparent peer"
                        placeholder=" "
                      />
                      <label className="absolute left-4 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-purple-600 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm pointer-events-none">
                        Password Confirmation
                      </label>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="relative">
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-4 border-b-2 border-gray-300 focus:border-purple-600 outline-none transition-colors bg-transparent peer resize-none"
                      placeholder=" "
                    ></textarea>
                    <label className="absolute left-4 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-purple-600 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm pointer-events-none">
                      Bio
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-3 group"
                  >
                    <span>Become a Instructor</span>
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-80 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* ADD FOOTER COMPONENT HERE */}
      <Footer />
      {/* ============================================ */}
    </div>
  );
};

export default Instructor;