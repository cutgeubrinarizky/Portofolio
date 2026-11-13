import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/mockData';
import Logo from './Logo';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isLight, setIsLight] = useState(() =>
    document.documentElement.classList.contains('light')
  );

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle('light', next);
    try {
      localStorage.setItem('theme', next ? 'light' : 'dark');
    } catch (e) {}
  };

  const themeButton = (
    <button
      onClick={toggleTheme}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      title={isLight ? 'Dark mode' : 'Light mode'}
      className="w-10 h-10 rounded-lg bg-surface border border-surface2 flex items-center justify-center text-[#E8B4C8] hover:bg-surface2 transition-all"
    >
      {isLight ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    else navigate(`/${href}`); // on a case-study page: go home, then scroll
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-base/95 backdrop-blur-lg shadow-lg shadow-[#E8B4C8]/10' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (pathname !== '/') navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-label="Back to top"
            >
              <Logo />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-ink/70 hover:text-[#E8B4C8] transition-colors font-medium relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              {themeButton}
              <a
                href={personalInfo.resumeUrl}
                download
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] text-white font-semibold hover:shadow-lg hover:shadow-[#FF6B9D]/30 transition-all duration-300 hover:scale-105"
              >
                Resume
              </a>
            </div>

            {/* Mobile: theme + menu */}
            <div className="md:hidden flex items-center gap-2">
            {themeButton}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-lg bg-surface border border-surface2 flex items-center justify-center text-[#E8B4C8] hover:bg-surface2 transition-all"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div 
          className={`absolute right-0 top-0 h-full w-64 bg-surface border-l border-surface2 transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6 pt-20">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-ink/70 hover:text-[#E8B4C8] transition-colors font-medium py-4 border-b border-surface2"
              >
                {item.label}
              </a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              download
              className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] text-white font-semibold text-center hover:shadow-lg hover:shadow-[#FF6B9D]/30 transition-all"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
