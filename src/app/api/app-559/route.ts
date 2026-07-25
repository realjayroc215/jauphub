export async function GET() {
  return Response.json({
    app: 559,
    status: "online",
    agent: "active"
  });
}
