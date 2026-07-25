export async function GET() {
  return Response.json({
    app: 992,
    status: "online",
    agent: "active"
  });
}
