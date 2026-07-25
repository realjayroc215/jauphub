export async function GET() {
  return Response.json({
    app: 227,
    status: "online",
    agent: "active"
  });
}
