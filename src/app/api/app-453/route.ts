export async function GET() {
  return Response.json({
    app: 453,
    status: "online",
    agent: "active"
  });
}
