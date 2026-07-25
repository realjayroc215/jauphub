export async function GET() {
  return Response.json({
    app: 686,
    status: "online",
    agent: "active"
  });
}
