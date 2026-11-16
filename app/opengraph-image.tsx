import { ImageResponse } from "next/og";

export const alt = "Faraz Ahmed — Senior Software Engineer, Android & Full-Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0f0f0f", color: "#fff", padding: 72, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: "#fff", color: "#0f0f0f", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 700 }}>FA</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 24, color: "rgba(255,255,255,.72)" }}>
            <div style={{ width: 12, height: 12, borderRadius: 6, background: "#00de51" }} /> Available for work
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, letterSpacing: -3, lineHeight: 1 }}>Faraz Ahmed</div>
          <div style={{ fontSize: 40, color: "rgba(255,255,255,.56)", marginTop: 20 }}>Senior Software Engineer — Android & Full-Stack</div>
        </div>
        <div style={{ display: "flex", gap: 48, fontSize: 28, color: "rgba(255,255,255,.72)" }}>
          <span>7+ years</span><span>1M+ downloads</span><span>12 merged OSS PRs</span><span style={{ color: "#00de51" }}>Karachi · Remote</span>
        </div>
      </div>
    ),
    size,
  );
}
