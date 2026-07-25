export async function GET() {
  return Response.json({
    app: 132,
    status: "online",
    agent: "active"
  });
}
