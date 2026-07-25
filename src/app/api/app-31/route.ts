export async function GET() {
  return Response.json({
    app: 31,
    status: "online",
    agent: "active"
  });
}
