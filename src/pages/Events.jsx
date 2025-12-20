import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import img1 from '../assets/images/grid-type-01.jpg';
import img2 from '../assets/images/grid-type-02.jpg';
import img3 from '../assets/images/grid-type-03.jpg';
import img4 from '../assets/images/grid-type-04.jpg';
import img5 from '../assets/images/grid-type-05.jpg';
import img6 from '../assets/images/grid-type-06.jpg';

const Events = () => {
  const eventsData = [
    {
      id: 1,
      image: img1,
      date: '11 Jan',
      year: '2024',
      location: 'IAC Building',
      time: '8:00 am - 5:00 pm',
      title: 'International Education Fair 2024'
    },
    {
      id: 2,
      image: img2,
      date: '11 Mar',
      year: '2024',
      location: 'Vancouver',
      time: '8:00 am - 5:00 pm',
      title: 'Painting Art Contest 2020'
    },
    {
      id: 3,
      image: img3,
      date: '11 Oct',
      year: '2024',
      location: 'Paris',
      time: '8:00 am - 5:00 pm',
      title: 'Histudy Education Fair 2024'
    },
    {
      id: 4,
      image: img4,
      date: '11 Jan',
      year: '2024',
      location: 'IAC Building',
      time: '8:00 am - 5:00 pm',
      title: 'Elegant Light Box Paper Cut Dioramas'
    },
    {
      id: 5,
      image: img5,
      date: '11 Mar',
      year: '2024',
      location: 'Vancouver',
      time: '8:00 am - 5:00 pm',
      title: "Most Effective Ways Education's Problem."
    },
    {
      id: 6,
      image: img6,
      date: '11 Oct',
      year: '2024',
      location: 'Paris',
      time: '8:00 am - 5:00 pm',
      title: 'Top 7 Common About Education.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ADD NAVBAR COMPONENT HERE */}
      <Navbar />

      {/* Page Banner */}
      <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm mb-6">
              <a href="/" className="text-gray-600 hover:text-blue-600 transition">
                Home
              </a>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-900 font-medium">All Event</span>
            </nav>

            {/* Title Section */}
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">All Event</h1>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                <span className="text-2xl mr-2">🎉</span>
                <span className="text-sm font-semibold text-gray-700">99 Events</span>
              </div>
            </div>
            <p className="text-gray-600 text-lg">Event that help beginner designers become true unicorns.</p>
          </div>
        </div>
      </div>

      {/* Events Grid Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventsData.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden group">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Date Badge */}
                    <div className="absolute top-4 right-4 bg-white rounded-xl px-4 py-2 shadow-lg text-center">
                      <div className="text-lg font-bold text-gray-900">{event.date}</div>
                      <div className="text-sm text-gray-600">{event.year}</div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{event.time}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-gray-900 mb-6 hover:text-blue-600 transition line-clamp-2">
                      <a href="/event-details">{event.title}</a>
                    </h4>

                    {/* Button */}
                    <a
                      href="/event-details"
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                    >
                      <span>Get Ticket</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <nav className="mt-16">
              <ul className="flex items-center justify-center gap-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 text-white border border-blue-600"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="container mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* ADD FOOTER COMPONENT HERE */}
      <Footer />
    </div>
  );
};

export default Events;