import { ImageResponse } from "next/og";

export const alt = "Maven Solutions — Specialty chemicals for pulp and paper manufacturing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "linear-gradient(135deg, #0b2239 0%, #102a43 62%, #1769aa 100%)", color: "white", display: "flex", height: "100%", width: "100%", padding: "78px", position: "relative", fontFamily: "Arial, sans-serif" }}>
      <div style={{ border: "1px solid rgba(255,255,255,.2)", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "46px", width: "100%" }}>
        <div style={{ color: "#9ed7d1", display: "flex", fontSize: 24, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase" }}>Maven Solutions</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontFamily: "Georgia, serif", fontSize: 64, fontWeight: 700, lineHeight: 1.08, maxWidth: 900 }}>Specialty chemicals for pulp &amp; paper manufacturing.</div>
          <div style={{ color: "#d8e0e5", display: "flex", fontSize: 27 }}>Process-led chemistry for retention, drainage, fibre recovery, sizing and process-water treatment.</div>
        </div>
        <div style={{ color: "#9ed7d1", display: "flex", fontSize: 21 }}>India-based technical solutions</div>
      </div>
    </div>,
    size,
  );
}
