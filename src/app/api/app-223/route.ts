export async function GET() {
  return Response.json({
    app: 223,
    status: "online",
    agent: "active"
  });
}
