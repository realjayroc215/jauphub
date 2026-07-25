export async function GET() {
  return Response.json({
    app: 926,
    status: "online",
    agent: "active"
  });
}
