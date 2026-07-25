export async function GET() {
  return Response.json({
    app: 784,
    status: "online",
    agent: "active"
  });
}
