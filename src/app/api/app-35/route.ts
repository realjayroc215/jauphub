export async function GET() {
  return Response.json({
    app: 35,
    status: "online",
    agent: "active"
  });
}
