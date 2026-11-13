import React from 'react';
import { personalInfo } from '../data/mockData';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import { Heart, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base border-t border-surface2 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="mb-4">
                <Logo />
              </div>
              <p className="text-ink/70 mb-4">
                {personalInfo.title}
              </p>
              <p className="text-ink/50 text-sm">
                Building digital experiences with passion and precision.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-ink font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Experience', 'Projects', 'Skills', 'About', 'Certifications', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = item.toLowerCase();
                      const el = document.getElementById(targetId);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      else navigate(`/#${targetId}`);
                    }}
                    className="block text-ink/70 hover:text-[#E8B4C8] transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-ink font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-3 mb-4">
                <a
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-surface border border-surface2 flex items-center justify-center text-[#E8B4C8] hover:bg-gradient-to-br hover:from-[#E8B4C8] hover:to-[#FF6B9D] hover:text-ink hover:border-transparent transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`https://${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-surface border border-surface2 flex items-center justify-center text-[#E8B4C8] hover:bg-gradient-to-br hover:from-[#FF6B9D] hover:to-[#00D9FF] hover:text-ink hover:border-transparent transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 rounded-lg bg-surface border border-surface2 flex items-center justify-center text-[#E8B4C8] hover:bg-gradient-to-br hover:from-[#00D9FF] hover:to-[#E8B4C8] hover:text-ink hover:border-transparent transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <p className="text-ink/60 text-sm">
                {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-surface2">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-ink/60 text-sm">
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>
              <p className="text-ink/40 text-xs">
                Built with React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
