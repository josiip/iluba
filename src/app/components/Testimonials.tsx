import { useReveal } from "../hooks/useReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "iluba completely transformed how we present our product online. Our conversion rate jumped 35% within the first month after launch. They're the best investment we've made this year.",
    name: "Marko Petrić",
    role: "CEO",
    company: "Velo Finance",
    result: "+35% conversion rate",
    avatar: "MP",
    color: "#5B5BD6",
  },
  {
    quote:
      "Working with the iluba team was a breath of fresh air. They pushed back when our instincts were wrong, brought incredible attention to detail, and delivered on time. Rare.",
    name: "Sara Jensen",
    role: "Head of Product",
    company: "Trove Platform",
    result: "3× organic traffic",
    avatar: "SJ",
    color: "#22C55E",
  },
  {
    quote:
      "They took our vague idea and turned it into a beautiful, functional product. The process was smooth, communication was great, and the end result exceeded every expectation.",
    name: "Luka Novak",
    role: "Founder",
    company: "Pulse App",
    result: "50K downloads · Q1",
    avatar: "LN",
    color: "#F59E0B",
  },
  {
    quote:
      "Our new brand identity is exactly what we needed to compete with the big players. iluba understood our market immediately and delivered a brand we're genuinely proud of.",
    name: "Amina Boussaid",
    role: "Co-founder & CMO",
    company: "Nomi Brand",
    result: "Pan-European launch",
    avatar: "AB",
    color: "#FF5C35",
  },
  {
    quote:
      "From the first call I knew this team was different. They asked the right questions, understood our users better than we did, and delivered a redesign that our customers love.",
    name: "Tom Erikson",
    role: "CPO",
    company: "Buildwise SaaS",
    result: "+48% trial signups",
    avatar: "TE",
    color: "#0EA5E9",
  },
  {
    quote:
      "The SEO work iluba did has paid for itself many times over. Organic traffic is up, leads are qualified, and we're ranking for terms we never thought possible 6 months ago.",
    name: "Priya Sharma",
    role: "Growth Lead",
    company: "Renova Group",
    result: "+180% organic sessions",
    avatar: "PS",
    color: "#8B5CF6",
  },
];

export function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-28 px-6"
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
            Testimonials
          </div>
          <h2
            className="text-[#0D0D0D] max-w-xl"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.025em" }}
          >
            Trusted by founders and product teams.
          </h2>
          <p className="text-[#666] mt-4 max-w-lg" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            Don't take our word for it — hear from the people we've worked with.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
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
