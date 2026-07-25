export async function GET() {
  return Response.json({
    app: 338,
    status: "online",
    agent: "active"
  });
}
