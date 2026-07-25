export async function GET() {
  return Response.json({
    app: 169,
    status: "online",
    agent: "active"
  });
}
