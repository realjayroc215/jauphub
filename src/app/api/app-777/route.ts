export async function GET() {
  return Response.json({
    app: 777,
    status: "online",
    agent: "active"
  });
}
