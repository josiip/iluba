import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { Clock, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

// COMMENTED OUT: Calendly embed removed - replaced with contact form
// import { useEffect } from "react";
// function CalendlyEmbed() {
//   useEffect(() => {
//     if (typeof window !== "undefined" && (window as any).Calendly) {
//       (window as any).Calendly.initInlineWidget({
//         url: "https://calendly.com/j-ljubic96/30min?hide_gdpr_banner=1&primary_color=FF5C35&hide_event_type_details=1&hide_landing_page_details=1",
//         parentElement: document.querySelector(".calendly-inline-widget"),
//       });
//     }
//   }, []);
//
//   return (
//     <div
//       className="calendly-inline-widget"
//       data-url="https://calendly.com/j-ljubic96/30min?hide_gdpr_banner=1&primary_color=FF5C35&hide_event_type_details=1&hide_landing_page_details=1"
//       style={{ minWidth: "320px", height: "530px" }}
//     />
//   );
// }

function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Project Inquiry: ${formData.projectType}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`;

    window.location.href = `mailto:j.ljubic96@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setFormData({ name: "", email: "", projectType: "", message: "" });
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const projectTypes = [
    { value: "", label: t("contact.form.selectType") },
    { value: "web-design", label: t("contact.form.webDesign") },
    { value: "development", label: t("contact.form.development") },
    { value: "branding", label: t("contact.form.branding") },
    { value: "seo", label: t("contact.form.seoGrowth") },
    { value: "other", label: t("contact.form.other") },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder={t("contact.form.namePlaceholder")}
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border border-[#EBEBEB] bg-white text-[#0D0D0D] placeholder-[#AAA] focus:outline-none focus:border-[#FF5C35] focus:ring-2 focus:ring-[#FF5C35]/20 transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder={t("contact.form.emailPlaceholder")}
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border border-[#EBEBEB] bg-white text-[#0D0D0D] placeholder-[#AAA] focus:outline-none focus:border-[#FF5C35] focus:ring-2 focus:ring-[#FF5C35]/20 transition-all"
        />
      </div>
      <select
        name="projectType"
        value={formData.projectType}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-xl border border-[#EBEBEB] bg-white text-[#0D0D0D] focus:outline-none focus:border-[#FF5C35] focus:ring-2 focus:ring-[#FF5C35]/20 transition-all"
      >
        {projectTypes.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>
      <textarea
        name="message"
        placeholder={t("contact.form.messagePlaceholder")}
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        className="w-full px-4 py-3 rounded-xl border border-[#EBEBEB] bg-white text-[#0D0D0D] placeholder-[#AAA] focus:outline-none focus:border-[#FF5C35] focus:ring-2 focus:ring-[#FF5C35]/20 transition-all resize-none"
      />
      <button
        type="submit"
        disabled={submitted}
        className="w-full py-3.5 rounded-xl text-white font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
        style={{
          background: submitted
            ? "linear-gradient(135deg, #22C55E 0%, #10B981 100%)"
            : "linear-gradient(135deg, #FF5C35 0%, #FF8A65 100%)",
        }}
      >
        {submitted ? t("contact.form.messageSent") : t("contact.form.sendButton")}
      </button>
    </form>
  );
}

// COMMENTED OUT: Calendar icon removed as Calendly embed replaced with form
// const contactIcons = [Calendar, Clock, Mail, MessageCircle];
const contactIcons = [Clock, Mail, MessageCircle];
const contactColors = ["#ff5d35", "#0EA5E9", "#8B5CF6", "#22C55E"];
const contactBgs = [
  "rgba(255,92,53,0.08)",
  "rgba(14,165,233,0.08)",
  "rgba(139,92,246,0.08)",
  "rgba(34,197,94,0.08)",
];

type ContactInfo = { title: string; desc: string };

export function Contact() {
  const { ref, visible } = useReveal();
  const { t } = useTranslation();

  const infoItems = (t("contact.info", { returnObjects: true }) as ContactInfo[]).map((item, i) => ({
    ...item,
    icon: contactIcons[i],
    color: contactColors[i],
    bg: contactBgs[i],
  }));

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
            {t("contact.badge")}
          </div>
          <h2
            className="text-[#0D0D0D] max-w-xl mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.025em" }}
          >
            {t("contact.heading")}
          </h2>
          <p className="text-[#666] max-w-lg mb-14" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            {t("contact.subheading")}
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
          <div className="lg:col-span-2 space-y-4">
            {infoItems.map((item) => {
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

          {/* Right: Contact Form */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden bg-white shadow-sm p-8">
            <h3 className="text-[#0D0D0D] text-lg font-semibold mb-6">{t("contact.formHeading")}</h3>
            <ContactForm />

            {/* COMMENTED OUT: Calendly embed removed
            <CalendlyEmbed />

            <noscript>
              <div className="p-10 text-center">
                <p className="text-[#666] mb-6">{t("contact.noscriptText")}</p>
                <a
                  href="https://calendly.com/j-ljubic96/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold"
                  style={{ background: "linear-gradient(135deg, #FF5C35 0%, #FF8A65 100%)" }}
                >
                  {t("contact.bookOnCalendly")} <ArrowRight size={16} />
                </a>
              </div>
            </noscript>
            */}
          </div>
        </div>

        {/* COMMENTED OUT: CTA strip removed - focus on contact form above */}
        {/* <div
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
              {t("contact.ctaHeading")}
            </h3>
            <p className="text-white/60 mb-6 max-w-lg mx-auto" style={{ lineHeight: 1.7 }}>
              {t("contact.ctaSubheading")}
            </p>
            <a
              href="mailto:hello@iluba.co"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-xl"
              style={{ background: "linear-gradient(135deg, #FF5C35 0%, #FF8A65 100%)", boxShadow: "0 8px 24px rgba(255,92,53,0.35)" }}
            >
              {t("contact.sendEmail")} <ArrowRight size={16} />
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}
