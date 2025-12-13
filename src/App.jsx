import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./pages/courses";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Navigate to="/courses" />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  );
}

export default App;
