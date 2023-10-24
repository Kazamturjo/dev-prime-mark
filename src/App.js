import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from './pages/Home'
import About from "./pages/About/About";
import Contact from "./pages/ContactUs/Contact";
import ProductList from "./components/Products/ProductList";
import Project from "./pages/Project";
// import Products from "./components/Catagoris/AboutTheCompany";


const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductList/>} />
          <Route path="/projects" element={<Project/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </Router>
  );
};

export default App;