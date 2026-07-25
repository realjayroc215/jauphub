export async function GET() {
  return Response.json({
    app: 750,
    status: "online",
    agent: "active"
  });
}
