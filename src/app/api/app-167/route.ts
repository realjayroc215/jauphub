export async function GET() {
  return Response.json({
    app: 167,
    status: "online",
    agent: "active"
  });
}
