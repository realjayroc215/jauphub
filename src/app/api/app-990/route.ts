export async function GET() {
  return Response.json({
    app: 990,
    status: "online",
    agent: "active"
  });
}
