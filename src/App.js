import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './container/home';
import About from './container/about';
import Portfolio from './container/portfolio';
import Resume from './container/resume';
import Skills from './container/skills';
import Contact from './container/contact';
import Nav from './component/nav';
import './App.css';


function App() {
  return (
    <div className="App">
      {/* particles */}
      {/* nav main */}
      {/* main page */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Nav/>
    </div>
    
  );
}

export default App;
