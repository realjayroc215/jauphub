export async function GET() {
  return Response.json({
    app: 3,
    status: "online",
    agent: "active"
  });
}
