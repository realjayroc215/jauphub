export async function GET() {
  return Response.json({
    app: 764,
    status: "online",
    agent: "active"
  });
}
