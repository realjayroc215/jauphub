export async function GET() {
  return Response.json({
    app: 84,
    status: "online",
    agent: "active"
  });
}
