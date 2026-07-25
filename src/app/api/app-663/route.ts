export async function GET() {
  return Response.json({
    app: 663,
    status: "online",
    agent: "active"
  });
}
