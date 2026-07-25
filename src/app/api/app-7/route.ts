export async function GET() {
  return Response.json({
    app: 7,
    status: "online",
    agent: "active"
  });
}
