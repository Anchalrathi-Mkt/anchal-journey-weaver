import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";
import { useI18n } from "@/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      {/* Announcement bar */}
      <div className="bg-ink py-2.5 text-center text-ink-foreground">
        <p className="nav-link opacity-90">{t.ui.announcement}</p>
      </div>

      <div
        className={`transition-all duration-500 ${
          scrolled ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-background"
        }`}
      >
        <div className="mx-auto flex h-[74px] max-w-[1280px] items-center justify-between px-6 md:px-10">
          <a
            href="#introduction"
            className="font-serif text-[20px] uppercase tracking-[0.26em] md:text-[22px]"
          >
            {profile.name}
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rule-link nav-link text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="rule-link nav-link text-accent"
            >
              {t.ui.downloadCV}
            </a>
            <span aria-hidden className="h-4 w-px bg-border-strong" />
            <LanguageSwitcher />
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              aria-label={t.ui.openMenu}
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu className="h-5 w-5" strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background px-6 py-6 lg:hidden">
          <div className="flex h-6 items-center justify-between">
            <span className="font-serif text-[18px] uppercase tracking-[0.24em]">
              {profile.name}
            </span>
            <button type="button" aria-label={t.ui.closeMenu} onClick={() => setOpen(false)}>
              <X className="h-5 w-5" strokeWidth={1.25} />
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-16 flex flex-col">
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="display border-b border-border py-5 text-[34px]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-clay mt-10 self-start"
            >
              {t.ui.downloadCV}
            </a>
            <div className="mt-10">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
