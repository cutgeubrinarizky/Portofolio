import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudy from './components/CaseStudy';
import useReveal from './hooks/use-reveal';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from './components/ui/toaster';

const Home = () => {
  const { hash } = useLocation();
  useReveal();
  // Arriving from a case study via /#section: scroll to that section
  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 50);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <>
      <Hero />
      <Clients />
      <Experience />
      <Projects />
      <Skills />
      <About />
      <Certifications />
      <Contact />
    </>
  );
};

const CaseStudyPage = () => {
  const { pathname } = useLocation();
  useReveal([pathname]);
  return <CaseStudy />;
};

function App() {
  useEffect(() => {
    document.documentElement.classList.add('js-reveal');
  }, []);

  return (
    <BrowserRouter>
      <div className="App bg-base text-ink">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study/:slug" element={<CaseStudyPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <Toaster />
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

export default App;
