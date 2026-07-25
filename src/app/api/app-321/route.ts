export async function GET() {
  return Response.json({
    app: 321,
    status: "online",
    agent: "active"
  });
}
