export async function GET() {
  return Response.json({
    app: 314,
    status: "online",
    agent: "active"
  });
}
