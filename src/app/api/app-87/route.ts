export async function GET() {
  return Response.json({
    app: 87,
    status: "online",
    agent: "active"
  });
}
