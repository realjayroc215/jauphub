export async function GET() {
  return Response.json({
    app: 302,
    status: "online",
    agent: "active"
  });
}
