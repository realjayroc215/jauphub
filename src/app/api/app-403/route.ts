export async function GET() {
  return Response.json({
    app: 403,
    status: "online",
    agent: "active"
  });
}
