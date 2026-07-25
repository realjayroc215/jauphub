export async function GET() {
  return Response.json({
    app: 264,
    status: "online",
    agent: "active"
  });
}
