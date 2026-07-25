export async function GET() {
  return Response.json({
    app: 412,
    status: "online",
    agent: "active"
  });
}
