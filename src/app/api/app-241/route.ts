export async function GET() {
  return Response.json({
    app: 241,
    status: "online",
    agent: "active"
  });
}
