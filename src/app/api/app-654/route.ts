export async function GET() {
  return Response.json({
    app: 654,
    status: "online",
    agent: "active"
  });
}
