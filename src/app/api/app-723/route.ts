export async function GET() {
  return Response.json({
    app: 723,
    status: "online",
    agent: "active"
  });
}
