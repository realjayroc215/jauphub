export async function GET() {
  return Response.json({
    app: 184,
    status: "online",
    agent: "active"
  });
}
