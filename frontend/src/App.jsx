import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./components/Gallery"; // ✅ Make sure this matches the file name
import Upload from "./pages/Upload"; // ✅ Also verify Upload.jsx exists

function App() {
  return (
  <>
    <Navbar />
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
      </>
  );
}

export default App;
