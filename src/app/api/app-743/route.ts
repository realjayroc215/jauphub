export async function GET() {
  return Response.json({
    app: 743,
    status: "online",
    agent: "active"
  });
}
