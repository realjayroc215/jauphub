export async function GET() {
  return Response.json({
    app: 61,
    status: "online",
    agent: "active"
  });
}
