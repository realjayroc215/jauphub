export async function GET() {
  return Response.json({
    app: 699,
    status: "online",
    agent: "active"
  });
}
