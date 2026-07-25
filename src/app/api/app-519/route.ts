export async function GET() {
  return Response.json({
    app: 519,
    status: "online",
    agent: "active"
  });
}
