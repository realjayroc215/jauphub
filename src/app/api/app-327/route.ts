export async function GET() {
  return Response.json({
    app: 327,
    status: "online",
    agent: "active"
  });
}
