export async function GET() {
  return Response.json({
    app: 857,
    status: "online",
    agent: "active"
  });
}
