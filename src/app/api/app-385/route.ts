export async function GET() {
  return Response.json({
    app: 385,
    status: "online",
    agent: "active"
  });
}
