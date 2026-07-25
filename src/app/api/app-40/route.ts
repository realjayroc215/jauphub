export async function GET() {
  return Response.json({
    app: 40,
    status: "online",
    agent: "active"
  });
}
