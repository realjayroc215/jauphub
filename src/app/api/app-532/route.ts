export async function GET() {
  return Response.json({
    app: 532,
    status: "online",
    agent: "active"
  });
}
