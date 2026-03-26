import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { Plus, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";

type FaqItem = { question: string; answer: string };

export function FAQ() {
  const { ref, visible } = useReveal();
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = t("faq.items", { returnObjects: true }) as FaqItem[];

  return (
    <section id="faq" ref={ref} className="py-28 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div
          className="mb-14 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(255,92,53,0.08)", color: "#FF5C35" }}
          >
            {t("faq.badge")}
          </div>
          <h2
            className="text-[#0D0D0D]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.025em" }}
          >
            {t("faq.heading")}
          </h2>
          <p className="text-[#666] mt-4" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            {t("faq.subheading")}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[#EBEBEB] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#E0E0E0]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s, border-color 0.2s ease`,
              }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left transition-colors duration-200 hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span
                  className="text-[#0D0D0D] font-semibold text-sm pr-4"
                  style={{ lineHeight: 1.5 }}
                >
                  {faq.question}
                </span>
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
                  style={{
                    background: openIndex === i ? "rgba(255,92,53,0.1)" : "#F5F5F5",
                    color: openIndex === i ? "#FF5C35" : "#888",
                  }}
                >
                  {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: openIndex === i ? "400px" : "0px" }}
              >
                <p className="px-6 pb-6 text-[#666] text-sm leading-relaxed" style={{ lineHeight: 1.8 }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
