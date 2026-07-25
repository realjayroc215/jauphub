export async function GET() {
  return Response.json({
    app: 912,
    status: "online",
    agent: "active"
  });
}
