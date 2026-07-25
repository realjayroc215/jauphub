export async function GET() {
  return Response.json({
    app: 354,
    status: "online",
    agent: "active"
  });
}
