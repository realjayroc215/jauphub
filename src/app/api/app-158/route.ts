export async function GET() {
  return Response.json({
    app: 158,
    status: "online",
    agent: "active"
  });
}
