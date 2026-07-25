export async function GET() {
  return Response.json({
    app: 583,
    status: "online",
    agent: "active"
  });
}
