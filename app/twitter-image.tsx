import { ImageResponse } from "next/og"
import portfolioData from "@/data/portfolio-data.json"

export const runtime = "edge"

export const alt = "Amit Sarda - Business Consultant & Systems Designer"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  const { profile, services } = portfolioData

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #1e293b 0%, transparent 50%), radial-gradient(circle at 75% 75%, #1e293b 0%, transparent 50%)",
        }}
      >
        {/* Content Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px",
            textAlign: "center",
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#f8fafc",
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            {profile.name}
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#94a3b8",
              marginBottom: 40,
            }}
          >
            {profile.title}
          </div>

          {/* Services */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 12,
              maxWidth: 900,
            }}
          >
            {services.slice(0, 5).map((service) => (
              <div
                key={service.id}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "rgba(248, 250, 252, 0.1)",
                  borderRadius: 9999,
                  fontSize: 18,
                  color: "#e2e8f0",
                  border: "1px solid rgba(248, 250, 252, 0.2)",
                }}
              >
                {service.title}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: 48,
              marginTop: 48,
            }}
          >
            {profile.stats.slice(0, 3).map((stat, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: 700,
                    color: "#f8fafc",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    color: "#64748b",
                    marginTop: 4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
