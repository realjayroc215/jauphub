export async function GET() {
  return Response.json({
    app: 70,
    status: "online",
    agent: "active"
  });
}
