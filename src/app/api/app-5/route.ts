export async function GET() {
  return Response.json({
    app: 5,
    status: "online",
    agent: "active"
  });
}
