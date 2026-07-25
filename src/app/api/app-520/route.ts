export async function GET() {
  return Response.json({
    app: 520,
    status: "online",
    agent: "active"
  });
}
