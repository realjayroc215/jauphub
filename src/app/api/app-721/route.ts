export async function GET() {
  return Response.json({
    app: 721,
    status: "online",
    agent: "active"
  });
}
