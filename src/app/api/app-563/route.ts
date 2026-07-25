export async function GET() {
  return Response.json({
    app: 563,
    status: "online",
    agent: "active"
  });
}
