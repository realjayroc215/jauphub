export async function GET() {
  return Response.json({
    app: 388,
    status: "online",
    agent: "active"
  });
}
