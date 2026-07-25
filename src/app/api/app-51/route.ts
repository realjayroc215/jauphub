export async function GET() {
  return Response.json({
    app: 51,
    status: "online",
    agent: "active"
  });
}
