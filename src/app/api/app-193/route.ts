export async function GET() {
  return Response.json({
    app: 193,
    status: "online",
    agent: "active"
  });
}
