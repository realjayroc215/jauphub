export async function GET() {
  return Response.json({
    app: 124,
    status: "online",
    agent: "active"
  });
}
