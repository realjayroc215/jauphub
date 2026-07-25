export async function GET() {
  return Response.json({
    app: 397,
    status: "online",
    agent: "active"
  });
}
