import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the scope. A landing page typically takes 5–10 business days. A full website or product design project usually takes 6–10 weeks from kickoff to launch. We'll give you a precise timeline after our discovery call. We always set realistic deadlines — and we stick to them.",
  },
  {
    question: "What's included in a web design and development project?",
    answer:
      "Every project includes a discovery workshop, UX wireframes, high-fidelity UI design, frontend development, mobile responsiveness, basic SEO setup, Google Analytics integration, and post-launch support. Higher-tier packages include brand identity, CMS integration, advanced SEO, and ongoing support. We'll scope exactly what you need before starting.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Absolutely. We work with clients from across Europe, the US, and beyond. Our team is fluent in English and operates in the CET time zone, making collaboration smooth for most regions. All communication, deliverables, and contracts are available in English.",
  },
  {
    question: "Do you provide digital marketing and growth services?",
    answer:
      "Yes. In addition to design and development, we offer SEO optimization, content strategy, social media management, and digital marketing services. These are available as part of our Scale retainer plan, or can be scoped as standalone projects. We measure everything — you'll always know the ROI of what we're doing.",
  },
  {
    question: "Can I book a call to discuss my project before committing?",
    answer:
      "Yes, and we highly encourage it. We offer a free 30-minute discovery call where we'll learn about your goals, challenges, and budget — and you can evaluate whether we're the right fit. There's no obligation. You can book directly via our Calendly link in the contact section below.",
  },
  {
    question: "How do you handle revisions and feedback?",
    answer:
      "Revisions are built into our process. We work in collaborative feedback loops — you'll review wireframes before UI, and staging previews before launch. Our Starter plan includes 2 formal revision rounds; Growth and Scale offer unlimited revisions within scope. We use Figma for design reviews and Loom for async video walkthroughs.",
  },
  {
    question: "What's your payment structure?",
    answer:
      "We typically work on a 50% deposit upfront and 50% on delivery for one-time projects. For retainers (Scale plan), we invoice monthly in advance. We accept bank transfers and major payment methods. All pricing is transparent — no surprises.",
  },
  {
    question: "Do you offer SEO as a standalone service?",
    answer:
      "Yes. We offer technical SEO audits, on-page optimisation, content strategy, and link-building as standalone services. If you already have a website and just want to improve organic visibility, we can scope an SEO project that fits your budget and goals. Book a call to get a free preliminary audit.",
  },
  {
    question: "What makes iluba different from a traditional agency?",
    answer:
      "At iluba, you always work directly with the founders — never account managers or junior designers. This means faster decisions, higher quality, and a genuine partnership. We're small by design: selective about the clients we take on so we can do exceptional work for every one of them.",
  },
];

export function FAQ() {
  const { ref, visible } = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            FAQ
          </div>
          <h2
            className="text-[#0D0D0D]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.025em" }}
          >
            Everything you need to know.
          </h2>
          <p className="text-[#666] mt-4" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            Have a question not listed here? Book a call and we'll answer it directly.
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
