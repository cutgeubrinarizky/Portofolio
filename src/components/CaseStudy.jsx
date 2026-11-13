import React, { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Lock, User, Calendar, Building2, Smartphone } from "lucide-react";
import { caseStudies } from "../data/caseStudies";
import { projects } from "../data/mockData";

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 flex items-center gap-3">
    <span className="w-1.5 h-7 rounded-full bg-gradient-to-b from-[#E8B4C8] to-[#FF6B9D]" />
    {children}
  </h2>
);

const CaseStudy = () => {
  const { slug } = useParams();
  const index = caseStudies.findIndex((c) => c.slug === slug);
  const study = caseStudies[index];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (study) document.title = `${study.title} case study | Cut Geubrina Rizky`;
    return () => {
      document.title = "Cut Geubrina Rizky | Mobile Developer (Flutter) & Front-end Developer (React)";
    };
  }, [study]);

  if (!study) return <Navigate to="/" replace />;

  const related = study.projectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);
  const cover = related[0]?.image;
  const links = related.flatMap((p) =>
    (p.links || []).map((l) => ({ ...l, label: study.appNames?.[p.id] ? `${l.label} · ${study.appNames[p.id]}` : l.label }))
  );
  const gallery = related.flatMap((p) => (p.screenshots || []).map((s) => ({ ...s, project: p.title })));
  const isPhone = related[0]?.category === "mobile";
  const next = caseStudies[(index + 1) % caseStudies.length];

  const meta = [
    { Icon: User, label: "Role", value: study.role },
    { Icon: Calendar, label: "Timeline", value: study.timeline },
    { Icon: Building2, label: "Client", value: study.client },
    { Icon: Smartphone, label: "Platform", value: study.platform },
  ];

  return (
    <main className="pt-28 pb-20 bg-gradient-to-b from-base via-surface to-base">
      <div className="container mx-auto px-6 max-w-5xl">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-ink/60 hover:text-[#E8B4C8] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> All projects
        </Link>

        {/* Title */}
        <p className="text-[#E8B4C8] font-semibold tracking-[0.2em] uppercase text-xs mb-3">Case study</p>
        <h1 className="text-4xl md:text-6xl font-bold text-ink tracking-tight mb-4">{study.title}</h1>
        <p className="text-xl md:text-2xl text-ink/70 max-w-3xl leading-relaxed mb-10">{study.tagline}</p>

        {/* Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {meta.map(({ Icon, label, value }) => (
            <div key={label} className="rounded-xl border border-surface2 bg-surface p-4">
              <div className="flex items-center gap-2 text-ink/50 text-xs uppercase tracking-wider mb-2">
                <Icon className="w-3.5 h-3.5" /> {label}
              </div>
              <div className="text-ink font-semibold text-sm">{value}</div>
            </div>
          ))}
        </div>

        {/* Cover */}
        {cover && (
          <div className="rounded-2xl overflow-hidden border border-surface2 shadow-2xl shadow-[#FF6B9D]/10 mb-8">
            <img src={cover} alt={`${study.title} cover`} className="w-full block" />
          </div>
        )}

        {links.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-16">
            {links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#E8B4C8]/40 text-[#E8B4C8] text-sm font-semibold hover:bg-[#E8B4C8]/10 transition-colors"
              >
                {l.label} <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        )}

        {/* Context */}
        <section className="mb-16" data-reveal>
          <SectionTitle>The context</SectionTitle>
          <div className="space-y-4 text-lg text-ink/75 leading-relaxed max-w-3xl">
            {study.context.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* What I built */}
        <section className="mb-16" data-reveal>
          <SectionTitle>What I built</SectionTitle>
          <div className="grid md:grid-cols-3 gap-4">
            {study.work.map((w) => (
              <div key={w.heading} className="rounded-2xl border border-surface2 bg-surface p-6">
                <h3 className="text-ink font-bold mb-2">{w.heading}</h3>
                <p className="text-ink/65 text-sm leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section className="mb-16" data-reveal>
          <SectionTitle>How I approached it</SectionTitle>
          <ul className="space-y-3 max-w-3xl">
            {study.approach.map((a) => (
              <li key={a} className="flex items-start gap-3 text-ink/75">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#FF6B9D] flex-shrink-0" />
                <span className="leading-relaxed">{a}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Outcomes */}
        <section className="mb-16" data-reveal>
          <SectionTitle>Outcome</SectionTitle>
          <div className="grid sm:grid-cols-3 gap-4">
            {study.outcomes.map((o) => (
              <div key={o.label} className="rounded-2xl border border-surface2 bg-surface p-6 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] bg-clip-text text-transparent mb-2">
                  {o.value}
                </div>
                <div className="text-ink/60 text-sm">{o.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        {gallery.length > 0 ? (
          <section className="mb-16" data-reveal>
            <SectionTitle>Screens</SectionTitle>
            <div className={`grid gap-4 ${isPhone ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4" : "md:grid-cols-2"}`}>
              {gallery.map((s) => (
                <figure key={s.url} className="rounded-xl overflow-hidden border border-surface2 bg-surface">
                  <img decoding="async" src={s.url} alt={s.title} className="w-full block" />
                  <figcaption className="px-3 py-2 text-xs text-ink/60">{s.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : (
          study.confidential && (
            <div className="mb-16 flex items-start gap-3 rounded-2xl border border-surface2 bg-surface p-6 text-ink/70">
              <Lock className="w-5 h-5 text-[#E8B4C8] flex-shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">{study.confidential}</p>
            </div>
          )
        )}

        {/* Stack */}
        <section className="mb-16" data-reveal>
          <SectionTitle>Stack</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {study.stack.map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-full text-sm bg-surface2 text-[#E8B4C8] border border-[#E8B4C8]/20">
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Next */}
        <Link
          to={`/case-study/${next.slug}`}
          className="group flex items-center justify-between rounded-2xl border border-surface2 bg-surface p-6 hover:border-[#E8B4C8]/60 transition-colors"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/50 mb-1">Next case study</p>
            <p className="text-xl font-bold text-ink">{next.title}</p>
            <p className="text-ink/60 text-sm">{next.tagline}</p>
          </div>
          <ArrowRight className="w-6 h-6 text-[#E8B4C8] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </main>
  );
};

export default CaseStudy;
