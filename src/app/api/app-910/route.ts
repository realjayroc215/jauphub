export async function GET() {
  return Response.json({
    app: 910,
    status: "online",
    agent: "active"
  });
}
