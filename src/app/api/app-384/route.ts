export async function GET() {
  return Response.json({
    app: 384,
    status: "online",
    agent: "active"
  });
}
