export async function GET() {
  return Response.json({
    app: 852,
    status: "online",
    agent: "active"
  });
}
