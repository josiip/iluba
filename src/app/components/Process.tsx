import { useReveal } from "../hooks/useReveal";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    color: "#FF5C35",
    bg: "rgba(255,92,53,0.08)",
    description:
      "We start by understanding your business, users, and goals through deep-dive workshops and research. No assumptions — just data and insight.",
    duration: "Week 1",
    activities: ["Stakeholder interviews", "Competitive analysis", "User research", "Goal definition"],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Design",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    description:
      "We translate discovery insights into wireframes, prototypes, and high-fidelity designs — with your feedback and collaboration at every step.",
    duration: "Week 1-2",
    activities: ["Wireframing", "UI Design", "Prototype testing", "Iteration"],
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    color: "#0EA5E9",
    bg: "rgba(14,165,233,0.08)",
    description:
      "Our engineers bring the designs to life with clean, maintainable code. We keep you in the loop with weekly updates and staging previews.",
    duration: "Week 2-4",
    activities: ["Frontend development", "API integration", "Performance optimisation", "QA testing"],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.08)",
    description:
      "We handle deployment, set up analytics, and make sure everything is production-ready. Then we support you through and beyond launch.",
    duration: "Week 4-6",
    activities: ["Deployment", "Analytics setup", "SEO handoff", "Post-launch support"],
  },
];

export function Process() {
  const { ref, visible } = useReveal();

  return (
    <section id="process" ref={ref} className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-16 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(255,92,53,0.08)", color: "#FF5C35" }}
          >
            Our Process
          </div>
          <h2
            className="text-[#0D0D0D] max-w-xl"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.025em" }}
          >
            How we take your idea from zero to live.
          </h2>
          <p className="text-[#666] mt-4 max-w-lg" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            A transparent, collaborative process — so you always know what we're working on and why.
          </p>
        </div>

        {/* Desktop: horizontal steps */}
        <div className="hidden md:grid grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div
            className="absolute top-12 left-[2%] right-[22%] h-px"
            style={{
              background: "linear-gradient(to right, #FF5C35, #8B5CF6, #0EA5E9, #22C55E)",
              opacity: 0.3,
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
                }}
              >
                {/* Icon circle */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border-2 border-white shadow-md z-10"
                  style={{ background: step.bg, borderColor: "white" }}
                >
                  <Icon size={20} color={step.color} strokeWidth={2} />
                </div>

                <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: step.color }}>
                  {step.number}
                </div>
                <h3
                  className="text-[#0D0D0D] mb-2"
                  style={{ fontSize: "1.2rem", fontWeight: 700, letterSpacing: "-0.02em" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#777] text-sm leading-relaxed mb-4">{step.description}</p>
                <div className="text-xs text-[#999] font-medium mb-3">{step.duration}</div>
                <ul className="space-y-1.5">
                  {step.activities.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-xs text-[#666]">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: step.color }}
                      />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden -mx-6 px-6 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4" style={{ width: "max-content" }}>
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex flex-col p-6 rounded-2xl border border-[#F0F0F0] bg-white"
                  style={{
                    width: "85vw",
                    maxWidth: "340px",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(30px)",
                    transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: step.bg }}
                  >
                    <Icon size={18} color={step.color} strokeWidth={2} />
                  </div>
                  <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: step.color }}>
                    {step.number}
                  </div>
                  <h3 className="text-[#0D0D0D] mb-2" style={{ fontSize: "1.2rem", fontWeight: 700 }}>
                    {step.title}
                  </h3>
                  <p className="text-[#777] text-sm leading-relaxed mb-4">{step.description}</p>
                  <div className="text-xs text-[#999] font-medium mb-3">{step.duration}</div>
                  <ul className="space-y-1.5">
                    {step.activities.map((a) => (
                      <li key={a} className="flex items-center gap-2 text-xs text-[#666]">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: step.color }}
                        />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
