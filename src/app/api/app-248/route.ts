export async function GET() {
  return Response.json({
    app: 248,
    status: "online",
    agent: "active"
  });
}
