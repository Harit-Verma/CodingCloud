import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookSquare, FaLinkedinIn, FaTwitter, FaChevronUp, FaSearch, FaFolderMinus } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { RiAdminLine } from "react-icons/ri";
import logo from '../assets/images/logo.png';
import { LayoutGrid } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="h-12 shadow text-sm bg-gray-800 text-gray-400 flex justify-between items-center px-5">
        <ul className="flex items-center gap-5 px-4">
          <li className="flex items-center gap-2 hover:text-gray-200 cursor-pointer">
            <FaInstagram />
            <p>100K</p>
          </li>
          <li className="flex items-center gap-2 hover:text-gray-200 cursor-pointer">
            <FaFacebookSquare />
            <p>500K</p>
          </li>
          <li className="flex items-center gap-2 hover:text-gray-200 cursor-pointer">
            <IoCallOutline />
            <p>+1-202-555-0174</p>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <p className="bg-blue-600 px-4 py-0.5 rounded-2xl text-amber-50">Hot</p>
          <p className="h-5 flex gap-1">
            <img src="https://histudy.pixcelsthemes.com/livepreview/histudy/assets/images/icons/hand-emojji.svg" alt="" className="h-5" />
            <span>Intro price. Get Histudy for Big Sale -95% off.</span>
          </p>
        </div>
        <div className="flex items-center gap-5">
          <div className="icons flex items-center border-r-2 px-3">
            <div className="cursor-pointer transition hover:scale-120 duration-500 ease-in-out hover:text-gray-50 hover:bg-gray-900 rounded-4xl p-2">
              <FaInstagram />
            </div>
            <div className="cursor-pointer transition hover:scale-120 duration-500 ease-in-out hover:text-gray-50 hover:bg-gray-900 rounded-4xl p-2">
              <FaFacebookSquare />
            </div>
            <div className="cursor-pointer transition hover:scale-120 duration-500 ease-in-out hover:text-gray-50 hover:bg-gray-900 rounded-4xl p-2">
              <FaLinkedinIn />
            </div>
            <div className="cursor-pointer transition hover:scale-120 duration-500 ease-in-out hover:text-gray-50 hover:bg-gray-900 rounded-4xl p-2">
              <FaTwitter />
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* LANGUAGE DROPDOWN */}
            <div className="relative group py-4">
              <div className="flex items-center gap-1 cursor-pointer">
                <p className="flex items-center gap-2">
                  <img src="https://flagcdn.com/us.svg" alt="English" className="h-4 w-6 object-cover" />
                  English
                </p>
                <FaChevronUp className="transition-transform group-hover:rotate-180" />
              </div>
              {/* DROPDOWN MENU */}
              <div className="absolute hidden group group-hover:block bg-white text-black shadow-lg rounded-md top-10 left-0 w-32 py-2 z-50">
                <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <span>English</span>
                </p>
                <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <span>Hindi</span>
                </p>
                <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <span>Marathi</span>
                </p>
              </div>
            </div>
            <div className="relative group py-4">
              <div className="flex items-center gap-1 cursor-pointer">
                <p>USD</p>
                <FaChevronUp className="group-hover:rotate-180 transition-transform" />
              </div>
              <div className="absolute hidden group group-hover:block bg-white text-black shadow-lg rounded-md top-10 right-0 w-20 py-4 z-50">
                <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">INR</p>
                <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">EUR</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="bg-gray-100 w-full relative transform duration-500 ease-in-out flex items-center justify-between px-4">
  
 <div className="logo shadow-2xl flex gap-5 items-center">
  <div>
    <img
      src={logo}
      alt="Histudy Logo"
      className="h-10 w-auto object-contain"
    />
  </div>
