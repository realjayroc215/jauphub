export async function GET() {
  return Response.json({
    app: 599,
    status: "online",
    agent: "active"
  });
}
