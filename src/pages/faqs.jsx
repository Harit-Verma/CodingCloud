import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function FAQsPage() {
  const [activeAccordion1, setActiveAccordion1] = useState(0);
  const [activeAccordion2, setActiveAccordion2] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const faqsSection1 = [
    {
      question: "What is Histudy? How does it work?",
      answer: "You can run Histudy easily. Any School, University, College can use this histudy education template for their educational purpose. A university can run their online learning management system by histudy education template."
    },
    {
      question: "How can I get the customer support?",
      answer: "After purchasing the product need you any support you can share with us by sending mail to pixcelsthemes@gmail.com."
    },
    {
      question: "Can I get update regularly and For how long do I get updates?",
      answer: "Yes, We will get update the Histudy. And you can get it any time. Next time we will comes with more feature. You can get update for unlimited times. Our dedicated team works for update."
    },
    {
      question: "15 Things To Know About Education?",
      answer: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph."
    }
  ];

  const faqsSection2 = [
    {
      question: "What is Histudy? How does it work?",
      answer: "You can run Histudy easily. Any School, University, College can use this histudy education template for their educational purpose. A university can run their online learning management system by histudy education template."
    },
    {
      question: "7 Facts About Education That Will Blow",
      answer: "After purchasing the product need you any support you can share with us by sending mail to pixcelsthemes@gmail.com."
    },
    {
      question: "10 Brilliant Ways To Advertise Education",
      answer: "Yes, We will get update the Histudy. And you can get it any time. Next time we will comes with more feature. You can get update for unlimited times. Our dedicated team works for update."
    },
    {
      question: "15 Common Myths About Education",
      answer: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph."
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Faqs</h2>
            <div className="flex items-center justify-center gap-2 text-sm">
              <a href="/" className="hover:underline">Home</a>
              <ChevronRight className="w-4 h-4" />
              <span className="opacity-90">Faqs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion Area */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Purchases & Refunds */}
            <div>
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-gray-800">Purchases & Refunds</h4>
              </div>
              <div className="space-y-4">
                {faqsSection1.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                      onClick={() => setActiveAccordion1(activeAccordion1 === index ? -1 : index)}
                    >
                      <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-purple-600 flex-shrink-0 transition-transform ${
                          activeAccordion1 === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeAccordion1 === index ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 py-4 bg-gray-50 text-gray-600 border-t border-gray-200">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Making Courses */}
            <div>
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-gray-800">Making Courses</h4>
              </div>
              <div className="space-y-4">
                {faqsSection2.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                      onClick={() => setActiveAccordion2(activeAccordion2 === index ? -1 : index)}
                    >
                      <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-purple-600 flex-shrink-0 transition-transform ${
                          activeAccordion2 === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeAccordion2 === index ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 py-4 bg-gray-50 text-gray-600 border-t border-gray-200">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="container mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* Contact Area */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
                alt="Contact"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Contact Form */}
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 text-sm font-semibold rounded-full mb-4">
                  EDUCATION FOR EVERYONE
                </span>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Get a Free Course You Can Contact With Me
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-purple-600 outline-none transition-colors peer placeholder-transparent"
                    placeholder="Name"
                    id="name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-3 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-purple-600"
                  >
                    Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-purple-600 outline-none transition-colors peer placeholder-transparent"
                    placeholder="Email"
                    id="email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-3 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-purple-600"
                  >
                    Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-purple-600 outline-none transition-colors peer placeholder-transparent"
                    placeholder="Phone"
                    id="phone"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-4 -top-3 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-purple-600"
                  >
                    Phone
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-purple-600 outline-none transition-colors peer placeholder-transparent resize-none"
                    placeholder="Message"
                    id="message"
                    rows="4"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-4 -top-3 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-purple-600"
                  >
                    Message
                  </label>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  GET IT NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="container mx-auto px-4">
        <hr className="border-gray-200" />
      </div>

      {/* ============================================ */}
      {/* INSERT FOOTER COMPONENT HERE */}
      <Footer />
      {/* ============================================ */}
    </div>
  );
}