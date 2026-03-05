import { useReveal } from "../hooks/useReveal";
import { Palette, Code2, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    category: "Design",
    color: "#FF5C35",
    bg: "rgba(255,92,53,0.07)",
    description:
      "We craft user experiences that feel inevitable — clean, intuitive, and built to convert.",
    items: [
      {
        title: "UI/UX Design",
        desc: "Full-stack interface design from wireframes to polished, production-ready screens.",
      },
      {
        title: "Product Design",
        desc: "End-to-end product thinking: research, prototyping, and iterative design systems.",
      },
      {
        title: "Brand Identity",
        desc: "Visual identity systems that position your brand as a category leader.",
      },
    ],
  },
  {
    icon: Code2,
    category: "Development",
    color: "#0D0D0D",
    bg: "rgba(13,13,13,0.05)",
    description:
      "Fast, robust code built to scale — from pixel-perfect landing pages to custom web apps.",
    items: [
      {
        title: "Web Development",
        desc: "Modern React & Next.js applications built for performance and maintainability.",
      },
      {
        title: "Landing Pages",
        desc: "High-converting landing pages that turn traffic into qualified leads.",
      },
      {
        title: "Custom Web Solutions",
        desc: "Bespoke platforms, dashboards, and tools tailored to your exact needs.",
      },
    ],
  },
  {
    icon: TrendingUp,
    category: "Digital Growth",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.07)",
    description:
      "Sustainable growth strategies that increase visibility, traffic, and revenue.",
    items: [
      {
        title: "SEO Optimization",
        desc: "Technical and content SEO to rank higher and attract qualified organic traffic.",
      },
      {
        title: "Digital Marketing",
        desc: "Data-driven paid campaigns and content strategies that move the needle.",
      },
      {
        title: "Social Media Management",
        desc: "Brand-consistent content and community management across all key channels.",
      },
    ],
  },
];

export function Services() {
  const { ref, visible } = useReveal();

  return (
    <section id="services" ref={ref} className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className="mb-16 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(255,92,53,0.08)", color: "#FF5C35" }}>
            Services
          </div>
          <h2
            className="text-[#0D0D0D] max-w-xl"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.025em" }}
          >
            Everything your business needs to grow online.
          </h2>
          <p className="text-[#666] mt-4 max-w-lg" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            We offer a full spectrum of digital services — from brand creation to shipping and scaling your product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.category}
                className="group rounded-2xl p-8 border border-[#F0F0F0] hover:border-[#E8E8E8] hover:shadow-xl transition-all duration-400 cursor-pointer"
                style={{
                  background: "white",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s, box-shadow 0.3s ease, border-color 0.3s ease`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: service.bg }}
                >
                  <Icon size={22} color={service.color} strokeWidth={2} />
                </div>
                <h3
                  className="text-[#0D0D0D] mb-2"
                  style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.02em" }}
                >
                  {service.category}
                </h3>
                <p className="text-[#777] text-sm mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-4">
                  {service.items.map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ background: service.color }}
                      />
                      <div>
                        <div className="text-[#0D0D0D] text-sm font-semibold">{item.title}</div>
                        <div className="text-[#888] text-sm leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
