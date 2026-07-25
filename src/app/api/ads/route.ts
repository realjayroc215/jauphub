export async function GET() {
  return Response.json({
    provider: "Google AdSense",
    placements: ["banner", "sidebar", "footer"],
    enabled: true
  });
}
