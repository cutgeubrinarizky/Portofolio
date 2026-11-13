import React from 'react';
import { skills } from '../data/mockData';
import { brandIcons } from '../data/brandIcons';
import { Smartphone, Monitor, Server, Wrench, Boxes } from 'lucide-react';

const groupIcons = {
  Mobile: Smartphone,
  Frontend: Monitor,
  'Backend & Data': Server,
  'Tools & Delivery': Wrench,
};

const SkillIcon = ({ slug }) =>
  brandIcons[slug] ? (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d={brandIcons[slug]} />
    </svg>
  ) : (
    <Boxes className="w-4 h-4" aria-hidden="true" />
  );

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-surface2 via-surface to-base relative">
      <div className="container mx-auto px-6" data-reveal>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] bg-clip-text text-transparent">
              Skills & Tools
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] mx-auto rounded-full mb-6" />
          <p className="text-ink/70 text-lg max-w-2xl mx-auto">
            The stack I use day to day across mobile, web and backend work
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {skills.map(({ group, items }) => {
            const Icon = groupIcons[group] || Boxes;
            return (
              <div
                key={group}
                className="bg-surface rounded-2xl p-6 border border-surface2 hover:border-[#E8B4C8]/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E8B4C8] to-[#FF6B9D] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-ink">{group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-surface2/70 border border-ink/5 text-sm text-ink/85 hover:text-[#E8B4C8] hover:border-[#E8B4C8]/30 transition-colors"
                    >
                      <SkillIcon slug={item.icon} />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
