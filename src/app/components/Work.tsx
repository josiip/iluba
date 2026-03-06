import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { ArrowUpRight, X, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Velo Finance",
    category: "Product Design · Web Development",
    tags: ["Fintech", "SaaS", "Dashboard"],
    description:
      "Complete product redesign for a B2B fintech platform serving 10,000+ SMEs. We rebuilt their onboarding flow, analytics dashboard, and design system from scratch.",
    result: "+62% user activation rate",
    image: "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHAlMjBkYXNoYm9hcmQlMjBVSSUyMGRlc2lnbnxlbnwxfHx8fDE3NzI1NDM1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#5B5BD6",
    bg: "rgba(91,91,214,0.06)",
    year: "2024",
    longDesc:
      "Velo Finance approached us with a clunky legacy interface that was frustrating their users and hurting activation. Over 12 weeks, we audited the existing product, ran user interviews, redesigned the entire information architecture, and built a new React dashboard with real-time data visualizations. The result: a 62% increase in user activation and a 40% reduction in support tickets.",
    deliverables: ["UX Research & Audit", "Design System", "Dashboard UI", "React Development", "QA & Launch"],
  },
  {
    id: 2,
    title: "Nomi Brand",
    category: "Brand Identity · Landing Page",
    tags: ["DTC", "Branding", "E-commerce"],
    description:
      "Full brand identity and high-converting landing page for a D2C food startup launching in 4 European markets simultaneously.",
    result: "+35% conversion vs. industry avg.",
    image: "https://images.unsplash.com/photo-1590102426275-8d1c367070d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwYnJhbmQlMjBpZGVudGl0eSUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NzI2MzIxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#FF5C35",
    bg: "rgba(255,92,53,0.06)",
    year: "2024",
    longDesc:
      "Nomi needed a visual identity and digital presence that could compete with established FMCG brands. We developed a bold, playful brand system with a custom wordmark, color palette, and photography art direction. The landing page we built achieved 35% above the industry average conversion rate in its first 30 days live.",
    deliverables: ["Logo & Wordmark", "Brand Guidelines", "Packaging Direction", "Landing Page", "Social Kit"],
  },
  {
    id: 3,
    title: "Trove Platform",
    category: "Web Development · SEO",
    tags: ["Marketplace", "SEO", "Growth"],
    description:
      "Performance-first marketplace platform rebuild and SEO strategy that tripled organic traffic in under six months.",
    result: "3× organic traffic growth",
    image: "https://images.unsplash.com/photo-1579642984094-5be053d579b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwcm9kdWN0JTIwbGFuZGluZyUyMHBhZ2UlMjBkZXNpZ258ZW58MXx8fHwxNzcyNjMyMTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.06)",
    year: "2025",
    longDesc:
      "Trove's marketplace had significant technical SEO debt — slow page loads, crawl issues, and poor content structure. We migrated them to a Next.js architecture, implemented structured data, optimised Core Web Vitals, and executed a 6-month content strategy. Within 5 months, organic sessions had tripled and paid acquisition costs dropped by 28%.",
    deliverables: ["Technical SEO Audit", "Next.js Migration", "Core Web Vitals", "Content Strategy", "Link Building"],
  },
  {
    id: 4,
    title: "Pulse App",
    category: "UI/UX Design · Product Design",
    tags: ["Mobile", "Health", "Product"],
    description:
      "End-to-end UX design for a health-tracking mobile app, from zero to 50,000 downloads in the first quarter.",
    result: "50K downloads · Q1 launch",
    image: "https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVWCUyMGRlc2lnbiUyMHNjcmVlbnxlbnwxfHx8fDE3NzI2MzIxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.06)",
    year: "2025",
    longDesc:
      "Pulse hired us as their lead design partner to take the app from concept to launch-ready. We ran discovery workshops, mapped all user flows, designed and prototyped the complete app in Figma, and worked closely with their engineering team during handoff. The app hit 50,000 downloads in its first 3 months and maintained a 4.7★ App Store rating.",
    deliverables: ["Discovery & Research", "User Flows", "Wireframes", "UI Design", "Prototype & Handoff"],
  },
];

export function Work() {
  const { ref, visible } = useReveal();
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section
      id="work"
      ref={ref}
      className="py-20 md:py-28 px-6"
      style={{ background: "#FAFAF8" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-16 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(255,92,53,0.08)", color: "#FF5C35" }}>
            Selected Work
          </div>
          <h2
            className="text-[#0D0D0D] max-w-xl"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.025em" }}
          >
            Work we're proud to ship.
          </h2>
          <p className="text-[#666] mt-4 max-w-lg" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            Real projects, real results. Every case study is a story of close collaboration and measurable outcomes.
          </p>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden -mx-6 px-6 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4" style={{ width: "max-content" }}>
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl border border-[#EBEBEB] bg-white cursor-pointer hover:shadow-2xl transition-all duration-400"
                onClick={() => setSelected(project)}
                style={{
                  width: "85vw",
                  maxWidth: "380px",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, box-shadow 0.3s ease`,
                }}
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5) 100%)`,
                    }}
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-lg">
                      <ArrowUpRight size={16} color="#0D0D0D" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white/80 text-xs font-medium">{project.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{ background: project.bg, color: project.color }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3
                    className="text-[#0D0D0D] mb-1"
                    style={{ fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.02em" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[#777] text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ background: project.bg, color: project.color }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.color }} />
                    {project.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-[#EBEBEB] bg-white cursor-pointer hover:shadow-2xl transition-all duration-400"
              onClick={() => setSelected(project)}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, box-shadow 0.3s ease`,
              }}
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5) 100%)`,
                  }}
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <ArrowUpRight size={16} color="#0D0D0D" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/80 text-xs font-medium">{project.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{ background: project.bg, color: project.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3
                  className="text-[#0D0D0D] mb-1"
                  style={{ fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.02em" }}
                >
                  {project.title}
                </h3>
                <p className="text-[#777] text-sm mb-4 leading-relaxed">{project.description}</p>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: project.bg, color: project.color }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.color }} />
                  {project.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
        >
          <div
            className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "modalIn 0.3s ease" }}
          >
            <div className="relative h-56 overflow-hidden rounded-t-3xl">
              <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.6) 100%)" }} />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
              >
                <X size={16} />
              </button>
              <div className="absolute bottom-4 left-6">
                <span className="text-white/70 text-xs">{selected.year} · {selected.category}</span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{ background: selected.bg, color: selected.color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-[#0D0D0D] mb-1" style={{ fontSize: "1.8rem", fontWeight: 800, letterSpacing: "-0.025em" }}>
                {selected.title}
              </h2>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ background: selected.bg, color: selected.color }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: selected.color }} />
                {selected.result}
              </div>
              <p className="text-[#555] leading-relaxed mb-6" style={{ lineHeight: 1.8 }}>{selected.longDesc}</p>
              <div>
                <h4 className="text-[#0D0D0D] font-semibold mb-3 text-sm tracking-wide uppercase" style={{ letterSpacing: "0.05em" }}>Deliverables</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.deliverables.map((d) => (
                    <span key={d} className="px-3 py-1.5 bg-[#F5F5F5] text-[#444] text-sm rounded-full font-medium">{d}</span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="mt-8 w-full py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #FF5C35 0%, #FF8A65 100%)" }}
              >
                Start a similar project <ExternalLink size={15} />
              </button>
            </div>
          </div>
          <style>{`
            @keyframes modalIn {
              from { opacity: 0; transform: scale(0.95) translateY(20px); }
              to { opacity: 1; transform: scale(1) translateY(0); }
            }
          `}</style>
        </div>
      )}
    </section>
  );
}
