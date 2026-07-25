export async function GET() {
  return Response.json({
    app: 509,
    status: "online",
    agent: "active"
  });
}
