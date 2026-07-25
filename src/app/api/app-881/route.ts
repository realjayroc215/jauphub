export async function GET() {
  return Response.json({
    app: 881,
    status: "online",
    agent: "active"
  });
}
