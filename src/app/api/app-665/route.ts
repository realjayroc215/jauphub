export async function GET() {
  return Response.json({
    app: 665,
    status: "online",
    agent: "active"
  });
}
