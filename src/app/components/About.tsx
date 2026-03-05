import { useReveal } from "../hooks/useReveal";
import { Heart, Globe2, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Care over output",
    desc: "We treat every project as if it's our own business on the line. Quality isn't optional — it's the baseline.",
    color: "#FF5C35",
    bg: "rgba(255,92,53,0.08)",
  },
  {
    icon: Globe2,
    title: "Global perspective",
    desc: "We've worked with clients across 12+ countries and understand how to design for diverse audiences.",
    color: "#0EA5E9",
    bg: "rgba(14,165,233,0.08)",
  },
  {
    icon: Award,
    title: "Craft at every level",
    desc: "From pixel-perfect UI to clean code architecture — we don't cut corners, ever.",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
  },
];

export function About() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="py-28 px-6"
      style={{ background: "#FAFAF8" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ background: "rgba(255,92,53,0.08)", color: "#FF5C35" }}
            >
              About Us
            </div>
            <h2
              className="text-[#0D0D0D] mb-6"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.025em" }}
            >
              A two-founder studio that punches above its weight.
            </h2>
            <p className="text-[#555] leading-relaxed mb-5" style={{ lineHeight: 1.8 }}>
              iluba is a boutique digital studio founded by{" "}
              <strong className="text-[#0D0D0D]">Ana & Stefan</strong> — a designer and a developer
              who got tired of watching great products fail because of bad digital experiences.
            </p>
            <p className="text-[#555] leading-relaxed mb-5" style={{ lineHeight: 1.8 }}>
              We started iluba to offer what the big agencies can't: focused attention, genuine craft,
              and a partnership model where you're always talking to the people doing the actual work.
              No account managers, no handoffs to junior teams.
            </p>
            <p className="text-[#555] leading-relaxed mb-8" style={{ lineHeight: 1.8 }}>
              Over the past four years, we've helped startups raise funding, SMEs triple their
              organic traffic, and founders launch products that their users actually love.
            </p>
            <div className="flex gap-8">
              {[
                { value: "4+", label: "Years in business" },
                { value: "40+", label: "Projects shipped" },
                { value: "12+", label: "Countries" },
              ].map((stat) => (
                <div key={stat.value}>
                  <div
                    className="text-[#0D0D0D]"
                    style={{ fontSize: "1.8rem", fontWeight: 800, letterSpacing: "-0.02em" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[#888] text-sm mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Founders + Values */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            {/* Founder cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                {
                  name: "Ana Kovač",
                  role: "Co-founder · Design Lead",
                  bg: "rgba(255,92,53,0.06)",
                  initials: "AK",
                  color: "#FF5C35",
                  skills: ["UI/UX", "Brand", "Product"],
                  image: "https://images.unsplash.com/photo-1767439567636-792a76f6e4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwcG9ydHJhaXQlMjBzdHVkaW98ZW58MXx8fHwxNzcyNjMyMTA1fDA&ixlib=rb-4.1.0&q=80&w=400",
                },
                {
                  name: "Stefan Ilić",
                  role: "Co-founder · Dev Lead",
                  bg: "rgba(13,13,13,0.04)",
                  initials: "SI",
                  color: "#0D0D0D",
                  skills: ["React", "Next.js", "SEO"],
                  image: "https://images.unsplash.com/photo-1762708550141-2688121b9ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMHBvcnRyYWl0JTIwY3JlYXRpdmV8ZW58MXx8fHwxNzcyNjMyMTA1fDA&ixlib=rb-4.1.0&q=80&w=400",
                },
              ].map((founder) => (
                <div
                  key={founder.name}
                  className="rounded-2xl overflow-hidden border border-[#EBEBEB] bg-white"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-4">
                    <div
                      className="text-[#0D0D0D] font-semibold text-sm mb-0.5"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {founder.name}
                    </div>
                    <div className="text-[#888] text-xs mb-3">{founder.role}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {founder.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded-full text-xs font-medium"
                          style={{ background: founder.bg, color: founder.color }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-3">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#F0F0F0]">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: v.bg }}
                    >
                      <Icon size={16} color={v.color} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-[#0D0D0D] text-sm font-semibold mb-0.5">{v.title}</div>
                      <div className="text-[#777] text-sm leading-relaxed">{v.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
