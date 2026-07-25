export async function GET() {
  return Response.json({
    app: 485,
    status: "online",
    agent: "active"
  });
}
