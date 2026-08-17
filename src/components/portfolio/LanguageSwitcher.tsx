import { languages, useI18n } from "@/i18n";

export function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.ui.language}
      className={`flex items-center gap-1 ${dark ? "text-ink-foreground" : ""}`}
    >
      {languages.map((l, i) => (
        <span key={l.code} className="flex items-center">
          <button
            type="button"
            lang={l.code}
            title={l.name}
            aria-current={lang === l.code}
            onClick={() => setLang(l.code)}
            className={`nav-link px-1.5 py-1 transition-colors ${
              lang === l.code
                ? "text-accent"
                : dark
                  ? "opacity-60 hover:opacity-100"
                  : "text-foreground/55 hover:text-foreground"
            }`}
          >
            {l.label}
          </button>
          {i < languages.length - 1 && (
            <span aria-hidden className="text-border-strong">
              ·
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
