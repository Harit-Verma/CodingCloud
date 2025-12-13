import React, { useState, useEffect, useRef } from 'react';
import {
    FaGoogle, FaYelp, FaFacebookF, FaHubspot, FaQuoteRight, FaMicrosoft,
    FaPlay, FaRegBookmark, FaArrowRight, FaUserGraduate, FaLaptopCode,
    FaArrowLeft, FaMapMarkerAlt, FaRegClock, FaCertificate, FaUsers, FaAward,
    FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope
} from 'react-icons/fa';
import { GoPeople } from "react-icons/go";
import { LiaBookSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { FiBook } from "react-icons/fi";
import Man from "../assets/images/banner-01.png"
import Blob from "../assets/images/blob2.png";
import courses from "../Data/coursesData"; 
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import categoriesData from "../Data/categoriesData";
import about1 from "../assets/images/about-01.png";
import about2 from "../assets/images/about-02.png";
import about3 from "../assets/images/about-03.png";

// ==========================================
// 2. HELPER COMPONENTS
// ==========================================


// --- ANIMATED COUNTER ---
const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const numberPart = parseInt(end.toString().replace(/,/g, ''), 10);
    const suffix = end.toString().replace(/[0-9]/g, '');

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } }, { threshold: 0.5 });
        if (countRef.current) observer.observe(countRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        const totalFrames = (duration / 1000) * 60;
        const increment = numberPart / totalFrames;
        let currentFrame = 0;
        const counter = setInterval(() => {
            currentFrame++;
            const currentCount = Math.min(Math.floor(increment * currentFrame), numberPart);
            setCount(currentCount);
            if (currentFrame >= totalFrames) { clearInterval(counter); setCount(numberPart); }
        }, 1000 / 60);
        return () => clearInterval(counter);
    }, [isVisible, numberPart, duration]);

    return <span ref={countRef}>{count.toLocaleString()}{suffix}</span>;
};

