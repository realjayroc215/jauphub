export async function GET() {
  return Response.json({
    app: 150,
    status: "online",
    agent: "active"
  });
}
