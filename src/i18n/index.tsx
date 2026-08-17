import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { en, type Content } from "./en";
import { fr } from "./fr";
import { es } from "./es";
import { it } from "./it";

export type Lang = "en" | "fr" | "es" | "it";

export const languages: { code: Lang; label: string; name: string }[] = [
  { code: "en", label: "EN", name: "English" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "es", label: "ES", name: "Español" },
  { code: "it", label: "IT", name: "Italiano" },
];

const dictionaries: Record<Lang, Content> = { en, fr, es, it };

const STORAGE_KEY = "anchal-lang";

type I18nValue = { lang: Lang; setLang: (l: Lang) => void; t: Content };

const I18nContext = createContext<I18nValue>({ lang: "en", setLang: () => {}, t: en });

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && stored in dictionaries) {
      setLangState(stored);
      return;
    }
    const browser = window.navigator.language.slice(0, 2) as Lang;
    if (browser in dictionaries) setLangState(browser);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(() => ({ lang, setLang, t: dictionaries[lang] }), [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
