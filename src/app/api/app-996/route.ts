export async function GET() {
  return Response.json({
    app: 996,
    status: "online",
    agent: "active"
  });
}
