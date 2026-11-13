import React from 'react';
import { experience } from '../data/mockData';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-base via-surface to-base relative">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-3">
        <div className="absolute top-20 right-1/3 w-28 h-28 border border-[#FF6B9D]/20 rounded-full animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-20 left-1/3 w-20 h-20 border border-[#E8B4C8]/15 rotate-12" />
      </div>
      <div className="container mx-auto px-6" data-reveal>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] mx-auto rounded-full" />
        </div>

        <div className="flex justify-center">
          <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8">
            {experience.map((job) => (
            <div key={job.id} className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] rounded-2xl blur opacity-15 group-hover:opacity-30 transition duration-300" />
              <div className="relative h-full bg-surface/80 rounded-2xl p-8 border border-[#E8B4C8]/20 hover:border-[#E8B4C8]/60 transition-all duration-300 backdrop-blur-xl">
                {/* Company & Position */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-28 h-16 rounded-xl bg-white flex items-center justify-center flex-shrink-0 p-3">
                    {job.logo ? (
                      <img loading="lazy" decoding="async" src={job.logo} alt={job.company} className="max-w-full max-h-full object-contain" />
                    ) : (
                      <Briefcase className="w-8 h-8 text-[#FF6B9D]" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-ink mb-2">{job.position}</h3>
                    <p className="text-[#E8B4C8] font-bold text-lg mb-3">{job.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-ink/70">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#E8B4C8]" />
                        {job.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#FF6B9D]" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-ink/80 mb-6 leading-relaxed">{job.description}</p>

                {/* Highlights */}
                <div className="grid gap-3">
                  {job.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-surface2/40 border border-ink/5">
                      <div className="w-2 h-2 rounded-full bg-[#FF6B9D] mt-2 flex-shrink-0" />
                      <span className="text-ink/70 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