</div>

  {/* CATEGORY MEGA DROPDOWN */}
  <div className="relative group">
    <button className="flex items-center gap-2 bg-gray-100 hover:bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-800 transition">
      <LayoutGrid className="w-4 h-4" />
      <span>Category</span>
    </button>

    {/* DROPDOWN PANEL */}
    <div className="absolute left-0 mt-3 w-[520px] bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
      <div className="flex p-6 gap-8">

        {/* LEFT COLUMN – CATEGORY LIST */}
        <div className="w-1/3">
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
              Course School
            </li>
            <li className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
              Online School
            </li>
            <li className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
              Kindergarten
            </li>
            <li className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
              Classic LMS
            </li>
          </ul>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="w-1/3">
          <p className="text-xs font-semibold text-gray-400 mb-2 tracking-wide">
            COURSE TITLE
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">Web Design</li>
            <li className="hover:text-blue-600 cursor-pointer">Art</li>
            <li className="hover:text-blue-600 cursor-pointer">Figma</li>
            <li className="hover:text-blue-600 cursor-pointer">Adobe</li>
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-1/3">
          <p className="text-xs font-semibold text-gray-400 mb-2 tracking-wide">
            COURSE TITLE
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">Photo</li>
            <li className="hover:text-blue-600 cursor-pointer">English</li>
            <li className="hover:text-blue-600 cursor-pointer">Math</li>
            <li className="hover:text-blue-600 cursor-pointer">Read</li>
          </ul>
        </div>
      </div>
    </div>
  </div>


        <nav className="bg-gray-100 flex gap-8 items-center transform duration-500 ease-in-out">
          <ul className={isMenuOpen ? "show" : "flex gap-3 font-bold"}>
            {/* SIMPLIFIED: Home - Just a simple link, NO dropdown */}
            <li className="py-5 hover:text-blue-500 cursor-pointer">
              <Link to="/" className="font-bold hover:text-blue-500">Home</Link>
            </li>

            {/* Courses Dropdown */}
            <div className="group">
              <li className="flex justify-center items-center py-5 gap-1 group-hover:text-blue-500">
                <Link to="/courses" className="group-hover:text-blue-500">Courses</Link>
                <FaChevronUp className="group-hover:rotate-180 transition duration-400" />
              </li>
              <div className="absolute z-100 w-1/2 top-28.5 bg-gray-800 text-white rounded-md shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500 ease-in-out navbar-banner">
                {/* Courses dropdown content */}
              </div>
            </div>

            {/* Dashboard Dropdown - Already Fixed */}
            <div className="group relative">
              <li className="py-5 flex justify-center items-center gap-1 group-hover:text-blue-500 cursor-pointer">
                <span>Dashboard</span>
                <FaChevronUp className="group-hover:rotate-180 transition-transform duration-300" />
              </li>
              <div className="absolute z-100 w-60 top-14 left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40">
                <div className="p-4">
                  {/* Instructor Dashboard */}
                  <div className="relative group/sub">
                    <div className="flex justify-between items-center p-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                      <span>Instructor Dashboard</span>
                      <span className="text-gray-400">›</span>
                    </div>
                    <div className="absolute left-full top-0 ml-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-50">
                      <div className="p-4 border-l-2 border-blue-100">
                        <p className="mb-3 p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded cursor-pointer">Dashboard</p>
                        <p className="mb-3 p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded cursor-pointer">Profile</p>
                        <p className="mb-3 p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded cursor-pointer">Enroll Courses</p>
                        <p className="mb-3 p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded cursor-pointer">Wishlist</p>
                        <p className="mb-3 p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded cursor-pointer">Reviews</p>
                        <p className="mb-3 p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded cursor-pointer">Messages</p>
                      </div>
                    </div>
                  </div>

                  {/* Student Dashboard */}
                  <div className="relative group/sub mt-2">
                    <div className="flex justify-between items-center p-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                      <span>Student Dashboard</span>
                      <span className="text-gray-400">›</span>
                    </div>
                    <div className="absolute left-full top-0 ml-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-50">
                      <div className="p-4 border-l-2 border-blue-100">
                        <p className="mb-3 p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded cursor-pointer">Dashboard</p>
                        <p className="mb-3 p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded cursor-pointer">Profile</p>
                        <p className="mb-3 p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded cursor-pointer">Enroll Courses</p>
                        <p className="mb-3 p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded cursor-pointer">Wishlist</p>
                        <p className="mb-3 p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded cursor-pointer">Reviews</p>
                        <p className="mb-3 p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded cursor-pointer">Messages</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* PAGES MEGA DROPDOWN */}
