export async function GET() {
  return Response.json({
    app: 101,
    status: "online",
    agent: "active"
  });
}
