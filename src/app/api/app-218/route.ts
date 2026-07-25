export async function GET() {
  return Response.json({
    app: 218,
    status: "online",
    agent: "active"
  });
}
