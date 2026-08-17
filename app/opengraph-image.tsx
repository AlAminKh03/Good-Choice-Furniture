import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Baytak Home Services — Qatar";

/** Default social card in brand colors (PRD §12 palette). */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1B1C26 0%, #12131B 100%)",
          color: "#FCF7F4",
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            transform: "rotate(45deg)",
            border: "6px solid #E14B44",
            borderRadius: 8,
            display: "flex",
          }}
        />
        <div style={{ fontSize: 84, fontWeight: 800, marginTop: 36, letterSpacing: -2 }}>
          BAYTAK
        </div>
        <div style={{ fontSize: 30, color: "#EEDFD8", opacity: 0.8, marginTop: 8 }}>
          Home Services — Doha, Qatar
        </div>
      </div>
    ),
    size,
  );
}
