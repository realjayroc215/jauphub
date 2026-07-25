export async function GET() {
  return Response.json({
    app: 710,
    status: "online",
    agent: "active"
  });
}
