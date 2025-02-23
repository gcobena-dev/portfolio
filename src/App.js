import React, { useState } from 'react';
import 'devicon/devicon.min.css';
import Header from './components/Header';
import About from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
// import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`App ${theme}`}>
      <Header toggleTheme={toggleTheme} />
      <div className="content">
        <main>
          {/* Secciones */}
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="experience"><Experience /></section>
          {/* <section id="projects" style={{ display: 'none' }}><Projects /></section>  */}
          <section id="education"><Education /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
