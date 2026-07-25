export async function GET() {
  return Response.json({
    app: 279,
    status: "online",
    agent: "active"
  });
}
