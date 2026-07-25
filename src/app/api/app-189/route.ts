export async function GET() {
  return Response.json({
    app: 189,
    status: "online",
    agent: "active"
  });
}
