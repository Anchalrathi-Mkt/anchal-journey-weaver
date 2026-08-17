import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/data/portfolio";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 md:px-10">
        <a href="#introduction" className="font-serif text-[19px] tracking-tight">
          {profile.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rule-link text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-[13px] text-accent"
          >
            <span className="rule-link">Download CV</span> <span className="arrow-shift">↗</span>
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" strokeWidth={1.25} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background px-6 py-6 md:hidden">
          <div className="flex h-4 items-center justify-between">
            <span className="font-serif text-[19px]">{profile.name}</span>
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" strokeWidth={1.25} />
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-20 flex flex-col">
            {nav.map((item) => (
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
              className="label-xs mt-10 text-accent"
            >
              Download CV ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
