export async function GET() {
  return Response.json({
    app: 875,
    status: "online",
    agent: "active"
  });
}
