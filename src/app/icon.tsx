import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          background: "linear-gradient(135deg, #22e678, #35b7ff)",
        }}
      >
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none">
          <path
            d="M13 2 L4 14 h6 l-1 8 9-12h-6z"
            fill="#001d10"
            stroke="#001d10"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
