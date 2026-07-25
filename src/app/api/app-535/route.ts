export async function GET() {
  return Response.json({
    app: 535,
    status: "online",
    agent: "active"
  });
}
