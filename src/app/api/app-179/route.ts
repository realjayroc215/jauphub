export async function GET() {
  return Response.json({
    app: 179,
    status: "online",
    agent: "active"
  });
}
