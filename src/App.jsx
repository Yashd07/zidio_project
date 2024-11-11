// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Achievements from './components/Achievements';
import Team from './components/Team';
import TeamVideos from './components/TeamVideos';
import Footer from './components/Footer';
import Contact from './components/Contact'; 

function App() {
  return (
    <div>
      <Navbar />
      <div id="home" className="pt-20">
        <Home />
      </div>
      <div id="projects" className="pt-20">
        <Projects />
      </div>
      <div id="testimonials" className="pt-20">
        <Testimonials />
      </div>
      <div id="achievements" className="pt-20">
        <Achievements />
      </div>
      <div id="team" className="pt-20">
        <Team />
      </div>
      <div id="videos" className="pt-20">
        <TeamVideos />
      </div>
      <div id="contact" className="pt-20">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
