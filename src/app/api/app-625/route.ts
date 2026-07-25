export async function GET() {
  return Response.json({
    app: 625,
    status: "online",
    agent: "active"
  });
}
