export async function GET() {
  return Response.json({
    app: 199,
    status: "online",
    agent: "active"
  });
}
