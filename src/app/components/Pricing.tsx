import { useReveal } from "../hooks/useReveal";
import { Check, Zap, Building2, Sparkles } from "lucide-react";

const plans = [
  {
    icon: Zap,
    name: "Starter",
    price: "€2,900",
    period: "one-time",
    tagline: "For early-stage startups and solo founders.",
    color: "#FF5C35",
    bg: "rgba(255,92,53,0.06)",
    popular: false,
    features: [
      "Landing page design & development",
      "Mobile-responsive layout",
      "Basic SEO setup",
      "Google Analytics integration",
      "2 rounds of revisions",
      "5-day delivery",
      "14-day post-launch support",
    ],
    cta: "Get started",
  },
  {
    icon: Sparkles,
    name: "Growth",
    price: "€6,900",
    period: "one-time",
    tagline: "For scaling businesses ready to invest in quality.",
    color: "#0D0D0D",
    bg: "#0D0D0D",
    popular: true,
    features: [
      "Everything in Starter",
      "Full website (up to 8 pages)",
      "Custom UI/UX design",
      "Brand identity system",
      "Technical SEO & performance audit",
      "CMS integration",
      "3 months of support",
      "Unlimited revisions",
    ],
    cta: "Start a project",
  },
  {
    icon: Building2,
    name: "Scale",
    price: "Custom",
    period: "monthly retainer",
    tagline: "For ambitious teams needing an ongoing studio partner.",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.06)",
    popular: false,
    features: [
      "Everything in Growth",
      "Product design & development",
      "Ongoing digital growth",
      "SEO & content strategy",
      "Social media management",
      "Monthly reporting & analytics",
      "Dedicated team, Slack access",
      "Priority turnaround",
    ],
    cta: "Let's talk",
  },
];

export function Pricing() {
  const { ref, visible } = useReveal();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" ref={ref} className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-16 text-center transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(255,92,53,0.08)", color: "#FF5C35" }}
          >
            Pricing
          </div>
          <h2
            className="text-[#0D0D0D]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.025em" }}
          >
            Simple, transparent pricing.
          </h2>
          <p className="text-[#666] mt-4 max-w-lg mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            No hidden fees, no surprises. Invest confidently in your digital growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const isDark = plan.popular;

            return (
              <div
                key={plan.name}
                className="relative rounded-2xl p-8 flex flex-col border transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                style={{
                  background: isDark ? "#0D0D0D" : "white",
                  borderColor: isDark ? "#0D0D0D" : "#EBEBEB",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s, box-shadow 0.3s ease, scale 0.3s ease`,
                }}
              >
                {plan.popular && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #FF5C35 0%, #FF8A65 100%)" }}
                  >
                    Most Popular
                  </div>
                )}

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: isDark ? "rgba(255,255,255,0.1)" : plan.bg }}
                >
                  <Icon size={18} color={isDark ? "white" : plan.color} strokeWidth={2} />
                </div>

                <div className={isDark ? "text-white/60" : "text-[#888]"} style={{ fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>
                  {plan.name}
                </div>
                <div
                  className={`mb-1 ${isDark ? "text-white" : "text-[#0D0D0D]"}`}
                  style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.03em" }}
                >
                  {plan.price}
                </div>
                <div className={`text-xs mb-4 ${isDark ? "text-white/40" : "text-[#AAA]"}`}>{plan.period}</div>
                <p className={`text-sm mb-6 leading-relaxed ${isDark ? "text-white/60" : "text-[#666]"}`}>
                  {plan.tagline}
                </p>

                <div className="flex-1 space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: isDark ? "rgba(255,255,255,0.1)" : "rgba(34,197,94,0.1)" }}
                      >
                        <Check size={11} color={isDark ? "white" : "#22C55E"} strokeWidth={3} />
                      </div>
                      <span className={`text-sm ${isDark ? "text-white/75" : "text-[#444]"}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                  style={{
                    background: isDark
                      ? "linear-gradient(135deg, #FF5C35 0%, #FF8A65 100%)"
                      : plan.popular
                      ? "#0D0D0D"
                      : "#0D0D0D",
                    color: "white",
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        <div
          className="mt-12 text-center text-sm text-[#888]"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.5s" }}
        >
          All prices exclude VAT. Custom project scoping available upon request. 
          <button onClick={() => scrollTo("#contact")} className="text-[#FF5C35] font-medium hover:underline ml-1">
            Book a free discovery call →
          </button>
        </div>
      </div>
    </section>
  );
}
