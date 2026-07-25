export async function GET() {
  return Response.json({
    app: 1,
    status: "online",
    agent: "active"
  });
}
