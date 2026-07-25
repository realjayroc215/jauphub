export async function GET() {
  return Response.json({
    app: 59,
    status: "online",
    agent: "active"
  });
}
