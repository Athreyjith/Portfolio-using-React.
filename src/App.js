import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useLocation} from 'react-router-dom';
import Home from './container/home';
import About from './container/about';
import Portfolio from './container/portfolio';
import Resume from './container/resume';
import Skills from './container/skills';
import Contact from './container/contact';
import Nav from './component/nav';
import './App.scss'
// import Particles from 'react-tsparticles';

// import particle from './utility/particle';
// import { loadFull } from 'tsparticles';


function App() {
  // const location = useLocation();
  // console.log(location);
   
  // const renderParticlesjsinhomepage = location.pathname==="/";

//   const handleinit = async (main)=>{
// await loadFull(main)
//   }
  return (
    <div className="App">
      {/* particles */}
     
      {/* {
        renderParticlesjsinhomepage &&  (<Particles id="particles" options={particle} init={handleinit}/>)
      } */}
      {/* nav main */}
      <Nav/>
      {/* main page */}
      <div className='App_mainpagecontent'><Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </div>
      
   
    </div>
    
  );
}

export default App;
