export async function GET() {
  return Response.json({
    app: 230,
    status: "online",
    agent: "active"
  });
}
