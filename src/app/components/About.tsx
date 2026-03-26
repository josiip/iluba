import { useReveal } from "../hooks/useReveal";
import { Heart, Globe2, Award } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

const valueIcons = [Heart, Globe2, Award];
const valueColors = ["#FF5C35", "#0EA5E9", "#8B5CF6"];
const valueBgs = ["rgba(255,92,53,0.08)", "rgba(14,165,233,0.08)", "rgba(139,92,246,0.08)"];

const founderData = [
  {
    name: "Ivan Ljubić",
    bg: "rgba(13,13,13,0.04)",
    initials: "SI",
    color: "#0D0D0D",
    skills: ["React", "Next.js", "SEO", "Webflow"],
    image: "https://images.unsplash.com/photo-1762708550141-2688121b9ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMHBvcnRyYWl0JTIwY3JlYXRpdmV8ZW58MXx8fHwxNzcyNjMyMTA1fDA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Josip Ljubić",
    bg: "rgba(255,92,53,0.06)",
    initials: "AK",
    color: "#FF5C35",
    skills: ["UI/UX", "Brand", "Product"],
    image: "https://images.unsplash.com/photo-1767439567636-792a76f6e4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwcG9ydHJhaXQlMjBzdHVkaW98ZW58MXx8fHwxNzcyNjMyMTA1fDA&ixlib=rb-4.1.0&q=80&w=400",
  },
];

type ValueTranslation = { title: string; desc: string };
type StatTranslation = { value: string; label: string };
type FounderTranslation = { role: string };

export function About() {
  const { ref, visible } = useReveal();
  const { t } = useTranslation();

  const valuesData = t("about.values", { returnObjects: true }) as ValueTranslation[];
  const statsData = t("about.stats", { returnObjects: true }) as StatTranslation[];
  const foundersTranslation = t("about.founders", { returnObjects: true }) as FounderTranslation[];

  const values = valuesData.map((v, i) => ({
    ...v,
    icon: valueIcons[i],
    color: valueColors[i],
    bg: valueBgs[i],
  }));

  const founders = founderData.map((f, i) => ({
    ...f,
    role: foundersTranslation[i]?.role ?? f.name,
  }));

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
              {t("about.badge")}
            </div>
            <h2
              className="text-[#0D0D0D] mb-6"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.025em" }}
            >
              {t("about.heading")}
            </h2>
            <p className="text-[#555] leading-relaxed mb-5" style={{ lineHeight: 1.8 }}>
              <Trans
                i18nKey="about.p1"
                components={{ bold: <strong className="text-[#0D0D0D]" /> }}
              />
            </p>
            <p className="text-[#555] leading-relaxed mb-5" style={{ lineHeight: 1.8 }}>
              {t("about.p2")}
            </p>
            <p className="text-[#555] leading-relaxed mb-8" style={{ lineHeight: 1.8 }}>
              {t("about.p3")}
            </p>
            <div className="flex gap-8">
              {statsData.map((stat) => (
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
              {founders.map((founder) => (
                <div
                  key={founder.name}
                  className="rounded-2xl overflow-hidden border border-[#EBEBEB] bg-white"
                >
                  <div className="p-4">
                    <div
                      className="text-[#0D0D0D] font-semibold text-sm mb-2"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {founder.name}
                    </div>
                    <div className="text-[#888] text-xs mb-4">{founder.role}</div>
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
