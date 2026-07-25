export async function GET() {
  return Response.json({
    app: 26,
    status: "online",
    agent: "active"
  });
}
