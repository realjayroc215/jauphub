export async function GET() {
  return Response.json({
    app: 203,
    status: "online",
    agent: "active"
  });
}
