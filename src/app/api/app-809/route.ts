export async function GET() {
  return Response.json({
    app: 809,
    status: "online",
    agent: "active"
  });
}
