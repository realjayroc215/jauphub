export async function GET() {
  return Response.json({
    app: 386,
    status: "online",
    agent: "active"
  });
}