<div className="group relative">
  <li className="py-5 flex items-center gap-1 cursor-pointer group-hover:text-blue-500">
    <span>Pages</span>
    <FaChevronUp className="transition-transform duration-300 group-hover:rotate-180" />
  </li>

  {/* DROPDOWN */}
  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[1100px] bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
    <div className="grid grid-cols-4 gap-8 p-8">

      {/* COLUMN 1 */}
      <div>
        <p className="text-xs font-semibold text-gray-400 mb-4">GET STARTED</p>
        <ul className="space-y-3 text-sm text-gray-700">
          <li>
          <Link to="/about" className="hover:text-blue-600 cursor-pointer"> About Us 01</Link>
          </li>
          <li>
          <Link to="/events" className="hover:text-blue-600 cursor-pointer"> Events</Link>
          </li>
          <li>
          <Link to="/event-details" className="hover:text-blue-600 cursor-pointer"> Event Details</Link>
          </li>
          <li>
          <Link to="/academy-gallery" className="hover:text-blue-600 cursor-pointer"> Academy Gallery</Link>
          </li>
          <li>
          <Link to="/admission-guide" className="hover:text-blue-600 cursor-pointer"> Admission Guide</Link>
          </li>
        </ul>
      </div>

      {/* COLUMN 2 */}
      <div>
        <p className="text-xs font-semibold text-gray-400 mb-4">GET STARTED</p>
        <ul className="space-y-3 text-sm text-gray-700">
           <li>
         <Link to="/profile" className="hover:text-blue-600 cursor-pointer">
              Profile
          </Link>
         </li>
          <li>
          <Link to="/contact" className="hover:text-blue-600 cursor-pointer">
              Contact Us
          </Link>
           </li>
           <li>
             <Link to="/instructor" className="hover:text-blue-600 cursor-pointer">
               Become a Teacher
             </Link>
            </li>

          <li>
          <Link to="/Teachers" className="hover:text-blue-600 cursor-pointer">
              Instructors
          </Link>
          </li>

          <li>
          <Link to="/faqs" className="hover:text-blue-600 cursor-pointer">
              FAQs
          </Link>
          </li>
          <li>
          <Link to="/privacy-policy" className="hover:text-blue-600 cursor-pointer">
              Privacy Policy
          </Link>
          </li>

          {/* <li className="hover:text-blue-600 cursor-pointer">404 Page</li>
          <li className="hover:text-blue-600 cursor-pointer">Maintenance</li> */}
        </ul>
      </div>

      {/* COLUMN 3 */}
      <div>
        <p className="text-xs font-semibold text-gray-400 mb-4">SHOP PAGES</p>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-center gap-2 text-blue-600 font-semibold cursor-pointer">
            Shop
            <span className="text-[10px] bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">
              Sale Anything
            </span>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">Single Product</li>
          <li className="hover:text-blue-600 cursor-pointer">Cart Page</li>
          <li className="hover:text-blue-600 cursor-pointer">Checkout</li>
          <li className="hover:text-blue-600 cursor-pointer">Wishlist Page</li>
          <li className="hover:text-blue-600 cursor-pointer">My Account</li>
          <li className="hover:text-blue-600 cursor-pointer">Login & Register</li>
          <li className="hover:text-blue-600 cursor-pointer">Subscription</li>
        </ul>
      </div>

      {/* COLUMN 4 – PREVIEW CARDS */}
      <div className="space-y-4">
        {[
          "Online Education",
          "Language Club",
          "University Status",
          "Course School",
          "Academy"
        ].map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-gray-100 hover:bg-blue-50 transition rounded-xl p-4 cursor-pointer"
          >
            <span className="font-semibold text-sm">{item}</span>
            <span className="text-gray-400">›</span>
          </div>
        ))}
      </div>

    </div>
  </div>
</div>

          </ul>

          <div className="flex gap-5 font-bold items-center">
            <div className="flex items-center border-r-2 px-3 gap-5">
              <div>
                <FaSearch />
              </div>
              <div>
                <CiShoppingCart className="h-5 w-5 font-bold" />
              </div>
            </div>
            <div className="flex gap-3 items-center font-bold">
              <RiAdminLine />
              <p>Admin</p>
            </div>
            <div className="border-2 rounded-4xl px-3 py-1 overflow-hidden w-25">
              <p className="animate-slide text-nowrap">Enroll Now</p>
            </div>
          </div>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

