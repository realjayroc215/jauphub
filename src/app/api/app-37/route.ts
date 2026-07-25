export async function GET() {
  return Response.json({
    app: 37,
    status: "online",
    agent: "active"
  });
}
