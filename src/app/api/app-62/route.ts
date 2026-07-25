export async function GET() {
  return Response.json({
    app: 62,
    status: "online",
    agent: "active"
  });
}
