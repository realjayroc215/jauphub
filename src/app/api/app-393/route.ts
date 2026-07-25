export async function GET() {
  return Response.json({
    app: 393,
    status: "online",
    agent: "active"
  });
}
