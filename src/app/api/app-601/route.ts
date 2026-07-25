export async function GET() {
  return Response.json({
    app: 601,
    status: "online",
    agent: "active"
  });
}
