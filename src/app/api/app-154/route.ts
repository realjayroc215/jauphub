export async function GET() {
  return Response.json({
    app: 154,
    status: "online",
    agent: "active"
  });
}
