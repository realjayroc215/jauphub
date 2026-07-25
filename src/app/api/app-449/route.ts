export async function GET() {
  return Response.json({
    app: 449,
    status: "online",
    agent: "active"
  });
}
