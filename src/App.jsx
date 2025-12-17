import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./pages/courses";
import Home from "./pages/Home";
import  Profile  from "./pages/profile";
import Contact from './pages/contact';
import Instructor from "./pages/instructor";
import { GiTeacher } from "react-icons/gi"; 
import Teachers from "./pages/Teachers";
import FAQsPage from "./pages/faqs";
import PrivacyPolicyPage from "./pages/Privacy";
import AdmissionGuide from "./pages/AdmissionGuide";
import About from "./pages/About";
import Events from "./pages/Events";
import AcademyGallery from "./pages/AcademyGallery";
import EventDetails from "./pages/EventDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Navigate to="/courses" />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/instructor" element={<Instructor />} />
      <Route path="/Teachers" element={<Teachers />} />
      <Route path="/faqs" element={<FAQsPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/admission-guide" element={<AdmissionGuide />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/academy-gallery" element={<AcademyGallery />} />
      <Route path="/event-details" element={<EventDetails />} />
    </Routes>
  );
}

export default App;
