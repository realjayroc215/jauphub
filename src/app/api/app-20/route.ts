export async function GET() {
  return Response.json({
    app: 20,
    status: "online",
    agent: "active"
  });
}
