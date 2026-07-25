export async function GET() {
  return Response.json({
    app: 330,
    status: "online",
    agent: "active"
  });
}
