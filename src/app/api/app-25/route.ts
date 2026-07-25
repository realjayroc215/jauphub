export async function GET() {
  return Response.json({
    app: 25,
    status: "online",
    agent: "active"
  });
}
