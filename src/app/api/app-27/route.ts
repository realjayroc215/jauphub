export async function GET() {
  return Response.json({
    app: 27,
    status: "online",
    agent: "active"
  });
}
