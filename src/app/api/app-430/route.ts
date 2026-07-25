export async function GET() {
  return Response.json({
    app: 430,
    status: "online",
    agent: "active"
  });
}
