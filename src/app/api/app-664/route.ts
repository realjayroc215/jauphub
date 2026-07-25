export async function GET() {
  return Response.json({
    app: 664,
    status: "online",
    agent: "active"
  });
}
