import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./pages/courses";
import Home from "./pages/Home";
import  Profile  from "./pages/profile";
import Contact from './pages/contact';
import Instructor from "./pages/instructor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Navigate to="/courses" />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/instructor" element={<Instructor />} />
    </Routes>
  );
}

export default App;
