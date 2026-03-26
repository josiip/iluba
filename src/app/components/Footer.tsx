import { useTranslation } from "react-i18next";

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export function Footer() {
  const { t } = useTranslation();

  const links = [
    {
      heading: t("footer.services.heading"),
      items: [
        { label: t("footer.services.uiux"), href: "#services" },
        { label: t("footer.services.webDev"), href: "#services" },
        { label: t("footer.services.brand"), href: "#services" },
        { label: t("footer.services.seo"), href: "#services" },
        { label: t("footer.services.marketing"), href: "#services" },
      ],
    },
    {
      heading: t("footer.company.heading"),
      items: [
        { label: t("footer.company.about"), href: "#about" },
        { label: t("footer.company.work"), href: "#work" },
        { label: t("footer.company.process"), href: "#process" },
        { label: t("footer.company.pricing"), href: "#pricing" },
        { label: t("footer.company.faq"), href: "#faq" },
      ],
    },
    {
      heading: t("footer.contact.heading"),
      items: [
        { label: t("footer.contact.bookCall"), href: "#contact" },
        { label: "hello@iluba.co", href: "mailto:hello@iluba.co", external: true },
      ],
    },
  ];

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
                iluba.
              </span>
            </div>
            <p className="text-[#888] text-sm leading-relaxed max-w-xs mb-6" style={{ lineHeight: 1.8 }}>
              {t("footer.tagline")}
            </p>
          </div>

          {/* Links */}
          {links.map((group, idx) => (
            <div key={idx}>
              <div
                className="text-[#0D0D0D] font-semibold text-sm mb-4"
                style={{ letterSpacing: "-0.01em" }}
              >
                {group.heading}
              </div>
              <ul className="space-y-3">
                {group.items.map((item) => (
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
            {t("footer.rights", { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500" style={{ animation: "pulse 2s ease-in-out infinite" }} />
              <span className="text-[#AAA] text-xs">{t("footer.available")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
