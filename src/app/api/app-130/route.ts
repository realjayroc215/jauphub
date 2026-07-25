export async function GET() {
  return Response.json({
    app: 130,
    status: "online",
    agent: "active"
  });
}
