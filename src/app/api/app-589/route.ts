export async function GET() {
  return Response.json({
    app: 589,
    status: "online",
    agent: "active"
  });
}
