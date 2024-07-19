import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DashBoard from "./components/DashBoard";
import Postings from "./components/Postings";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="Postings" element={<Postings />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
