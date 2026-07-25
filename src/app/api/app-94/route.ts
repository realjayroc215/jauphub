export async function GET() {
  return Response.json({
    app: 94,
    status: "online",
    agent: "active"
  });
}
