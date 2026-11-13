import React from "react";
import { certifications } from "../data/mockData";
import { Award } from "lucide-react";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-b from-base via-surface to-surface2 relative"
    >
      <div className="container mx-auto px-6" data-reveal>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] bg-clip-text text-transparent">
                Certifications & Training
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                title={cert.description}
                className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-surface2 hover:bg-surface transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#E8B4C8]/10 border border-[#E8B4C8]/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-[#E8B4C8]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-ink font-semibold leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-ink/60 text-sm mt-1">
                    {cert.organization}
                  </p>
                  <p className="text-ink/40 text-xs mt-1">
                    {cert.type} · {cert.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
