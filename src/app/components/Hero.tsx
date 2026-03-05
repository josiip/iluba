import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles, Dot } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty("--mx", `${x}%`);
      hero.style.setProperty("--my", `${y}%`);
    };
    hero.addEventListener("mousemove", onMouseMove);
    return () => hero.removeEventListener("mousemove", onMouseMove);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,92,53,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(255,138,101,0.08) 0%, transparent 50%), #FAFAF8",
      }}
    >
      {/* Animated mesh blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: "600px",
            height: "600px",
            top: "-200px",
            right: "-100px",
            background:
              "radial-gradient(circle, rgba(255,92,53,0.08) 0%, transparent 70%)",
            animation: "float1 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "500px",
            height: "500px",
            bottom: "-150px",
            left: "-100px",
            background:
              "radial-gradient(circle, rgba(255,138,101,0.07) 0%, transparent 70%)",
            animation: "float2 10s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "300px",
            height: "300px",
            top: "40%",
            left: "30%",
            background:
              "radial-gradient(circle, rgba(255,92,53,0.05) 0%, transparent 70%)",
            animation: "float3 6s ease-in-out infinite",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border"
          style={{
            background: "rgba(255,92,53,0.08)",
            borderColor: "rgba(255,92,53,0.2)",
            color: "#FF5C35",
            animation: "fadeInUp 0.6s ease forwards",
          }}
        >
                        <div className="w-2 h-2 rounded-full bg-green-500" style={{ animation: "pulse 2s ease-in-out infinite" }} />

          Digital Studio · Design & Development
        </div>

        {/* Headline */}
          <h1
            className="text-[#0D0D0D] tracking-tight mb-6"
            style={{
              fontSize: "clamp(2.6rem, 6vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              animation: "fadeInUp 0.7s ease 0.1s forwards",
              opacity: 0,
            }}
          >
            <span style={{ whiteSpace: "nowrap" }}>
              Designing digital products that
            </span>
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #FF5C35 0%, #FF8A65 50%, #FF5C35 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              stand out.
            </span>
          </h1>

        {/* Tagline */}
        <p
          className="text-[#666] max-w-2xl mx-auto mb-10"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            lineHeight: 1.7,
            animation: "fadeInUp 0.7s ease 0.2s forwards",
            opacity: 0,
          }}
        >
          We help ambitious startups and modern businesses transform their
          digital presence — delivering conversion-focused design, high-performance
          development, and measurable growth results.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: "fadeInUp 0.7s ease 0.3s forwards", opacity: 0 }}
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="group flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-300 hover:scale-[1.03] hover:shadow-xl active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #FF5C35 0%, #FF8A65 100%)",
              boxShadow: "0 8px 32px rgba(255,92,53,0.35)",
            }}
          >
            Start a project
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
          <button
            onClick={() => scrollTo("#work")}
            className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-[#0D0D0D] border border-[#E0E0E0] bg-white hover:border-[#FF5C35] hover:text-[#FF5C35] transition-all duration-200 hover:scale-[1.02]"
          >
            View our work
          </button>
        </div>

        {/* Social proof bar */}
        <div
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
          style={{ animation: "fadeInUp 0.7s ease 0.45s forwards", opacity: 0 }}
        >
          {[
            { value: "30+", label: "Projects delivered" },
            { value: "100%", label: "Client satisfaction" },
            { value: "3×", label: "Avg. conversion lift" },
            { value: "5+", label: "Countries served" },
          ].map((stat) => (
            <div key={stat.value} className="text-center">
              <div
                className="font-bold text-[#0D0D0D]"
                style={{ fontSize: "1.5rem", letterSpacing: "-0.02em" }}
              >
                {stat.value}
              </div>
              <div className="text-[#888] text-sm mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: "fadeIn 1.5s ease 1s forwards", opacity: 0 }}
      >
        <span className="text-[#AAA] text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div
          className="w-px h-10 bg-gradient-to-b from-[#AAA] to-transparent"
          style={{ animation: "pulse 2s ease-in-out infinite" }}
        />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px, 20px) scale(1.05); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-20px, -30px) scale(1.03); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(15px, 15px) scale(1.08); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
