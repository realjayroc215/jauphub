export async function GET() {
  return Response.json({
    app: 238,
    status: "online",
    agent: "active"
  });
}
