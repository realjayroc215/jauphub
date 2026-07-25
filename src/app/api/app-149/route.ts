export async function GET() {
  return Response.json({
    app: 149,
    status: "online",
    agent: "active"
  });
}
