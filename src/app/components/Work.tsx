import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { ArrowUpRight, X, ExternalLink } from "lucide-react";

import veloImg from "../../images/favicon_io-2/velo.jpg";
import orbitImg from "../../images/favicon_io-2/orbit.jpg";
import maraImg from "../../images/favicon_io-2/mara.jpg";
import apartmaniImg from "../../images/favicon_io-2/apartmani.jpg";

const projects = [
  {
    id: 1,
    title: "Velo",
    category: "Web & Mobile Design",
    tags: ["Fintech", "SaaS", "Dashboard"],
    description:
      "Modern B2B SaaS fintech dashboard designed for financial management with a clean dark mode interface and real-time data visualization.",
    result: "Modern SaaS dashboard experience",
    image: veloImg,
    color: "#5B5BD6",
    bg: "rgba(91,91,214,0.06)",
    year: "2025",
    longDesc:
      "Velo is a modern fintech dashboard concept built for efficient financial management. The platform features structured sidebar navigation with sections for Dashboard, Analytics, Transactions, Accounts and Payments. It includes KPI metrics, revenue charts, account balances, expense breakdown, cash flow visualization and recent transactions. The design focuses on a professional dark interface, clear data hierarchy, interactive charts and responsive layouts optimized for real-time financial monitoring.",
    deliverables: [
      "Dashboard UI Design",
      "UX Structure",
      "Data Visualization",
      "Responsive Layout",
      "Design System"
    ],
  },
  {
    id: 2,
    title: "Orbit HR",
    category: "Web & Mobile Design",
    tags: ["SaaS", "HR", "Dashboard"],
    description:
      "Modern enterprise HR platform designed for small and mid-sized teams with a clean SaaS interface and structured purple visual system.",
    result: "Complete HR dashboard system",
    image: orbitImg,
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.06)",
    year: "2025",
    longDesc:
      "Orbit HR is a full-featured HR platform dashboard designed for team management. It includes onboarding flows, team dashboard, employee directory, leave management, performance reviews, analytics, document management and organizational structure. The UI follows a clean purple SaaS aesthetic with clear hierarchy, sticky headers, notification states and responsive layouts. Built as a modern product dashboard optimized for usability and everyday team operations.",
    deliverables: [
      "UX/UI Design",
      "Dashboard System",
      "Responsive Design",
      "Design System",
      "User Flows"
    ],
  },
  {
    id: 3,
    title: "Mara Studio",
    category: "Web & Mobile Design",
    tags: ["E-commerce", "Fashion", "Brand"],
    description:
      "Luxury boutique fashion e-commerce website with a minimalist, high-end aesthetic inspired by modern Shopify stores.",
    result: "High-end fashion web experience",
    image: maraImg,
    color: "#D6A77A",
    bg: "rgba(214,167,122,0.06)",
    year: "2025",
    longDesc:
      "Mara Studio is a luxury fashion e-commerce concept built with a minimalist editorial approach. It features serif typography, soft cream tones and clean layouts. The website includes homepage with hero and featured products, shop with filters, product pages with detailed options, lookbook, brand storytelling and newsletter integration. Fully responsive design optimized for desktop, tablet and mobile with a focus on elegant product presentation.",
    deliverables: [
      "E-commerce Design",
      "UI System",
      "Responsive Layout",
      "Product Pages",
      "Brand Experience"
    ],
  },
  {
    id: 4,
    title: "Apartmani Sunce",
    category: "Web & Mobile Design",
    tags: ["Hospitality", "Booking", "Landing Page"],
    description:
      "Single-page promotional website for a family-run apartment rental with a warm Mediterranean aesthetic.",
    result: "Conversion-focused rental website",
    image: apartmaniImg,
    color: "#C2410C",
    bg: "rgba(194,65,12,0.06)",
    year: "2025",
    longDesc:
      "Apartmani Sunce is a single-page website designed for a family-run rental on the Dalmatian coast. The design uses warm Mediterranean tones with a clean layout and storytelling approach. It includes a hero section, personal story, gallery, amenities overview, booking form and location map. The UX focuses on simplicity, trust and conversion, with smooth scroll animations and full responsiveness.",
    deliverables: [
      "Landing Page Design",
      "Responsive Design",
      "UX Writing",
      "Booking Flow",
      "Visual Identity"
    ],
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
            <div className="relative h-76 overflow-hidden rounded-t-3xl">
              <img src={selected.image} alt={selected.title} className="w-full h-full object-cover"    style={{ objectPosition: "center 16%" }}/>
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
                onClick={() => {
                  setSelected(null);
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-8 w-full py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #FF5C35 0%, #FF8A65 100%)" }}
              >
                Start a similar project 
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
