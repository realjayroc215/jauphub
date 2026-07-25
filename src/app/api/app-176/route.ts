export async function GET() {
  return Response.json({
    app: 176,
    status: "online",
    agent: "active"
  });
}
