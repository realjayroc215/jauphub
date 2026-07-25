export async function GET() {
  return Response.json({
    app: 340,
    status: "online",
    agent: "active"
  });
}
