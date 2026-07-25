export async function GET() {
  return Response.json({
    app: 143,
    status: "online",
    agent: "active"
  });
}
