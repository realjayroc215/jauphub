export async function GET() {
  return Response.json({
    app: 289,
    status: "online",
    agent: "active"
  });
}
