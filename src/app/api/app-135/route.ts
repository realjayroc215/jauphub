export async function GET() {
  return Response.json({
    app: 135,
    status: "online",
    agent: "active"
  });
}
