import { useReveal } from "../hooks/useReveal";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const testimonialMeta = [
  { name: "James Whitfield", role: "CEO", company: "Velo Finance", avatar: "JW", color: "#5B5BD6" },
  { name: "Sara Jensen", role: "Head of Product", company: "Trove Platform", avatar: "SJ", color: "#22C55E" },
  { name: "Marko Horvat", role: "Founder", company: "Pulse App", avatar: "MH", color: "#F59E0B" },
  { name: "Amina Boussaid", role: "Co-founder & CMO", company: "Nomi Brand", avatar: "AB", color: "#FF5C35" },
  { name: "Tom Erikson", role: "CPO", company: "Buildwise SaaS", avatar: "TE", color: "#0EA5E9" },
  { name: "Priya Sharma", role: "Growth Lead", company: "Renova Group", avatar: "PS", color: "#8B5CF6" },
];

type TestimonialTranslation = { quote: string; result: string };

export function Testimonials() {
  const { ref, visible } = useReveal();
  const { t } = useTranslation();

  const translatedItems = t("testimonials.items", { returnObjects: true }) as TestimonialTranslation[];
  const testimonials = translatedItems.map((item, i) => ({ ...item, ...testimonialMeta[i] }));

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 md:py-28 px-6"
      style={{ background: "#FAFAF8" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-16 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(255,92,53,0.08)", color: "#FF5C35" }}
          >
            {t("testimonials.badge")}
          </div>
          <h2
            className="text-[#0D0D0D] max-w-xl"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.025em" }}
          >
            {t("testimonials.heading")}
          </h2>
          <p className="text-[#666] mt-4 max-w-lg" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            {t("testimonials.subheading")}
          </p>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden -mx-6 px-6 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4" style={{ width: "max-content" }}>
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 border border-[#EBEBEB] hover:shadow-lg transition-all duration-300"
                style={{
                  width: "85vw",
                  maxWidth: "360px",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s, box-shadow 0.3s ease`,
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} fill="#FF5C35" color="#FF5C35" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#333] text-sm leading-relaxed mb-5" style={{ lineHeight: 1.75 }}>
                  "{t.quote}"
                </p>

                {/* Result badge */}
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-5"
                  style={{ background: `${t.color}12`, color: t.color }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: t.color }} />
                  {t.result}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-[#0D0D0D] text-sm font-semibold">{t.name}</div>
                    <div className="text-[#888] text-xs">{t.role} — {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: masonry grid */}
        <div className="hidden md:block columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="break-inside-avoid bg-white rounded-2xl p-7 border border-[#EBEBEB] hover:shadow-lg transition-all duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s, box-shadow 0.3s ease`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={13} fill="#FF5C35" color="#FF5C35" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#333] text-sm leading-relaxed mb-5" style={{ lineHeight: 1.75 }}>
                "{t.quote}"
              </p>

              {/* Result badge */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-5"
                style={{ background: `${t.color}12`, color: t.color }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: t.color }} />
                {t.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-[#0D0D0D] text-sm font-semibold">{t.name}</div>
                  <div className="text-[#888] text-xs">{t.role} — {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
