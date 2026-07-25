export async function GET() {
  return Response.json({
    app: 106,
    status: "online",
    agent: "active"
  });
}
