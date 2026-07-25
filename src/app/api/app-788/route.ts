export async function GET() {
  return Response.json({
    app: 788,
    status: "online",
    agent: "active"
  });
}
