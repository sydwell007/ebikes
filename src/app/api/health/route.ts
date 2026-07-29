import { NextResponse } from "next/server";
import { BridgeApiError, bridgeFetch, isBridgeConfigured } from "@/lib/api/bridge";

export async function GET() {
  if (!isBridgeConfigured()) {
    return NextResponse.json({
      success: true,
      data: { service: "civitas-cargo-ebikes", status: "frontend-only", database: "not_configured" },
      message: "Running without a connected backend. Lead forms will show a direct-contact fallback.",
    });
  }

  try {
    const result = await bridgeFetch<Record<string, unknown>>("health.php");
    return NextResponse.json({ success: true, data: result.data, message: result.message });
  } catch (error) {
    const message = error instanceof BridgeApiError ? error.message : "Unexpected server error.";
    const status = error instanceof BridgeApiError ? error.status : 500;
    return NextResponse.json({ success: false, message }, { status });
  }
}
