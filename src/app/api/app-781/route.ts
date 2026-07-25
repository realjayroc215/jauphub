export async function GET() {
  return Response.json({
    app: 781,
    status: "online",
    agent: "active"
  });
}
