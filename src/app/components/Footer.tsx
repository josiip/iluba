import { Twitter, Linkedin, Instagram, Dribbble } from "lucide-react";

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const links = {
  Services: [
    { label: "UI/UX Design", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "Brand Identity", href: "#services" },
    { label: "SEO & Growth", href: "#services" },
    { label: "Digital Marketing", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Selected Work", href: "#work" },
    { label: "Our Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  Contact: [
    { label: "Book a Call", href: "#contact" },
    { label: "hello@iluba.co", href: "mailto:hello@iluba.co", external: true },
    { label: "LinkedIn", href: "#", external: true },
    { label: "Dribbble", href: "#", external: true },
    { label: "Instagram", href: "#", external: true },
  ],
};

export function Footer() {
  return (
    <footer
      className="border-t border-[#F0F0F0]"
      style={{ background: "white" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-black"
                style={{ background: "linear-gradient(135deg, #FF5C35 0%, #FF8A65 100%)" }}
              >
                il
              </div>
              <span className="text-[#0D0D0D] font-bold" style={{ fontSize: "1.1rem" }}>
                iluba
              </span>
            </div>
            <p className="text-[#888] text-sm leading-relaxed max-w-xs mb-6" style={{ lineHeight: 1.8 }}>
              A boutique digital studio helping startups and modern businesses build exceptional online
              products, brands, and growth strategies.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Dribbble, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[#888] hover:bg-[#FF5C35] hover:text-white transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <div
                className="text-[#0D0D0D] font-semibold text-sm mb-4"
                style={{ letterSpacing: "-0.01em" }}
              >
                {group}
              </div>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    {item.external ? (
                      <a
                        href={item.href}
                        className="text-[#888] text-sm hover:text-[#FF5C35] transition-colors duration-150"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollTo(item.href)}
                        className="text-[#888] text-sm hover:text-[#FF5C35] transition-colors duration-150 text-left"
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#F0F0F0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#AAA] text-sm">
            © {new Date().getFullYear()} iluba digital studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#AAA] text-sm hover:text-[#666] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#AAA] text-sm hover:text-[#666] transition-colors">Terms of Service</a>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500" style={{ animation: "pulse 2s ease-in-out infinite" }} />
              <span className="text-[#AAA] text-xs">Available for projects</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
