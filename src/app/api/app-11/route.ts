export async function GET() {
  return Response.json({
    app: 11,
    status: "online",
    agent: "active"
  });
}
