export async function GET() {
  return Response.json({
    app: 776,
    status: "online",
    agent: "active"
  });
}
