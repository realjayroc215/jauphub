export async function GET() {
  return Response.json({
    app: 999,
    status: "online",
    agent: "active"
  });
}
