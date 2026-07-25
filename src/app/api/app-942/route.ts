export async function GET() {
  return Response.json({
    app: 942,
    status: "online",
    agent: "active"
  });
}
