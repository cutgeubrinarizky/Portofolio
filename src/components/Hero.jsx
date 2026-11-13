import React, { useEffect, useState } from "react";
import { personalInfo, stats } from "../data/mockData";
import { ChevronDown, Download, Linkedin, Github, Mail } from "lucide-react";
import shotCustomer from "./screenshots/physio-customer-1.webp";
import shotTherapist from "./screenshots/physio-therapist-1.webp";
import shotLivie from "./screenshots/livie-5.webp";

const Phone = ({ src, alt, className = "" }) => (
  <div
    className={`absolute rounded-[2.2rem] bg-[#111] p-[7px] shadow-2xl shadow-black/40 ring-1 ring-white/10 ${className}`}
  >
    <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-white">
      <img src={src} alt={alt} className="w-full h-full object-cover object-top" decoding="async" />
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-[#111]" />
    </div>
  </div>
);

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    { href: `https://${personalInfo.linkedin}`, Icon: Linkedin, label: "LinkedIn" },
    { href: `https://${personalInfo.github}`, Icon: Github, label: "GitHub" },
    { href: `mailto:${personalInfo.email}`, Icon: Mail, label: "Email" },
  ];

  return (
    <section className="hero-section relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-base via-surface to-surface2">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(232, 180, 200, 0.15), transparent 50%)`,
          }}
        />
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-[#E8B4C8]/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#FF6B9D]/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgb(var(--c-ink)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--c-ink)) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-24">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#E8B4C8]/30 bg-[#E8B4C8]/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <p className="text-[#E8B4C8] text-sm font-medium tracking-wide">
                Currently building Flutter apps at Physiomobile
              </p>
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold mb-5 tracking-tight leading-[1.05]">
              <span className="bg-gradient-to-r from-[#E8B4C8] via-[#FF6B9D] to-[#D89BB5] bg-clip-text text-transparent animate-gradient">
                {personalInfo.name}
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-semibold text-ink/90 mb-5">{personalInfo.headline}</h2>

            <p className="text-lg text-ink/70 max-w-xl mx-auto lg:mx-0 mb-9 leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] text-white font-semibold hover:opacity-90 transition-all duration-300"
              >
                View My Work
              </button>
              <a
                href={`${process.env.PUBLIC_URL}/${encodeURI(personalInfo.resumeUrl.replace(/^\//, ""))}`}
                download
                className="px-8 py-4 rounded-lg border-2 border-[#E8B4C8]/50 bg-surface/50 text-[#E8B4C8] font-semibold hover:bg-[#E8B4C8]/10 hover:border-[#E8B4C8] transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
              <div className="flex gap-2">
                {socials.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-lg bg-surface/70 border border-surface2 flex items-center justify-center text-ink/70 hover:text-[#E8B4C8] hover:border-[#E8B4C8]/50 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl mx-auto lg:mx-0 pt-8 border-t border-ink/10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-ink">{stat.value}</div>
                  <div className="text-ink/50 text-sm mt-1 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Device mockups: real screens from shipped apps */}
          <div className="relative mx-auto w-[300px] h-[400px] sm:w-[420px] sm:h-[520px]" aria-hidden="true">
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#E8B4C8]/40 to-[#FF6B9D]/20 blur-3xl" />
            <Phone
              src={shotLivie}
              alt=""
              className="w-[130px] h-[270px] sm:w-[180px] sm:h-[370px] left-0 top-[70px] sm:top-[90px] -rotate-[8deg] opacity-95 animate-float-slow"
            />
            <Phone
              src={shotTherapist}
              alt=""
              className="w-[130px] h-[270px] sm:w-[180px] sm:h-[370px] right-0 top-[70px] sm:top-[90px] rotate-[8deg] opacity-95 animate-float-slow [animation-delay:1.2s]"
            />
            <Phone
              src={shotCustomer}
              alt=""
              className="w-[150px] h-[310px] sm:w-[210px] sm:h-[430px] left-1/2 -translate-x-1/2 top-0 z-10 animate-float"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-base to-transparent z-20 pointer-events-none" />
      <button
        onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-11 h-11 rounded-full border-2 border-[#E8B4C8]/30 bg-surface/50 flex items-center justify-center animate-bounce"
      >
        <ChevronDown className="w-5 h-5 text-[#E8B4C8]" />
      </button>
    </section>
  );
};

export default Hero;
