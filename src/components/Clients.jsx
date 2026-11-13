import React from "react";
import posind from "./logos/posind.png";
import physio from "./logos/physio.svg";
import recht from "./logos/recht.png";
import ansan from "./logos/ansan.png";
import snl from "./logos/snl.png";
import bps from "./logos/bps.png";
import temuhobi from "./logos/temuhobi.png";

const clients = [
  { name: "PT Pos Indonesia", logo: posind, h: "h-9" },
  { name: "Physiomobile", logo: physio, h: "h-5" },
  { name: "Recht Indonesia", logo: recht, h: "h-8" },
  { name: "Ansan Enamel Indonesia", logo: ansan, h: "h-9" },
  { name: "SNL Global", logo: snl, h: "h-9" },
  { name: "BPS Aceh", logo: bps, h: "h-9" },
  { name: "TemuHobi", logo: temuhobi, h: "h-8" },
];

const Clients = () => (
  <section aria-label="Companies and clients" className="py-12 bg-base">
    <div className="container mx-auto px-6" data-reveal>
      <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-ink/40 mb-6">
        Built products for
      </p>
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
        {clients.map((c) => (
          <div
            key={c.name}
            title={c.name}
            className="h-14 px-5 rounded-xl bg-white border border-black/5 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <img src={c.logo} alt={c.name} loading="lazy" className={`${c.h} w-auto object-contain`} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Clients;
