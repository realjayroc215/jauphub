export async function GET() {
  return Response.json({
    app: 45,
    status: "online",
    agent: "active"
  });
}
