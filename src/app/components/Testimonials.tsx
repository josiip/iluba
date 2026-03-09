import { useReveal } from "../hooks/useReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We'd been through two agencies before iluba. Both times we got something that looked fine but didn't convert. This time was completely different — they actually challenged our assumptions.",
    name: "James Whitfield",
    role: "CEO",
    company: "Velo Finance",
    result: "+35% conversion rate",
    avatar: "JW",
    color: "#5B5BD6",
  },
  {
    quote:
      "Honestly, I was skeptical. But they came into our first call having already researched our competitors. The redesign took six weeks and organic traffic has tripled since.",
    name: "Sara Jensen",
    role: "Head of Product",
    company: "Trove Platform",
    result: "3× organic traffic",
    avatar: "SJ",
    color: "#22C55E",
  },
  {
    quote:
      "What stood out was how little hand-holding was needed. I gave them a rough brief, they came back with questions I hadn't thought to ask, and the final product was better for it.",
    name: "Marko Horvat",
    role: "Founder",
    company: "Pulse App",
    result: "+62% trial activations",
    avatar: "MH",
    color: "#F59E0B",
  },
  {
    quote:
      "We were going into a new market and needed to look like we belonged there. iluba. built us a brand that we'd have been embarrassed not to have. It opened doors.",
    name: "Amina Boussaid",
    role: "Co-founder & CMO",
    company: "Nomi Brand",
    result: "Pan-European launch",
    avatar: "AB",
    color: "#FF5C35",
  },
  {
    quote:
      "The scope crept a bit on our end, not theirs. They handled it without drama, kept the timeline intact, and didn't nickel and dime us. That's rare in this industry.",
    name: "Tom Erikson",
    role: "CPO",
    company: "Buildwise SaaS",
    result: "+48% trial signups",
    avatar: "TE",
    color: "#0EA5E9",
  },
  {
    quote:
      "Six months ago we weren't ranking for anything meaningful. Now we're on the first page for a dozen terms that actually bring in leads. The SEO work alone paid back the project cost.",
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
