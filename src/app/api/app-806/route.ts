export async function GET() {
  return Response.json({
    app: 806,
    status: "online",
    agent: "active"
  });
}