const CardSlider = () => {
    const [cards, setCards] = useState([
        {
            id: 1,
            title: "React",
            desc: "It is a long established fact that a reader will be distracted.",
            lessons: 12,
            students: 50,
            color: "linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)", // Purple like image
            price: 70,
            oldPrice: 120,
            rating: 15,
            tag: "-40% Off"
        },
        {
            id: 2,
            title: "JavaScript",
            desc: "Mastering the web language.",
            lessons: 18,
            students: 120,
            color: "linear-gradient(135deg, #34d399 0%, #10b981 100%)", // Greenish
            price: 60,
            oldPrice: 100,
            rating: 20,
            tag: "Popular"
        },
        {
            id: 3,
            title: "UI/UX Design",
            desc: "Designing for user experience.",
            lessons: 20,
            students: 80,
            color: "linear-gradient(135deg, #f472b6 0%, #ec4899 100%)", // Pinkish
            price: 50,
            oldPrice: 90,
            rating: 18,
            tag: "New"
        }
    ]);

    const [dragX, setDragX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        startX.current = e.clientX;
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const diff = e.clientX - startX.current;
        setDragX(diff);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        const threshold = 100; // Lower threshold for easier swap
        if (dragX > threshold) moveCardToBack();
        else if (dragX < -threshold) moveCardToBack();
        else setDragX(0);
    };

    const moveCardToBack = () => {
        setCards((prev) => {
            const newArr = [...prev];
            const topCard = newArr.shift();
            newArr.push(topCard);
            return newArr;
        });
        setDragX(0);
    };

    return (
        // Adjusted container size to fit the right column
        <div className="slider-container w-full h-[450px] flex items-center justify-center relative">
            <div
                className="card-stack relative w-[280px] h-[380px] cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                {cards.map((card, index) => {
                    let style = {};
                    // Logic for stacking cards (Top, Middle, Bottom)
                    if (index === 0) {
                        style = {
                            zIndex: 3,
                            opacity: 1,
                            transform: isDragging ? `translateX(${dragX}px) rotate(${dragX * 0.05}deg)` : `translateX(0) rotate(0)`,
                            transition: isDragging ? 'none' : 'transform 0.3s ease-out'
                        };
                    } else if (index === 1) {
                        style = {
                            zIndex: 2,
                            opacity: 1, // Keep opacity high for the layered look
                            transform: 'translateX(15px) translateY(15px) scale(0.95)', // Shift right and down slightly
                            transition: 'all 0.3s ease'
                        };
                    } else {
                        style = {
                            zIndex: 1,
                            opacity: 0.5,
                            transform: 'translateX(30px) translateY(30px) scale(0.90)',
                            transition: 'all 0.3s ease'
                        };
                    }
                    if (index > 2) style.display = 'none';

                    return (
                        <div key={card.id} className="card z-100 absolute top-0 left-0 w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100" style={style}>
                            {/* Card Top Image Section */}
                            <div className="h-[160px] p-5 relative" style={{ background: card.color }}>
                                <div className="">
                                    <h3 className="text-lg font-bold w-2/3 leading-snug">Difficult Things About Education.</h3>
                                    <p className="text-xs mt-1 opacity-90">By Jelhana Elena</p>
                                </div>
                                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-white font-bold">
                                    36 Class
                                </div>
                                {/* Badge Circle */}
                                <div className="absolute top-4 right-4 w-10 h-10 bg-[#5d3eff] rounded-full flex items-center justify-center text-[10px] text-white font-bold border-2 border-dashed border-white/50">
                                    {card.tag}
                                </div>
                                <div className="absolute bottom-4 right-4 h-20 w-20 rounded-full overflow-hidden border-2 border-white shadow-md">
                                 <img src="https://i.pravatar.cc/300?img=5"alt="Profile"className="h-full w-full object-cover"/>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-5">
                                <div className="flex justify-between text-xs text-gray-400 mb-2">
                                    <span>📄 {card.lessons} Lessons</span>
                                    <span>👥 {card.students} Students</span>
                                </div>
                                <h2 className="text-xl font-bold text-gray-800 mb-1">{card.title}</h2>
                                <p className="text-xs text-gray-500 line-clamp-2">{card.desc}</p>

                                <div className="flex text-yellow-400 text-xs my-3">
                                    ⭐⭐⭐⭐⭐ <span className="text-gray-400 ml-1">({card.rating})</span>
                                </div>

                                <div className="flex justify-between items-center border-t pt-3 border-gray-100">
                                    <div>
                                        <span className="text-lg font-bold text-gray-800">${card.price}</span>
                                        <span className="text-xs text-gray-400 line-through ml-2">${card.oldPrice}</span>
                                    </div>
                                    <button className="text-xs font-bold text-gray-700 hover:text-blue-600">Learn More →</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};



// --- TESTIMONIAL CARD ---
const TestimonialCard = ({ item }) => {
    const isColor = item.variant === 'color';
    return (
        <div className={`shrink-0 w-[400px] p-8 rounded-2xl mx-4 relative flex flex-col justify-between transition-transform hover:scale-105 ${isColor ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-white text-gray-600 shadow-xl border border-gray-100'}`}>
            <div className="flex justify-between items-start mb-6"><div>{item.logo}</div><FaQuoteRight className={`text-4xl opacity-30 ${isColor ? 'text-white' : 'text-gray-300'}`} /></div>
            <p className={`text-lg leading-relaxed mb-8 ${isColor ? 'text-blue-50' : 'text-gray-500'}`}>"{item.text}"</p>
            <div className="flex items-center gap-4">
                <img src={item.img} alt={item.author} className="w-12 h-12 rounded-full object-cover border-2 border-white/20" />
                <div><h4 className={`font-bold ${isColor ? 'text-white' : 'text-gray-900'}`}>{item.author}</h4><p className={`text-sm ${isColor ? 'text-blue-200' : 'text-gray-400'}`}>{item.role}</p></div>
            </div>
        </div>
    );
};

// --- EVENTS SLIDER ---
const EventsSlider = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.firstChild.offsetWidth + 24;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // use first 3 courses only
  const events = courses.slice(0, 3);

  return (
    <div className="relative group/slider px-5 flex justify-center items-center">
      {/* Left Arrow */}
      <div
        onClick={() => scroll("left")}
        className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-30 bg-[#4F5DE4] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-blue-700 hover:text-white transition-all duration-300 opacity-0 group-hover/slider:opacity-100"
      >
        <FaArrowLeft />
      </div>

      {/* Right Arrow */}
      <div
        onClick={() => scroll("right")}
        className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-30 bg-[#4F5DE4] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-blue-700 hover:text-white transition-all duration-300 opacity-0 group-hover/slider:opacity-100"
      >
        <FaArrowRight />
      </div>

      {/* Slider Container */}
      <div
        ref={scrollRef}
        id="events-container"
        className="flex overflow-x-auto gap-6 pb-10 px-4 md:px-8 w-12/13 hide-scrollbar snap-x snap-mandatory scroll-smooth"
      >
        {events.map((ev) => (
          <div
            key={ev.id}
            className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[350px] snap-center"
          >
            {/* Card */}
            <div className="bg-white rounded-[32px] overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.08)] hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)] transition-all duration-300 group hover:-translate-y-2 max-w-md mx-auto">
              {/* HERO / TOP IMAGE SECTION */}
              <div className="relative overflow-hidden">
                <img
                  src={ev.image}
                  alt={ev.topTitle}
                  className="w-full h-72 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />

                {/* DATE RANGE (top-left) */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[11px] font-semibold text-slate-700 tracking-wide uppercase">
                  {ev.dateRange}
                </div>

                {/* DISCOUNT (top-right) */}
                {ev.discount && (
                  <div className="absolute top-4 right-4 bg-[#FF6B6B] text-white rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide">
                    {ev.discount}
                  </div>
                )}

                {/* BOTTOM LABEL AREA */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="bg-white/90 rounded-2xl px-4 py-3 shadow-md">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                      {ev.subtitle}{" "}
                      <span className="text-slate-900">{ev.author}</span>
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-medium">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {ev.classes}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        {ev.videos}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                        {ev.enrolledStudents}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTENT SECTION */}
              <div className="px-8 pt-7 pb-8">
                {/* Rating & Bookmark */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-400 text-[14px]">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[13px] text-slate-500 font-medium">
                      ({ev.reviews} Reviews)
                    </span>
                  </div>

                  <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                  </button>
                </div>

                {/* Title */}
                <h3 className="text-[22px] md:text-[24px] font-extrabold leading-snug text-slate-900 mb-4">
                  {ev.title}
                </h3>

                {/* Lessons & Students */}
                <div className="flex items-center gap-6 text-[14px] text-slate-600 mb-4">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <span>{ev.lessons} Lessons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span>{ev.students} Students</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[14px] text-slate-600 mb-6 leading-relaxed">
                  {ev.description}
                </p>

                {/* Instructor & Price */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={ev.instructorImage}
                      alt={ev.instructor}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm text-slate-700">
                        By{" "}
                        <span className="font-semibold text-slate-900">
                          {ev.instructor}
                        </span>
                      </p>
                      <p className="text-xs text-slate-500">
                        In {ev.category}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <span className="text-[22px] font-extrabold text-slate-900">
                        {ev.price}
                      </span>
                      <span className="text-[14px] text-slate-400 line-through">
                        {ev.oldPrice}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full bg-white border border-gray-300 text-gray-700 font-semibold py-4 px-6 rounded-2xl hover:border-gray-400 transition-all flex items-center justify-center gap-2 group text-sm md:text-base">
                  Learn More
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- TEACHERS SECTION ---
const TeachersSection = () => {
    const teachersData = [
        { id: 1, name: "Mames Mary", role: "English Teacher", location: "CO Margo, AD, USA", desc: "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.", phone: "+1-202-555-0174", email: "example@gmail.com", img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 2, name: "Julienne Silva", role: "Math Teacher", location: "New York, NY, USA", desc: "Passion for equations and helping students understand complex mathematical concepts simply.", phone: "+1-202-555-0100", email: "math@histudy.com", img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 3, name: "Karen Bloom", role: "Science Teacher", location: "London, UK", desc: "Exploring the wonders of the universe through physics and chemistry experiments.", phone: "+44-20-7946-0123", email: "science@histudy.com", img: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 4, name: "James Anderson", role: "History Teacher", location: "Berlin, Germany", desc: "Bringing the past to life with engaging storytelling and deep historical analysis.", phone: "+49-30-123456", email: "history@histudy.com", img: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 5, name: "Michael Smith", role: "Art Teacher", location: "Paris, France", desc: "Helping students unleash their creativity through painting, sketching, and sculpture.", phone: "+33-1-23456789", email: "art@histudy.com", img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 6, name: "Robert Doe", role: "Music Teacher", location: "Vienna, Austria", desc: "A symphony of learning. Teaching theory, composition, and performance arts.", phone: "+43-1-123456", email: "music@histudy.com", img: "https://images.pexels.com/photos/3777564/pexels-photo-3777564.jpeg?auto=compress&cs=tinysrgb&w=600" },
    ];
    const [activeTeacher, setActiveTeacher] = useState(teachersData[0]);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="max-w-7xl mx-auto px-5">
                <div className="text-center mb-16"><span className="inline-block px-4 py-1 mb-5 text-sm font-bold text-[#6A4DF4] bg-[#F2F0FE] rounded-full uppercase tracking-wider">OUR TEACHER</span><h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Whose Inspirations You</h2></div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 xl:col-span-8">
                        <div className="bg-white p-6 md:p-10 rounded shadow-2xl flex flex-col md:flex-row gap-8 items-center md:items-start border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -z-0 translate-x-1/2 -translate-y-1/2"></div>
                            <div className="w-full md:w-5/12 shrink-0 relative z-10"><div className="rounded overflow-hidden aspect-[3/4] shadow-lg"><img src={activeTeacher.img} alt={activeTeacher.name} className="w-full h-full object-cover" /></div></div>
                            <div className="flex-1 w-full relative z-10">
                                <div className="flex justify-between items-start"><div><h3 className="text-3xl font-bold text-gray-900 mb-2">{activeTeacher.name}</h3><p className="text-[#6A4DF4] font-medium mb-4">{activeTeacher.role}</p></div></div>
                                <div className="flex items-center gap-2 text-gray-500 text-sm mb-6"><FaMapMarkerAlt className="text-[#6A4DF4]" /><span>{activeTeacher.location}</span></div>
                                <p className="text-gray-500 leading-relaxed mb-8">{activeTeacher.desc}</p>
                                <div className="space-y-3"><div className=" flex items-center gap-3 text-gray-600"><FaPhoneAlt className="text-gray-400" /><span className="font-medium">{activeTeacher.phone}</span></div><div className=" flex items-center gap-3 text-gray-600 "><FaEnvelope className="text-gray-400" /><span className="font-medium">{activeTeacher.email}</span></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 xl:col-span-4">
                        <div className="grid grid-cols-3 gap-4">
                            {teachersData.map((teacher) => (
                                <div key={teacher.id} onClick={() => setActiveTeacher(teacher)} className={`relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer group transition-all duration-300 ${activeTeacher.id === teacher.id ? 'ring-4 ring-[#6A4DF4] ring-offset-2' : 'hover:-translate-y-1'}`}>
                                    <img src={teacher.img} alt={teacher.name} className="w-full h-full object-cover" /><div className={`absolute inset-0 transition-opacity duration-300 ${activeTeacher.id === teacher.id ? 'bg-[#6A4DF4]/20' : 'bg-black/0 group-hover:bg-black/10'}`}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- BLOG SECTION ---
const BlogSection = () => {
    const blogPosts = [
        { id: 1, title: "Why Is Education So Famous?", img: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 2, title: "Difficult Things About Education.", img: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 3, title: "Education Is So Famous, But Why?", img: "https://images.pexels.com/photos/4308095/pexels-photo-4308095.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ];
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-5">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div><span className="inline-block px-4 py-1 mb-4 text-sm font-bold text-[#6A4DF4] bg-[#F2F0FE] rounded-full uppercase tracking-wider">BLOG POST</span><h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Post Popular Post.</h2></div>
                    <button className="bg-[#8053FF] hover:bg-[#6f42ef] text-white px-8 py-3 rounded-lg font-bold shadow-lg transition-colors flex items-center gap-2">See All Articles <FaArrowRight /></button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="cursor-pointer rounded-xl bg-white hover:scale-[1.02] transition-transform duration-300 shadow-md">
                        <div className="rounded-t-xl overflow-hidden mb-6 h-[300px] md:h-[400px]"><img src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Featured" className="w-full h-full object-cover" /></div>
                        <div className="pr-4 px-10 pb-10"><h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#6A4DF4] transition-colors">React</h3><p className="text-gray-500 mb-4 leading-relaxed">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p><button className="text-gray-900 font-bold flex items-center gap-2 transition-colors">Learn More <FaArrowRight /></button></div>
                    </div>
                    <div className="flex flex-col gap-8">
                        {blogPosts.map((post) => (
                            <div key={post.id} className="flex flex-col sm:flex-row items-center gap-6 group cursor-pointer rounded-xl hover:bg-white p-4 transition-colors">
                                <div className="w-full sm:w-48 h-32 shrink-0 overflow-hidden shadow-md rounded-lg"><img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /></div>
                                <div><h4 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#6A4DF4] transition-colors">{post.title}</h4><button className="text-gray-500 font-bold text-sm flex items-center gap-2 transition-colors">Read Article <FaArrowRight className="text-xs" /></button></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- NEWSLETTER SECTION ---
const NewsletterSection = () => {
    return (
        <section className="py-24 bg-[#1F55F1] relative overflow-hidden text-white">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            <div className="max-w-4xl mx-auto px-5 relative z-10 text-center">
                <span className="inline-block px-6 py-2 mb-6 text-xs font-bold text-white bg-white/10 rounded-full uppercase tracking-wider backdrop-blur-md">GET LATEST HISTUDY UPDATE</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Subscribe Our Newsletter</h2>
                <p className="text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className="bg-white p-2 rounded-lg shadow-2xl max-w-lg mx-auto flex flex-col sm:flex-row gap-2 mb-4">
                    <input type="email" placeholder="Enter Your E-Mail" className="flex-1 px-4 py-3 text-gray-700 outline-none rounded-md placeholder-gray-400" />
                    <button className="bg-[#8053FF] hover:bg-[#6f42ef] text-white px-8 py-3 rounded-md font-bold transition-colors flex items-center justify-center gap-2">Subscribe <FaArrowRight /></button>
                </div>
                <p className="text-sm text-blue-200 mb-16">No ads, No trails, No commitments</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 pt-10 border-t border-white/20">
                    <div className="text-center sm:text-right sm:pr-8 sm:border-r border-white/20 w-full sm:w-auto"><h3 className="text-4xl md:text-5xl font-extrabold mb-2"><CountUp end="500+" duration={2000} /></h3><p className="font-bold text-lg">Successfully Trained</p><p className="text-blue-200 text-sm">Learners & counting</p></div>
                    <div className="text-center sm:text-left w-full sm:w-auto"><h3 className="text-4xl md:text-5xl font-extrabold mb-2"><CountUp end="100+" duration={2000} /></h3><p className="font-bold text-lg">Certification Students</p><p className="text-blue-200 text-sm">Online Course</p></div>
                </div>
            </div>
        </section>
    );
};

// ==========================================
// 3. MAIN COMPONENT (Home)
// ==========================================

function Home() {
    // --- DATA ---
    const stats = [
        { icon: <FaUserGraduate className="text-pink-500 text-3xl" />, number: "500+", label: "Learners & counting", hasGradient: true },
        { icon: <FaLaptopCode className="text-pink-500 text-3xl" />, number: "800+", label: "Courses & Video" },
        { icon: <FaAward className="text-pink-500 text-3xl" />, number: "999+", label: "Certified Students" },
        { icon: <FaUsers className="text-pink-500 text-3xl" />, number: "100+", label: "Registered Enrolls", hasGradient: true },
    ];
    const reviewsRow1 = [
        { id: 1, company: "Google", logo: <FaGoogle className="text-4xl text-red-500" />, text: "The platform is intuitive.", author: "Michael D.", role: "CEO", img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100", variant: "white" },
        { id: 2, company: "Yelp", logo: <FaYelp className="text-4xl text-white" />, text: "Our educational foundation is strong.", author: "Valerie J.", role: "Manager", img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100", variant: "color" },
        { id: 3, company: "Facebook", logo: <FaFacebookF className="text-4xl text-blue-600" />, text: "Connecting with learners globally.", author: "Hannah R.", role: "Director", img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100", variant: "white" },
        { id: 4, company: "Microsoft", logo: <FaMicrosoft className="text-4xl text-white" />, text: "Scalable learning solutions.", author: "James T.", role: "CTO", img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100", variant: "color" },
    ];
    const reviewsRow2 = [
        { id: 5, company: "HubSpot", logo: <FaHubspot className="text-4xl text-orange-500" />, text: "Marketing strategies taught here.", author: "Pearl B. Hill", role: "Marketing", img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100", variant: "white" },
        { id: 6, company: "Bing", logo: <span className="text-4xl font-bold text-white italic">Bing</span>, text: "Search no further.", author: "Martha S.", role: "Developer", img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100", variant: "color" },
        { id: 7, company: "Google", logo: <FaGoogle className="text-4xl text-red-500" />, text: "Repeating success is a habit.", author: "Robert L.", role: "Analyst", img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100", variant: "white" },
        { id: 8, company: "Yelp", logo: <FaYelp className="text-4xl text-white" />, text: "Five stars for the curriculum.", author: "Sarah K.", role: "Designer", img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=100", variant: "color" },
    ];

    return (
        <div className='bg-white min-h-screen'>
          <Navbar></Navbar>


            {/* --- SECTION 2: POPULAR COURSES (REPLACED WITH CARD SLIDER) --- */}
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4 overflow-hidden">

                <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">

                    {/* --- LEFT SIDE: Text Content (Span 4 cols) --- */}
                    <div className="lg:col-span-4 flex flex-col items-start z-10 space-y-6">
                        {/* Badge */}
                        <div className="bg-white px-4 py-2 rounded shadow-sm flex items-center gap-2 text-sm font-bold text-gray-700 border border-gray-100">
                            <span className="text-yellow-500 text-lg">🏆</span>
                            The Leader in Online Learning
                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl lg:text-6xl font-extrabold text-[#1a1a2e] leading-tight">
                            Build The Skills <br />
                            To Drive Your <br />
                            Career.
                        </h1>

                        {/* Description */}
                        <p className="text-gray-500 text-lg max-w-md">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            <span className="font-bold text-gray-800"> Velit officia consequat.</span>
                        </p>

                        {/* Button */}
                        <button className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-indigo-500/30 flex items-center gap-2 transition-all transform hover:scale-105">
                            View Course <FaArrowRight />
                        </button>
                    </div>

                    <div className="lg:col-span-8 flex bg-b relative">

                        <div className="w-1/2 z-10 relative h-80vh flex justify-center items-center ">
                            <img
                                src={Man}
                                alt="Student Girl"
                                className="w-full z-10 h-130 mt-10 ml-10 absolute "
                            /><img
                                src={Blob}
                                alt="Student Girl"
                                className="-mt-5 -rotate-30 h-80 "
                            />

                        </div>
                        <CardSlider />
                    </div>

                </div>
            </div>

            {/* CSS FOR ANIMATIONS AND SLIDER */}
            <style>
                {`
                @keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                @keyframes marquee-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
                .animate-marquee-left { animation: marquee-left 40s linear infinite; }
                .animate-marquee-right { animation: marquee-right 40s linear infinite; }
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                
                /* CARD SLIDER SPECIFIC CSS */
                .card { backface-visibility: hidden; transform-style: preserve-3d; }
                `}
            </style>


            {/* --- SECTION 1: CATEGORIES --- */}
            {/* <div className="categories flex flex-col items-center justify-center mb-10">
                <div className='p-5 mt-20 py-1 bg-blue-200 text-blue-700 font-bold rounded-4xl'><p>CATEGORIES</p></div>
                <div className='text-4xl font-bold w-1/2 text-center mt-5'><p>Explore Top Course Categories That Change Yourself</p></div>
                <div className='grid grid-cols-4 w-[90%] gap-10 mt-10'>
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className='h-60 shadow-2xl w-57 flex flex-col items-center justify-center bg-gray-100 rounded-xl font-bold hover:-translate-y-2 transition-transform duration-300'>
                            <div className='h-25 w-25 mb-5 bg-amber-900 rounded-full'></div>
                            <h1 className='text-xl mb-3'>Web Developer</h1>
                            <p>25 Courses</p>
                        </div>
                    ))}
                </div>
            </div> */}
            <div className="categories flex flex-col items-center justify-center mb-10">
  <div className="p-2 mt-20 bg-blue-100 text-blue-700 font-semibold rounded-full px-6">
    CATEGORIES
  </div>

  <h1 className="text-4xl font-bold w-1/2 text-center mt-5 leading-tight">
    Explore Top Courses Categories That Change Yourself
  </h1>

  <div className="grid grid-cols-4 w-[90%] gap-10 mt-10">
    {categoriesData.map((cat, index) => (
      <div
        key={index}
        className="h-60 shadow-xl w-full flex flex-col items-center justify-center bg-white rounded-2xl hover:-translate-y-2 transition-transform duration-300"
      >
        <img
          src={cat.image}
          alt={cat.title}
          className="h-20 mb-5"
        />

        <h1 className="text-lg font-semibold">{cat.title}</h1>

        <p className="text-gray-500 text-sm mt-1">
          {cat.courses} Courses →
        </p>
      </div>
    ))}
  </div>
</div>

            {/* --- SECTION 3: KNOW ABOUT US --- */}
            <div className='w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mb-30 mt-20'>
                {/* <div className="relative h-[600px] hidden lg:block">
                    <div className='h-[400px] w-[300px] bg-black rounded-lg absolute top-0 left-10 z-10'></div>
                    <div className='h-[200px] w-[250px] bg-gray-400 rounded-lg absolute top-5 right-3 z-10'></div>
                    <div className='h-[350px] w-[300px] bg-gray-600 rounded-lg absolute -bottom-10 right-10 z-20'></div>
                </div> */}

                <div className="relative h-[600px] hidden lg:block">

    {/* Image 1 */}
    <div className='h-[400px] w-[300px] absolute top-0 left-10 z-10 rounded-lg overflow-hidden'>
        <img 
            src={about1} 
            alt="About 1" 
            className='w-full h-full object-cover'
        />
    </div>

    {/* Image 2 */}
    <div className='h-[200px] w-[250px] absolute top-5 right-3 z-10 rounded-lg overflow-hidden'>
        <img 
            src={about2} 
            alt="About 2" 
            className='w-full h-full object-cover'
        />
    </div>

    {/* Image 3 */}
    <div className='h-[350px] w-[300px] absolute -bottom-10 right-10 z-20 rounded-lg overflow-hidden'>
        <img 
            src={about3} 
            alt="About 3" 
            className='w-full h-full object-cover'
        />
    </div>

</div>
                <div className='flex flex-col justify-center'>
                    <div className="mb-6"><span className='inline-block bg-amber-100 text-amber-800 font-semibold px-4 py-1 rounded-full text-sm'>Know About Us</span></div>
                    <h1 className='font-bold text-4xl md:text-5xl mb-6 text-black leading-tight'>Know About Histudy Learning Platform</h1>
                    <p className='text-gray-600 mb-8 leading-relaxed'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
                    <div className="grid gap-6">
                        <div className='flex items-start gap-4'>
                            <div className='flex items-center justify-center shrink-0 rounded-full bg-red-100 w-16 h-16'><CiHeart className='text-red-600 text-3xl' /></div>
                            <div><h3 className='text-black font-bold text-xl mb-2'>Flexible Classes</h3><p className="text-gray-600 text-sm">You can access classes anytime, anywhere to suit your busy schedule.</p></div>
                        </div>
                        <div className='flex items-start gap-4'>
                            <div className='flex items-center justify-center shrink-0 rounded-full bg-blue-100 w-16 h-16'><FiBook className='text-blue-600 text-3xl' /></div>
                            <div><h3 className='text-black font-bold text-xl mb-2'>Offline Mode</h3><p className="text-gray-600 text-sm">Download lessons and learn without an internet connection easily.</p></div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button className="relative cursor-pointer overflow-hidden rounded px-8 py-4 group bg-blue-600 text-white font-bold"><span className="relative flex items-center gap-2"><span>More About Us</span><span><FaArrowRight /></span></span></button>
                    </div>
                </div>
            </div>

            {/* --- SECTION 4: PROMO CARDS --- */}
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 transition-transform hover:-translate-y-1 duration-300 border border-gray-100">
                    <div className="flex-1"><span className="px-4 py-2 rounded-full border border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wide">New Collection</span><h2 className="text-3xl font-bold mt-5 text-gray-900 leading-tight">Online Courses from Histudy</h2><p className="text-gray-500 mt-3">Top instructors from around the world</p></div>
                    <div className="relative w-full sm:w-48 h-32 shrink-0"><img src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Student" className="w-full h-full object-cover rounded-xl shadow-md" /><div className="absolute inset-0 flex items-center justify-center"><div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform"><FaPlay className="text-blue-600 text-lg ml-1" /></div></div></div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl transition-transform hover:-translate-y-1 duration-300 border border-gray-100">
                    <span className="px-4 py-2 rounded-full border border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wide">Top Teacher</span><h2 className="text-3xl font-bold mt-5 text-gray-900 leading-tight">Free Online Courses from Histudy School</h2><p className="text-gray-500 mt-3 mb-8">Top instructors from around the world</p>
                    <button className="bg-[#8053FF] hover:bg-[#6f42ef] text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-purple-200 transition-colors flex items-center gap-2">Join Now <FaArrowRight /></button>
                </div>
            </div>

            {/* --- SECTION 5: TIMELINE --- */}
            <section className="py-20 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-5 text-center">
                    <span className="inline-block px-4 py-1 mb-5 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full uppercase tracking-wider">Why Choose Us</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-20">Creating A Community Of <br className="hidden md:block" /> Life Long Learners.</h2>
                    <div className="relative">
                        <div className="hidden md:block absolute top-0 left-0 w-full h-0.5 bg-blue-200"></div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => {
                                const isLower = index === 1 || index === 3;
                                return (
                                    <div key={index} className="relative">
                                        <div className="hidden md:flex flex-col items-center absolute top-0 left-1/2 -translate-x-1/2 w-full -z-0"><div className="w-5 h-5 bg-white border-4 border-blue-600 rounded-full -mt-2.5 z-10"></div><div className={`w-0.5 bg-blue-200 ${isLower ? 'h-24' : 'h-12'}`}></div></div>
                                        <div className={`bg-white overflow-hidden p-8 py-20 rounded-xl shadow-xl relative transition-transform duration-300 hover:-translate-y-2 group ${isLower ? 'mt-0 md:mt-24 ' : 'mt-0 md:mt-12'} `}>
                                            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 ring-8 ring-white">{stat.icon}</div>
                                            <h3 className="text-4xl font-bold text-gray-900"><CountUp end={stat.number} duration={2000} /></h3>
                                            <p className="text-gray-500 mt-2">{stat.label}</p>
                                            <div className="absolute bottom-0 left-0 w-full rounded-4xl h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-b-3xl"></div>
                                            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl pointer-events-none"><div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-100 rounded-full opacity-50 blur-2xl group-hover:bg-purple-200 transition-colors"></div></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 6: TESTIMONIALS (MARQUEE) --- */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-5 text-center mb-16">
                    <span className="inline-block px-4 py-1 mb-5 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full uppercase tracking-wider">EDUCATION FOR EVERYONE</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">People like histudy education. <br /> No joking - here’s the proof!</h2>
                </div>
                <div className="marquee-container w-full mb-8"><div className="flex w-max animate-marquee-left">{[...reviewsRow1, ...reviewsRow1, ...reviewsRow1].map((item, index) => (<TestimonialCard key={`row1-${index}`} item={item} />))}</div></div>
                <div className="marquee-container w-full"><div className="flex w-max animate-marquee-right">{[...reviewsRow2, ...reviewsRow2, ...reviewsRow2].map((item, index) => (<TestimonialCard key={`row2-${index}`} item={item} />))}</div></div>
            </section>

            {/* --- SECTION 7: UPCOMING EVENTS (SLIDER) --- */}
            <section className="py-24 bg-gradient-to-r from-[#6A4DF4] to-[#A088F8]">
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-16 px-5">
                        <span className="inline-block px-4 py-1 mb-5 text-sm font-bold text-white bg-white/20 rounded-full uppercase tracking-wider backdrop-blur-sm">SIMULATED TO TAKE PART IN?</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">Upcoming Events</h2>
                    </div>
                    {/* The Interactive Slider Component */}
                    <EventsSlider />
                </div>
            </section>

            {/* --- SECTION 8: TEACHERS --- */}
            <TeachersSection />

            {/* --- SECTION 9: BLOG --- */}
            <BlogSection />

            {/* --- SECTION 10: NEWSLETTER --- */}
            <NewsletterSection />
            <Footer/>
        </div>
    );
}

export default Home;