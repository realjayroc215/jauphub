export async function GET() {
  return Response.json({
    app: 980,
    status: "online",
    agent: "active"
  });
}
