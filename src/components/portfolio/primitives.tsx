import { useEffect, useRef, useState, type ReactNode } from "react";
import { X } from "lucide-react";

/** Detects missing images, including loads that failed before hydration. */
export function useImageFallback() {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  return { failed, imgRef, onError: () => setFailed(true) };
}


export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "figure";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as "div";
  return (
    <Comp
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Comp>
  );
}

export function Label({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "light" }) {
  return (
    <span className={`label-xs block ${tone === "light" ? "opacity-70" : ""}`}>{children}</span>
  );
}

export function Rule({ className = "" }: { className?: string }) {
  return <hr className={`border-0 border-t border-border ${className}`} />;
}

type MediaProps = {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  browser?: boolean;
  className?: string;
  onOpen?: () => void;
  priority?: boolean;
};

export function Media({
  src,
  alt,
  caption,
  ratio = "16 / 10",
  browser = false,
  className = "",
  onOpen,
  priority = false,
}: MediaProps) {
  const { failed, imgRef, onError } = useImageFallback();

  const inner = (
    <div className="relative h-full w-full overflow-hidden bg-surface">
      {failed ? (
        <div className="placeholder-fill flex h-full w-full flex-col items-center justify-center gap-2 px-6 text-center">
          <span className="label-xs">Website screenshot</span>
          <span className="text-[12px] text-muted-foreground">Add image to /public/images</span>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={onError}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );


  const body = (
    <div className={`zoom-media overflow-hidden rounded-[4px] border border-border ${className}`}>
      {browser && (
        <div className="flex items-center gap-1.5 border-b border-border bg-surface px-3 py-2">
          <span className="h-[6px] w-[6px] rounded-full border border-border-strong" />
          <span className="h-[6px] w-[6px] rounded-full border border-border-strong" />
          <span className="h-[6px] w-[6px] rounded-full border border-border-strong" />
        </div>
      )}
      <div style={{ aspectRatio: ratio }}>{inner}</div>
    </div>
  );

  return (
    <figure className="m-0">
      {onOpen ? (
        <button
          type="button"
          onClick={onOpen}
          aria-label={`Open larger view: ${alt}`}
          className="block w-full cursor-zoom-in text-left"
        >
          {body}
        </button>
      ) : (
        body
      )}
      {caption && (
        <figcaption className="label-xs mt-3 normal-case tracking-[0.14em]">{caption}</figcaption>
      )}
    </figure>
  );
}

export function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string | null;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [src, onClose]);

  if (!src) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-6"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image"
        className="absolute right-6 top-6 text-ink-foreground"
      >
        <X className="h-5 w-5" strokeWidth={1.25} />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-h-[85vh] max-w-[92vw] rounded-[4px] object-contain"
      />
    </div>
  );
}

export function ListColumns({ items, columns = 2 }: { items: string[]; columns?: number }) {
  return (
    <ul
      className="grid gap-x-10 gap-y-0"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {items.map((item) => (
        <li
          key={item}
          className="border-b border-border py-2.5 text-[15px] text-muted-foreground transition-colors duration-300 hover:text-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
