"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Image with a labelled placeholder. If the file at `src` is missing,
 * shows a dashed box naming the file to add (or `fallback` if given).
 */
export default function Slot({
  src,
  alt,
  className,
  label,
  fallback,
  style,
  eager,
}: {
  src: string;
  alt: string;
  className?: string;
  label?: string;
  fallback?: React.ReactNode;
  style?: React.CSSProperties;
  eager?: boolean;
}) {
  const [missing, setMissing] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // The error can fire before React hydrates, so check once on mount too.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setMissing(true);
  }, []);

  if (missing) {
    if (fallback !== undefined) return <>{fallback}</>;
    return (
      <div className={`slot-missing ${className ?? ""}`} style={style} role="img" aria-label={alt}>
        <span>{label ?? "Add image"}</span>
        {/* File hint is for local development only */}
        {process.env.NODE_ENV !== "production" && <code>public{src}</code>}
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setMissing(true)}
    />
  );
}
