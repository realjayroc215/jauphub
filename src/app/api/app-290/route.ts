export async function GET() {
  return Response.json({
    app: 290,
    status: "online",
    agent: "active"
  });
}
