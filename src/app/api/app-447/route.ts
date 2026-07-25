export async function GET() {
  return Response.json({
    app: 447,
    status: "online",
    agent: "active"
  });
}
