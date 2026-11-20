import { ImageResponse } from "next/og"

export const alt = "Orvexa Systems — Software that runs everyday business"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#efefed",
          color: "#17191f",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 56,
              background: "#17191f",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            OS
          </div>
          <div style={{ fontSize: 28, fontWeight: 600 }}>Orvexa Systems</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.02 }}>Software that runs</div>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.02 }}>everyday business.</div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#4a4e58" }}>
            ShopDesk · RO Plant System — sales, udhaar, stock and bills on your phone.
          </div>
        </div>
        <div style={{ display: "flex", height: 14, width: 180, background: "#db442c", borderRadius: 4 }} />
      </div>
    ),
    size,
  )
}
