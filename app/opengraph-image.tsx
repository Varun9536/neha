import { ImageResponse } from "next/og";

export const alt = "Neha Singh - HR Recruiter and Human Resources Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "linear-gradient(135deg, #eef7ff 0%, #f7f3ff 52%, #eafaf1 100%)",
          color: "#101828",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 700,
            color: "#0f5ea8",
            letterSpacing: 0,
            marginBottom: 34,
          }}
        >
          HR Recruiter - Human Resources Portfolio
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 108,
            fontWeight: 800,
            lineHeight: 1,
            color: "#155eef",
            marginBottom: 28,
          }}
        >
          Neha Singh
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 42,
            lineHeight: 1.35,
            color: "#263244",
            maxWidth: 920,
          }}
        >
          IT recruitment, HR operations, onboarding, ATS tracking, and employee engagement.
        </div>
        <div
          style={{
            display: "flex",
            gap: 18,
            marginTop: 54,
            fontSize: 28,
            color: "#344054",
          }}
        >
          <span>Ghaziabad / Noida</span>
          <span>-</span>
          <span>MBA Human Resources</span>
          <span>-</span>
          <span>1+ year experience</span>
        </div>
      </div>
    ),
    size,
  );
}
