export async function GET() {
  return Response.json({
    app: 333,
    status: "online",
    agent: "active"
  });
}
