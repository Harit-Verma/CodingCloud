import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EventDetails = () => {
  const [activeAccordion, setActiveAccordion] = useState('faq1');

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const eventContent = [
    "Over 37 lectures and 55.5 hours of content!",
    "Have an intermediate skill level of Python programming.",
    "Have a portfolio of various data analysis projects.",
    "Use the numpy library to create and manipulate arrays."
  ];

  const eventContent2 = [
    "Live project Software Testing Training Included.",
    "Use the pandas module with Python to create and structure data.",
    "Have a portfolio of various data analysis projects.",
    "Create data visualizations using."
  ];

  const description = [
    "Use the Jupyter Notebook Environment. JavaScript developer from scratch.",
    "Use the pandas module with Python to create and structure data.",
    "Have a portfolio of various data analysis projects.",
    "Create data visualizations using matplotlib and the seaborn."
  ];

  const faqData = [
    {
      id: 'faq1',
      question: 'Intro to Course and Histudy?',
      answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, quisquam qui. Quia, tempore, atque, pariatur eius nobis quas nulla ipsam molestias provident fuga odio cum dolorum maiores minima? Aliquam, sequi.'
    },
    {
      id: 'faq2',
      question: 'Course Fundamentals?',
      answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, quisquam qui. Quia, tempore, atque, pariatur eius nobis quas nulla ipsam molestias provident fuga odio cum dolorum maiores minima? Aliquam, sequi.'
    },
    {
      id: 'faq3',
      question: 'You can develop skill and setup?',
      answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, quisquam qui. Quia, tempore, atque, pariatur eius nobis quas nulla ipsam molestias provident fuga odio cum dolorum maiores minima? Aliquam, sequi.'
    },
    {
      id: 'faq4',
      question: '15 Things To Know About Education?',
      answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, quisquam qui. Quia, tempore, atque, pariatur eius nobis quas nulla ipsam molestias provident fuga odio cum dolorum maiores minima? Aliquam, sequi.'
    },
    {
      id: 'faq5',
      question: 'Course Description?',
      answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, quisquam qui. Quia, tempore, atque, pariatur eius nobis quas nulla ipsam molestias provident fuga odio cum dolorum maiores minima? Aliquam, sequi.'
    }
  ];

  const participants = [
    {
      id: 1,
      name: 'Alejandro',
      role: 'Math Teacher',
      location: 'CO Miego, AD, USA',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      description: 'Yes, I am a Department Teacher. I have a passion for learning system.'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      role: 'Math Teacher',
      location: 'CO Miego, AD, USA',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
      description: 'Yes, I am a Department Teacher. I have a passion for learning system.'
    }
  ];

  const similarEvents = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
      date: '11 Jan',
      year: '2024',
      location: 'IAC Building',
      time: '8:00 am - 5:00 pm',
      title: 'International Education Fair 2024'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop',
      date: '11 Mar',
      year: '2024',
      location: 'Vancouver',
      time: '8:00 am - 5:00 pm',
      title: 'Painting Art Contest 2020'
    }
  ];

  const eventDetails = [
    { label: 'Start Date', value: '25 Jan, 2024' },
    { label: 'Start Time', value: '7.00Pm' },
    { label: 'End Date', value: '25 Jan, 2024' },
    { label: 'Skill Level', value: 'Basic' },
    { label: 'Ongoing', value: '1000+' },
    { label: 'Location', value: 'USA' },
    { label: 'Certificate', value: 'Yes' },
    { label: 'Language', value: 'English' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ADD NAVBAR COMPONENT HERE */}
      <Navbar />

      {/* Breadcrumb Banner */}
      <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 py-16">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-blue-900 opacity-60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <nav className="flex items-center space-x-2 text-sm mb-4">
              <a href="/" className="text-gray-300 hover:text-white transition">Home</a>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-white font-medium">Web Development</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              The Complete Histudy 2024: From Zero to Expert!
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Featured Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-8">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop" 
                alt="Event" 
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Event Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Event Content</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  {eventContent.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3">
                  {eventContent2.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Event Description */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Event Description</h4>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod te invidunt. ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam. et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </p>
              <p className="text-gray-700 mb-6">
                Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-xl font-bold text-gray-900 mb-4">Description</h5>
                  <ul className="space-y-3">
                    {description.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Event FAQ</h4>
              <div className="space-y-4">
                {faqData.map((faq) => (
                  <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transform transition-transform ${
                          activeAccordion === faq.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeAccordion === faq.id && (
                      <div className="p-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Event Participants */}
            <div className="mb-8">
              <div className="mb-6">
                <span className="inline-block bg-purple-100 text-purple-600 text-sm font-semibold px-4 py-2 rounded-full mb-2">
                  Event Participants
                </span>
                <h2 className="text-3xl font-bold text-gray-900">Event Participants</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {participants.map((participant) => (
                  <div key={participant.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
                    <div className="flex gap-4">
                      <img 
                        src={participant.image} 
                        alt={participant.name}
                        className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{participant.name}</h3>
                        <h6 className="text-purple-600 font-semibold mb-2">{participant.role}</h6>
                        <div className="flex items-center text-gray-600 text-sm mb-3">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{participant.location}</span>
                        </div>
                        <p className="text-gray-700 text-sm mb-3">{participant.description}</p>
                        <div className="flex gap-2">
                          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          </a>
                          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-400 hover:text-white transition">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                          </a>
                          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-pink-500 hover:text-white transition">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Similar Events */}
            <div>
              <div className="mb-6">
                <span className="inline-block bg-purple-100 text-purple-600 text-sm font-semibold px-4 py-2 rounded-full mb-2">
                  Similar Event
                </span>
                <h2 className="text-3xl font-bold text-gray-900">Similar Event</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {similarEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                    <div className="relative">
                      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                      <div className="absolute top-4 right-4 bg-white rounded-xl px-4 py-2 shadow-lg text-center">
                        <div className="text-lg font-bold text-gray-900">{event.date}</div>
                        <div className="text-sm text-gray-600">{event.year}</div>
                      </div>
                    </div>
                    <div className="p-6">
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
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{event.title}</h4>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition"
                      >
                        <span>Get Ticket</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition">
                  View More Events
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Video Preview */}
                <div className="relative group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop" 
                    alt="Preview" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center animate-pulse">
                      <svg className="w-6 h-6 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <span className="absolute bottom-4 left-0 right-0 text-center text-white text-sm font-semibold">
                    <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Preview this course
                  </span>
                </div>

                <div className="p-6">
                  {/* Action Buttons */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition mb-3 flex items-center justify-center gap-2">
                    <span>Add to Cart $49</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition mb-6 flex items-center justify-center gap-2">
                    <span>Book Now</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Event Details */}
                  <div className="space-y-3 mb-6">
                    {eventDetails.map((detail, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 text-sm">{detail.label}</span>
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Social Share */}
                  <div className="text-center pt-6 border-t border-gray-200">
                    <div className="flex justify-center gap-2 mb-4">
                      <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 transition">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-600 hover:border-blue-400 hover:text-blue-400 transition">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-600 hover:border-pink-500 hover:text-pink-500 transition">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-600 hover:border-blue-700 hover:text-blue-700 transition">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                    
                    <hr className="my-5" />
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-600 text-sm mb-2">For details about the course</p>
                      <div className="flex items-center justify-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-sm font-semibold">Call Us: <a href="tel:+444555666777" className="hover:underline">+444 555 666 777</a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to start creating a Educational Website?
            </h2>
            <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition flex items-center gap-3">
              <span>Purchase Histudy</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ADD FOOTER COMPONENT HERE */}
      <Footer />
    </div>
  );
};

export default EventDetails;