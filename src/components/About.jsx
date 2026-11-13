import React from "react";
import {
  personalInfo,
  education,
  stats,
} from "../data/mockData";
import { MapPin, Mail, Linkedin, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-base via-surface to-base relative"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 border border-[#E8B4C8]/20 rounded-full" />
        <div className="absolute bottom-40 left-20 w-32 h-32 border border-[#FF6B9D]/15 rotate-45" />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#00D9FF] rounded-full animate-pulse" />
      </div>
      <div className="container mx-auto px-6" data-reveal>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image & Contact */}
            <div className="space-y-6">
              {/* Profile Card */}
              <div className="bg-surface rounded-2xl p-8 border border-surface2 hover:border-[#E8B4C8]/50 transition-all duration-300">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#E8B4C8] to-[#FF6B9D] p-1 group">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-surface">
                    <img loading="lazy" decoding="async"
                      src={`${process.env.PUBLIC_URL}/${personalInfo.profileImage}`}
                      alt={personalInfo.name}
                      className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-500 box-shadow-xl"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-ink text-center mb-2">
                  {personalInfo.name}
                </h3>
                <p className="text-[#E8B4C8] text-center mb-6">
                  {personalInfo.title}
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-ink/70 hover:text-[#E8B4C8] transition-colors">
                    <MapPin className="w-5 h-5 text-[#E8B4C8]" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 text-ink/70 hover:text-[#E8B4C8] transition-colors"
                  >
                    <Mail className="w-5 h-5 text-[#E8B4C8]" />
                    <span>{personalInfo.email}</span>
                  </a>
                  <a
                    href={`https://${personalInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-ink/70 hover:text-[#E8B4C8] transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-[#E8B4C8]" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>

              {/* Education Card */}
              <div className="bg-surface rounded-2xl p-6 border border-surface2 hover:border-[#E8B4C8]/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#E8B4C8] to-[#FF6B9D] flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-ink mb-1">
                      {education.degree}
                    </h4>
                    <p className="text-[#E8B4C8] text-sm mb-2">
                      {education.institution}
                    </p>
                    <p className="text-ink/60 text-sm">
                      {education.duration}
                    </p>
                    <p className="text-ink/60 text-sm">
                      GPA:{" "}
                      <span className="text-[#E8B4C8] font-semibold">
                        {education.gpa}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Bio & Stats */}
            <div className="space-y-6">
              {/* Bio */}
              <div className="bg-surface rounded-2xl p-8 border border-surface2 hover:border-[#FF6B9D]/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-ink mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-gradient-to-b from-[#E8B4C8] to-[#FF6B9D] rounded-full" />
                  My Journey
                </h3>
                <p className="text-ink/70 leading-relaxed text-lg">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-surface rounded-xl p-6 border border-surface2 hover:border-[#E8B4C8]/50 transition-all duration-300 text-center"
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-ink/60 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
