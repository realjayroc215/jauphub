export async function GET() {
  return Response.json({
    app: 285,
    status: "online",
    agent: "active"
  });
}
