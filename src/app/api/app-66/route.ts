export async function GET() {
  return Response.json({
    app: 66,
    status: "online",
    agent: "active"
  });
}
