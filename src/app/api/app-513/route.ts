export async function GET() {
  return Response.json({
    app: 513,
    status: "online",
    agent: "active"
  });
}
