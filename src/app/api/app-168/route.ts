export async function GET() {
  return Response.json({
    app: 168,
    status: "online",
    agent: "active"
  });
}
