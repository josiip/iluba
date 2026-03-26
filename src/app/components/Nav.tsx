import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import favicon from "/favicon_io-2/android-chrome-512x512.png";

export function Nav() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const navLinks = [
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.work"), href: "#work" },
    { label: t("nav.process"), href: "#process" },
    { label: t("nav.pricing"), href: "#pricing" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.faq"), href: "#faq" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setLangDropdownOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(255,255,255,0.92)"
            : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2 group"
          >
<img
  src={favicon}
  alt="logo"
  className="w-8 h-8 rounded-lg object-contain transition-transform duration-200 group-hover:scale-105"
/>
            <span className="text-[#0D0D0D] font-bold tracking-tight" style={{ fontSize: "1.1rem" }}>
              iluba.
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-[#555] hover:text-[#0D0D0D] transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + Language */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-[#555] hover:text-[#0D0D0D] hover:bg-gray-100 transition-colors flex items-center gap-1.5"
              >
                {i18n.language === "en" ? "EN" : "HR"}
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Dropdown Menu */}
              {langDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-1 bg-white border border-[#EBEBEB] rounded-lg shadow-lg py-2 min-w-40 z-50"
                  onMouseLeave={() => setLangDropdownOpen(false)}
                >
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                      i18n.language === "en"
                        ? "bg-orange-50 text-[#FF5C35] font-semibold"
                        : "text-[#555] hover:bg-gray-50 hover:text-[#0D0D0D]"
                    }`}
                  >
                    🇬🇧 English
                  </button>
                  <button
                    onClick={() => handleLanguageChange("hr")}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                      i18n.language === "hr"
                        ? "bg-orange-50 text-[#FF5C35] font-semibold"
                        : "text-[#555] hover:bg-gray-50 hover:text-[#0D0D0D]"
                    }`}
                  >
                    🇭🇷 Hrvatski
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav("#contact")}
              className="px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: "linear-gradient(135deg, #FF5C35 0%, #FF8A65 100%)" }}
            >
              {t("nav.startProject")}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={0} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)" }}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className="absolute top-0 right-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300"
          style={{ transform: menuOpen ? "translateX(0)" : "translateX(100%)" }}
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <span className="font-bold text-[#0D0D0D]" style={{ fontSize: "1.1rem" }}>iluba.</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left px-4 py-3 rounded-xl text-[#333] hover:bg-orange-50 hover:text-[#FF5C35] transition-all duration-150 text-base font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="p-6 space-y-3">
            {/* Language Inline Buttons */}
            <div className="flex gap-2 mb-2">
              <button
                onClick={() => handleLanguageChange("en")}
                className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  i18n.language === "en"
                    ? "bg-[#FF5C35] text-white"
                    : "bg-gray-100 text-[#555] hover:text-[#0D0D0D]"
                }`}
              >
                🇬🇧 EN
              </button>
              <button
                onClick={() => handleLanguageChange("hr")}
                className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  i18n.language === "hr"
                    ? "bg-[#FF5C35] text-white"
                    : "bg-gray-100 text-[#555] hover:text-[#0D0D0D]"
                }`}
              >
                🇭🇷 HR
              </button>
            </div>
            <button
              onClick={() => handleNav("#contact")}
              className="w-full px-5 py-3 rounded-full text-white font-semibold transition-all duration-200 hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #FF5C35 0%, #FF8A65 100%)" }}
            >
              {t("nav.startProject")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
