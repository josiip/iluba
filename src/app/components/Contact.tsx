import { useEffect } from "react";
import { useReveal } from "../hooks/useReveal";
import { Calendar, Clock, Mail, MessageCircle, ArrowRight } from "lucide-react";

function CalendlyEmbed() {
  useEffect(() => {
    // Initialize Calendly widget if script already loaded
    if (typeof window !== "undefined" && (window as any).Calendly) {
      (window as any).Calendly.initInlineWidget({
        url: "https://calendly.com/iluba-studio/discovery-call?hide_gdpr_banner=1&primary_color=FF5C35",
        parentElement: document.querySelector(".calendly-inline-widget"),
      });
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/iluba-studio/discovery-call?hide_gdpr_banner=1&primary_color=FF5C35&hide_landing_page_details=1"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}

export function Contact() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 px-6"
      style={{ background: "#FAFAF8" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(255,92,53,0.08)", color: "#FF5C35" }}
          >
            Contact
          </div>
          <h2
            className="text-[#0D0D0D] max-w-xl mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.025em" }}
          >
            Ready to build something great?
          </h2>
          <p className="text-[#666] max-w-lg mb-14" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            Book a free 30-minute discovery call. No obligation, just a genuine conversation about your project.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-6">
            {[
              {
                icon: Calendar,
                title: "Schedule a call",
                desc: "Pick a time that works for you via Calendly. We typically respond within 24 hours.",
                color: "#FF5C35",
                bg: "rgba(255,92,53,0.08)",
              },
              {
                icon: Clock,
                title: "Availability",
                desc: "Monday – Friday\n10:00 – 18:00 CET",
                color: "#0EA5E9",
                bg: "rgba(14,165,233,0.08)",
              },
              {
                icon: Mail,
                title: "Email us directly",
                desc: "hello@iluba.co",
                color: "#8B5CF6",
                bg: "rgba(139,92,246,0.08)",
              },
              {
                icon: MessageCircle,
                title: "Quick questions?",
                desc: "WhatsApp or Telegram available for quick async messages.",
                color: "#22C55E",
                bg: "rgba(34,197,94,0.08)",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-[#EBEBEB]">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: item.bg }}
                  >
                    <Icon size={18} color={item.color} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-[#0D0D0D] font-semibold text-sm mb-1">{item.title}</div>
                    <div className="text-[#777] text-sm" style={{ whiteSpace: "pre-line" }}>{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Calendly Embed */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-[#EBEBEB] bg-white shadow-sm">
            {/* Calendly inline embed */}
            <CalendlyEmbed />

            {/* Fallback CTA if Calendly doesn't load */}
            <noscript>
              <div className="p-10 text-center">
                <p className="text-[#666] mb-6">Book directly on Calendly:</p>
                <a
                  href="https://calendly.com/iluba-studio/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold"
                  style={{ background: "linear-gradient(135deg, #FF5C35 0%, #FF8A65 100%)" }}
                >
                  Book on Calendly <ArrowRight size={16} />
                </a>
              </div>
            </noscript>
          </div>
        </div>

        {/* CTA strip */}
        <div
          className="mt-16 rounded-2xl p-10 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 100%)",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.3s",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(255,92,53,0.15) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <h3
              className="text-white mb-3"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              Not sure where to start?
            </h3>
            <p className="text-white/60 mb-6 max-w-lg mx-auto" style={{ lineHeight: 1.7 }}>
              Send us a message with your idea, challenge, or goal — and we'll come back with a personalised recommendation within 24 hours.
            </p>
            <a
              href="mailto:hello@iluba.co"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-xl"
              style={{ background: "linear-gradient(135deg, #FF5C35 0%, #FF8A65 100%)", boxShadow: "0 8px 24px rgba(255,92,53,0.35)" }}
            >
              Send us an email <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}