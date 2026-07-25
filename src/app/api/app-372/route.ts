export async function GET() {
  return Response.json({
    app: 372,
    status: "online",
    agent: "active"
  });
}
