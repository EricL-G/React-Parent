import Header from './components/Header';
import List from './components/List';
// import Imageslide from './components/Imageslide'
import Button from './components/Button'
import CanvasSwitcher from './components/CanvasSwitcher'
import myPics from './assets/Albert3.png';
import myPics2 from './assets/DebtCategories.png';
import myPics3 from './assets/usdebt.png';
import React from "react";
import Carousels from "./components/Carousels";
import Radio from "./components/Radio";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import "flowbite"; // Import Flowbite JS for interactive components
import "./index.css"; // Tailwind styles
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
