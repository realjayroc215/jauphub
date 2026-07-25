export async function GET() {
  return Response.json({
    app: 472,
    status: "online",
    agent: "active"
  });
}
