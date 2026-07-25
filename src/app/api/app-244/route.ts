export async function GET() {
  return Response.json({
    app: 244,
    status: "online",
    agent: "active"
  });
}
