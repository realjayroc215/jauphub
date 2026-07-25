export async function GET() {
  return Response.json({
    app: 835,
    status: "online",
    agent: "active"
  });
}
