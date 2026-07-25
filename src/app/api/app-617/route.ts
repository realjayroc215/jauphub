export async function GET() {
  return Response.json({
    app: 617,
    status: "online",
    agent: "active"
  });
}
