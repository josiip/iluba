import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { Check, Zap, Building2, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const planIcons = [Zap, Sparkles, Building2];
const planColors = ["#FF5C35", "#0D0D0D", "#8B5CF6"];
const planBgs = ["rgba(255,92,53,0.06)", "#0D0D0D", "rgba(139,92,246,0.06)"];
const planPopular = [false, true, false];
// COMMENTED OUT: Pricing moved to "Contact for quote" model
// const planPrices = ["$1400", "$2700", "Custom"];
const planPrices = ["Contact for quote", "Contact for quote", "Contact for quote"];

type PlanTranslation = {
  name: string;
  period: string;
  tagline: string;
  features: string[];
  cta: string;
};

export function Pricing() {
  const { ref, visible } = useReveal();
  const { t } = useTranslation();
  const [selectedPlan, setSelectedPlan] = useState<number>(1);

  const plansData = t("pricing.plans", { returnObjects: true }) as PlanTranslation[];
  const plans = plansData.map((plan, i) => ({
    ...plan,
    price: planPrices[i],
    icon: planIcons[i],
    color: planColors[i],
    bg: planBgs[i],
    popular: planPopular[i],
  }));

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" ref={ref} className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-16 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(255,92,53,0.08)", color: "#FF5C35" }}
          >
            {t("pricing.badge")}
          </div>

          <h2
            className="text-[#0D0D0D] max-w-xl"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
            }}
          >
            {t("pricing.heading")}
          </h2>

          <p
            className="text-[#666] mt-4 max-w-lg"
            style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            {t("pricing.subheading")}
          </p>
        </div>

        {/* Mobile: Tabbed pricing */}
        <div className="md:hidden">
          {/* Tabs */}
          <div className="flex gap-2 mb-6 p-1.5 bg-[#F5F5F5] rounded-xl">
            {plans.map((plan, i) => (
              <button
                key={plan.name}
                onClick={() => setSelectedPlan(i)}
                className="flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-200 relative"
                style={{
                  background: selectedPlan === i ? "white" : "transparent",
                  color: selectedPlan === i ? "#0D0D0D" : "#888",
                  boxShadow: selectedPlan === i ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
                }}
              >
                {plan.name}
                {plan.popular && selectedPlan === i && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[9px] font-bold text-white whitespace-nowrap"
                    style={{ background: "linear-gradient(135deg, #FF5C35 0%, #FF8A65 100%)" }}>
                    {t("pricing.popular")}
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Selected plan card */}
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const isDark = plan.popular;

            return (
              <div
                key={plan.name}
                className="relative rounded-2xl p-8 border transition-all duration-300"
                style={{
                  display: selectedPlan === i ? "flex" : "none",
                  flexDirection: "column",
                  background: isDark ? "#0D0D0D" : "white",
                  borderColor: isDark ? "#0D0D0D" : "#EBEBEB",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.6s ease, transform 0.6s ease`,
                }}
              >
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
                {/* COMMENTED OUT: Period label hidden in "Contact for quote" model */}
                {/* <div className={`text-xs mb-4 ${isDark ? "text-white/40" : "text-[#AAA]"}`}>{plan.period}</div> */}
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
                      : "#0D0D0D",
                    color: "white",
                  }}
                >
                  {t("pricing.ctaButton")}
                </button>
              </div>
            );
          })}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
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
                    {t("pricing.mostPopular")}
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
                {/* COMMENTED OUT: Period label hidden in "Contact for quote" model */}
                {/* <div className={`text-xs mb-4 ${isDark ? "text-white/40" : "text-[#AAA]"}`}>{plan.period}</div> */}
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
                      : "#0D0D0D",
                    color: "white",
                  }}
                >
                  {t("pricing.ctaButton")}
                </button>
              </div>
            );
          })}
        </div>

        {/* COMMENTED OUT: Standalone services CTA removed */}
        {/* <div
          className="mt-16 text-center rounded-2xl border border-[#FFE8E0] p-12 relative overflow-hidden"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
            background: "linear-gradient(135deg, #FFF9F7 0%, #FFFBF9 50%, #FFF5F0 100%)",
            boxShadow: "0 4px 24px rgba(255, 92, 53, 0.08)"
          }}
        >
          <div
            className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-30 blur-3xl"
            style={{ background: "#FF5C35" }}
          />
          <div
            className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-20 blur-2xl"
            style={{ background: "#FF5C35" }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5" style={{ background: "rgba(255, 92, 53, 0.1)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#FF5C35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#FF5C35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#FF5C35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-[#0D0D0D] mb-7" style={{ fontSize: "1.15rem", lineHeight: 1.7 }}>
              {t("pricing.standaloneText")}<br />
              <span style={{ fontWeight: 600 }}>{t("pricing.standaloneHighlight")}</span>
            </p>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: "#FF5C35",
                color: "white",
                boxShadow: "0 4px 16px rgba(255, 92, 53, 0.3)"
              }}
            >
              {t("pricing.getCustomQuote")}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
