export async function GET() {
  return Response.json({
    app: 209,
    status: "online",
    agent: "active"
  });
}
