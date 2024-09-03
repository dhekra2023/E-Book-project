import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./components/homePage/home";
import About from "./components/About/about"; 
import Contact from "./components/contact/contact";
import Categories from './components/categories/categories'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
